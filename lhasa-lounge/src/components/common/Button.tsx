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
    const buttonStyles =
        variant === "primary"
            ? "bg-yellow-600 text-white"
            : "bg-white text-black";

    return (
        <button
            className={buttonStyles}
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