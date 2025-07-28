import React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  text: string;
  className: string;
  animation?: boolean;
  onClick?: () => void;
  type?: "reset" | "submit";
  variant?: "primary_btn" | "secondary_btn";
};

const Button: React.FC<ButtonProps> = ({
  type,
  text,
  onClick,
  className,
  animation,
  variant,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      data-aos={animation ? "fade-up" : undefined}
      className={cn(
        "text-black text-lg font-bold",
        variant ? "text-red-500" : "text-blue-500",
        className
      )}
    >
      {text}
    </button>
  );
};

export default Button;
