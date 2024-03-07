import React from 'react';

const shapes = {
    round: 'rounded-tl-[10px] rounded-bl-[10px]',
} as const;
const variants = {
    fill: {
        white_A700: 'bg-white-A700 text-gray-700_01',
        white_A700_33: 'bg-white-A700_33 text-white-A700',
    },
} as const;
const sizes = {
    md: 'h-[66px] px-5 text-base',
    xs: 'h-[50px] pl-[18px] pr-[35px] text-base',
    sm: 'h-[59px] pl-5 pr-[35px] text-base',
} as const;

type InputProps = Omit<
    React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    >,
    'size' | 'prefix' | 'type' | 'onChange'
> &
    Partial<{
        className: string;
        name: string;
        placeholder: string;
        type: string;
        label: string;
        prefix: React.ReactNode;
        suffix: React.ReactNode;
        onChange: Function;
        shape: keyof typeof shapes;
        variant: keyof typeof variants;
        size: keyof typeof sizes;
        color: string;
    }>;
const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        {
            className = '',
            name = '',
            placeholder = '',
            type = 'text',
            children,
            label = '',
            prefix,
            suffix,
            onChange,
            shape = 'round',
            variant = 'fill',
            size = 'sm',
            color = 'white_A700_33',
            ...restProps
        },
        ref
    ) => {
        const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
            if (onChange) onChange(e?.target?.value);
        };

        return (
            <>
                <div
                    className={`${className} flex items-center justify-center rounded-tl-[10px] rounded-bl-[10px] text-base ${
                        shapes[shape] || ''
                    } ${
                        variants[variant]?.[
                            color as keyof (typeof variants)[typeof variant]
                        ] ||
                        variants[variant] ||
                        ''
                    } ${sizes[size] || ''}`}
                >
                    {!!label && label}
                    {!!prefix && prefix}
                    <input
                        ref={ref}
                        type={type}
                        name={name}
                        onChange={handleChange}
                        placeholder={placeholder}
                        {...restProps}
                    />
                    {!!suffix && suffix}
                </div>
            </>
        );
    }
);
Input.displayName = 'Input';
export default Input;
