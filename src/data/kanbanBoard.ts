export interface TaskItem {
    id: string;
    title: string;
    done?: boolean;
}

export interface TaskLane {
    id: string;
    title: string;
    note: string;
    items: TaskItem[];
}

export const taskBoard: TaskLane[] = [
    {
        id: "shipping",
        title: "Shipping",
        note: "Things that are actively moving and need to land clean.",
        items: [
            {
                id: "hero-pass",
                title: "Homepage hero polish",
                done: true,
            },
            {
                id: "blog-taskboard",
                title: "Compact blog taskboard",
            },
            {
                id: "light-mode-pass",
                title: "Another light mode contrast pass",
            },
        ],
    },
    {
        id: "features",
        title: "Features",
        note: "Concrete things we want in the work, not fake roadmap poetry.",
        items: [
            {
                id: "stygian-editor-surface",
                title: "Better Stygian Editor story on site",
            },
            {
                id: "modern-football-page",
                title: "Modern Football page with stronger game focus",
            },
            {
                id: "continuum-page-pass",
                title: "Field Continuum wording pass",
            },
        ],
    },
    {
        id: "ideas",
        title: "Ideas",
        note: "Fresh ideas worth keeping visible before they evaporate.",
        items: [
            {
                id: "progress-notes",
                title: "Short progress posts between big writeups",
            },
            {
                id: "project-journal",
                title: "Project journal view for slower notes",
            },
            {
                id: "logo-motion",
                title: "Very restrained logo motion, if it earns its keep",
            },
        ],
    },
    {
        id: "done",
        title: "Done",
        note: "What already landed, so visitors can see real movement.",
        items: [
            {
                id: "altralight-rebrand",
                title: "Altralight rebrand pass",
                done: true,
            },
            {
                id: "hero-center-mark",
                title: "Center mark artwork in hero",
                done: true,
            },
            {
                id: "blog-cleanup",
                title: "Removed filler blog entries",
                done: true,
            },
        ],
    },
];
