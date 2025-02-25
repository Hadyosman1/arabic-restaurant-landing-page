import { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode | ReactNode[];
}

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "inline-flex items-center gap-2.5 rounded-full bg-primary px-4 py-1.5 transition-all hover:bg-primary/80",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
