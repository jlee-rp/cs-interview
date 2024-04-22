import {
  Backpack,
  Calendar,
  Component,
  ConciergeBell,
  Home,
  MessageSquarePlus,
  Users,
} from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function Stat({
  value,
  description,
}: {
  value: number;
  description: string;
}) {
  return (
    <div className="flex flex-col bg-background p-2 rounded-lg">
      <div className="text-center font-semibold">{value}</div>
      <div className="text-center">{description}</div>
    </div>
  );
}

//TODO create a NavList/NavItem component tree
export function NavigationCard() {
  return (
    <Card className="w-full p-2">
      <CardContent className="p-2">
        <div className="flex flex-col">
          <Link href="/my-plans" className="hover:bg-background p-2 rounded-lg">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <Backpack className="h-4 w-4 mr-2" /> My Plans
              </div>
              <Badge>3</Badge>
            </div>
          </Link>
          <Link href="/my-plans" className="hover:bg-background p-2 rounded-lg">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <ConciergeBell className="h-4 w-4 mr-2" /> Hosting
              </div>
            </div>
          </Link>
          <Link href="/my-plans" className="hover:bg-background p-2 rounded-lg">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" /> Events
              </div>
            </div>
          </Link>
          <Link href="/my-plans" className="hover:bg-background p-2 rounded-lg">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <MessageSquarePlus className="h-4 w-4 mr-2" /> Invites
              </div>
              <Badge>3</Badge>
            </div>
          </Link>
          <Separator className="my-4" />
          <div className="text-lg mb-4 font-light">Groups</div>
          <Link href="/my-plans" className="hover:bg-background p-2 rounded-lg">
            <div className="flex items-center w-full space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-sky-500 text-white text-sm h-8 w-8">
                  TA
                </AvatarFallback>
              </Avatar>
              <div>Travelers Anonymous</div>
            </div>
          </Link>
          <Link href="/my-plans" className="hover:bg-background p-2 rounded-lg">
            <div className="flex items-center w-full space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-orange-500 text-white text-sm h-8 w-8">
                  AH
                </AvatarFallback>
              </Avatar>
              <div>Arizona Hosts</div>
            </div>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
