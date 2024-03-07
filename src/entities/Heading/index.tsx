import React from 'react';

const sizes = {
    s: 'text-[25px] font-semibold',
    md: 'text-3xl font-semibold',
    xs: 'text-[22px] font-semibold',
    lg: 'text-[45px] font-semibold',
};

export type HeadingProps = Partial<{
    className: string;
    as: any;
    size: keyof typeof sizes;
}> &
    React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLSpanElement>,
        HTMLSpanElement
    >;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
    children,
    className = '',
    size = 's',
    as,
    ...restProps
}) => {
    const Component = as || 'h6';

    return (
        <Component
            className={`text-gray-900 font-inter ${className} ${sizes[size]}`}
            {...restProps}
        >
            {children}
        </Component>
    );
};

export default Heading;
