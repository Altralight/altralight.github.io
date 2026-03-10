import childProcess from "node:child_process";
import { syncBuiltinESMExports } from "node:module";

// Vite pokes `net use` on Windows to sniff mapped drives. In this sandbox that
// child process gets blocked with EPERM, which is enough to kill Astro builds
// for no good reason. We don't need mapped-drive detection here, so lie and move on.
const originalExec = childProcess.exec;
const originalExecFile = childProcess.execFile;

childProcess.exec = function patchedExec(command, options, callback) {
    const normalized = typeof command === "string" ? command.trim().toLowerCase() : "";

    if (process.platform === "win32" && normalized === "net use") {
        const cb = typeof options === "function" ? options : callback;

        queueMicrotask(() => {
            cb?.(null, "", "");
        });

        return {
            kill() {},
            on() { return this; },
            once() { return this; },
            stdout: null,
            stderr: null,
        };
    }

    return originalExec.call(this, command, options, callback);
};

childProcess.execFile = function patchedExecFile(file, args, options, callback) {
    const normalizedFile = typeof file === "string" ? file.trim().toLowerCase() : "";
    const normalizedArgs = Array.isArray(args) ? args.map((arg) => String(arg).trim().toLowerCase()) : [];

    if (process.platform === "win32" && normalizedFile.endsWith("cmd.exe") && normalizedArgs.join(" ") === "/d /s /c \"net use\"") {
        const cb = typeof options === "function" ? options : callback;

        queueMicrotask(() => {
            cb?.(null, "", "");
        });

        return {
            kill() {},
            on() { return this; },
            once() { return this; },
            stdout: null,
            stderr: null,
        };
    }

    return originalExecFile.call(this, file, args, options, callback);
};

syncBuiltinESMExports();

const [, , astroCommand = "dev", ...astroArgs] = process.argv;

process.argv = [
    process.argv[0],
    "astro",
    astroCommand,
    ...astroArgs,
];

await import(new URL("../node_modules/astro/astro.js", import.meta.url));
