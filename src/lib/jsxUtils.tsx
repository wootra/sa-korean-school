export const multiLineText = (
    txt: string | undefined,
    isCenter: boolean = false
) => {
    return (txt ?? '').split('\n').map(line => (
        <span className={isCenter ? '' : `w-full text-left`} key={line}>
            {line}
        </span>
    ));
};

export const multiLineTextIntoBlocks = (
    txt: string | undefined,
    className: string = '',
    Tag: 'span' | 'p' = 'span'
) => {
    return (txt ?? '').split('\n').map(line => (
        <Tag key={line} className={className}>
            {line}
        </Tag>
    ));
};
