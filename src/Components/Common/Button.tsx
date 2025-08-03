import React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  text: string;
  className?: string;
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
  animation = true,
  variant = "primary_btn",
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      data-aos={animation ? "fade-up" : undefined}
      className={cn(
        "text-black text-lg font-bold", // Default/Common Class
        variant === "primary_btn" && "text-red-500",
        variant === "secondary_btn" && "text-green-500",
        className
      )}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
