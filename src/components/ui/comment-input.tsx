import { cn } from "@/lib/utils";
import { InputProps } from "./input";
import { SmilePlus } from "lucide-react";
import React from "react";
import { Button } from "./button";

const CommentInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex flex-1 h-10 items-center rounded-md border border-input bg-background pr-3 ring-offset-primary focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2",
          className
        )}
      >
        <input
          {...props}
          type="search"
          ref={ref}
          className="bg-background w-full p-2 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        />
        <Button size="icon" variant="ghost" className="hover:border">
          <SmilePlus className="h-[16px] w-[16px]" />
        </Button>
      </div>
    );
  }
);

CommentInput.displayName = "CommentInput";

export { CommentInput };
