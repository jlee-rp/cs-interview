"use client";

import React from "react";
import { Trademark } from "./trademark";
import { AppSearch } from "./app-search";
import { Avatar } from "./ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { User } from "./user";

//TODO this can be SSR but the Avatar needs to be modified
export function Header() {
  return (
    <div className="flex justify-between items-center w-full bg-white min-h-30 px-4 py-4 border-b sticky top-0 z-50">
      <Trademark />
      <AppSearch />
      <User />
    </div>
  );
}
