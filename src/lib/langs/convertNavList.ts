export const convertNavList = <T extends { href: string }>(
    list: T[],
    lang: string
) => {
    return list.map(v => {
        return {
            ...v,
            href: v.href.replace('[lang]', lang),
        };
    });
};
