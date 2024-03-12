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
