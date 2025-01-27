import React, { ReactNode } from "react";

type ButtonVariants = "primary" | "secondary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: ButtonVariants;
}

const Button: React.FC<ButtonProps> = ({ children, variant = "primary", ...props }) => {
    const variantProps: { [key in ButtonVariants]: string } = {
        primary: `
                bg-white hover:opacity-50 active:bg-gray-500 text-black
                disabled:opacity-80 disabled:bg-gray-500/20
            `,
        secondary: `
                bg-black hover:opacity-50 active:bg-gray-500 text-white
                disabled:opacity-80 disabled:bg-gray-500/20
            `,
    };

    return (
        <>
            <button
                {...props}
                type={props.type || "button"}
                className={`rounded-full px-4 cursor-pointer py-2 flex w-fit items-center justify-center transition-all ${
                    variantProps[variant]
                } ${props.className || ""}`}
            >
                {children}
            </button>
        </>
    );
};

export default Button;
