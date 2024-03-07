import React from 'react';

const sizes = {
    xs: 'text-xs font-medium leading-[17px]',
    s: 'text-base font-normal leading-5',
};

export type TextProps = Partial<{
    className: string;
    as: any;
    size: keyof typeof sizes;
}> &
    React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLSpanElement>,
        HTMLSpanElement
    >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
    children,
    className = '',
    as,
    size = 'xs',
    ...restProps
}) => {
    const Component = as || 'p';

    return (
        <Component
            className={`text-deep_orange-400 font-airbnbcerealapp ${className} ${sizes[size]}`}
            {...restProps}
        >
            {children}
        </Component>
    );
};

export default Text;
