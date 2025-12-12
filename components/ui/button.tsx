"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils"; // Utility to merge class names

// CVA (class-variance-authority) button variants
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 hover-elevate active-elevate-2 transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:border hover:border-button-outline hover:bg-background/10 hover:bg-linear-to-br hover:from-white/10 hover:to-transparent",
        destructive: "bg-destructive text-destructive-foreground hover:border hover:border-button-outline hover:bg-background/10 hover:bg-linear-to-br hover:from-white/10 hover:to-transparent",
        outline: "border border-button-outline bg-background/10 backdrop-blur-md shadow-lg text-primary-foreground hover:border-none hover:bg-background/10 hover:bg-linear-to-br hover:from-white/10 hover:to-transparent",
        secondary: "bg-secondary text-secondary-foreground hover:border hover:border-button-outline hover:bg-background/10 hover:bg-linear-to-br hover:from-white/10 hover:to-transparent",
        ghost: "border border-transparent bg-background/10 backdrop-blur-md shadow-lg bg-linear-to-br from-white/10 to-transparent text-muted hover:border-button-outline",
      },
      size: {
        default: "min-h-9 px-4 py-2",
        sm: "min-h-8 rounded-md px-3 text-xs",
        lg: "min-h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Button props interface
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

// ForwardRef Button component
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
