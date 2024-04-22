import { cn } from "@/lib/utils";
import { InputProps } from "./input";
import { Search } from "lucide-react";
import React from "react";

export type SearchProps = React.InputHTMLAttributes<HTMLInputElement>;

const SearchInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex h-10 items-center rounded-md border border-input bg-background pl-3 ring-offset-primary focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2",
          className
        )}
      >
        <Search className="h-[16px] w-[16px]" />
        <input
          {...props}
          type="search"
          ref={ref}
          className="bg-background w-full p-2 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
    );
  }
);

SearchInput.displayName = "SearchInput";

export { SearchInput };
