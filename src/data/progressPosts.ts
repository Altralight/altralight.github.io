export interface ProgressPost {
    slug: string;
    title: string;
    date: string;
    summary: string;
    href: string;
}

export const progressPosts: ProgressPost[] = [
    {
        slug: "stygian-runtime-story",
        title: "Stygian: why we built a data-oriented UI runtime in C23",
        date: "2026-03-11",
        summary: "A deep walkthrough of the Stygian runtime model, SoA layout, commit pipeline, backend access points, and the influences shaping its direction.",
        href: "/blog/stygian/",
    },
    {
        slug: "stygian-editor-intent-and-roadmap",
        title: "Stygian Editor: visual authoring direction",
        date: "2026-03-11",
        summary: "A look at the Editor direction: Figma-inspired workflows, visual authoring goals, and where we want this tool to go next.",
        href: "/blog/stygian-editor/",
    },
];
