import type { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    variant?: "primary" | "secondary";
    onClick?: () => void;
}

const Button = ({
    children,
    variant = "primary",
    onClick,
}: ButtonProps) => {

    const baseStyles =
        "px-6 py-3 rounded-full font-medium transition-colors duration-200";

    const variantStyles = {
        primary: "bg-yellow-600 text-white hover:bg-yellow-500",
        secondary: "border border-white text-white hover:bg-white hover:text-black",
    };

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
/*Now the component

const Button = ({
    children,
    variant = "primary",
    onClick,
}: ButtonProps) => {

The

variant = "primary"

is just a default parameter.

Exactly like

void Spawn(int amount = 5)
*/