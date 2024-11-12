export type ChildElement = { title?: string; value?: string; desc?: string };
export type DocElement = {
    title: string;
    value?: string;
    desc?: string;
    children?: ChildElement[];
};
