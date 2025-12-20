"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.ComponentProps<"input"> {}

/**
 * Input component
 * Tailwind CSS styled input with focus, disabled, and file input support
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => (
    <input
      type={type}
      ref={ref}
      className={cn(
        "flex h-10 w-full rounded-md bg-secondary-background px-3 py-2 text-base " +
          "ring-offset-secondary-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-muted-dark " +
          "placeholder:text-secondary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 " +
          "disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  )
);

Input.displayName = "Input";

export { Input };
