export interface Page {
    title: string;
    target: string;
    cta?: string;
    subpages?: Page[];
}
