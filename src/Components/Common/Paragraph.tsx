import React from "react";
import { cn } from "@/lib/utils";

type ParagraphProps = {
  text: string;
  className?: string;
  animation?: boolean;
};

const Paragraph = ({ text, className, animation = true }: ParagraphProps) => {
  return (
    <p
      data-aos={animation ? "fade-up" : undefined}
      className={cn("default-design", className)}
    >
      {text}
    </p>
  );
};

export default Paragraph;
