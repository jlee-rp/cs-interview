import {
  BellDot,
  ChevronDown,
  Settings,
} from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function User() {
  return (
    <div className="flex items-center space-x-6">
      <Button className="hidden md:flex" variant="ghost" size="icon">
        <BellDot />
      </Button>
      <Button className="hidden md:flex" variant="ghost" size="icon">
        <Settings />
      </Button>
      <Avatar className="h-14 w-14">
        <AvatarImage src="https://tcdn.couchsurfing.com/5r4b09YnhNjWRBsHj6CkJyE43F0=/200x200/smart/https://s3.amazonaws.com/images.couchsurfing.us/1SHJQUU/18395756_l_b13919670f868a75dde48fa28e6932ef.jpg" />
        <AvatarFallback>JL</AvatarFallback>
      </Avatar>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center">
          Jess Lee <ChevronDown className="h-6 w-6 ml-2" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
