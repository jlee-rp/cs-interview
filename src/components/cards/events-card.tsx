"use client";

import {
  Backpack,
  Calendar,
  ConciergeBell,
  Home,
  SquarePen,
  Users,
} from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Suspense, useState } from "react";

import events from "../../../public/events.json";
import { SearchInput } from "../ui/search-input";

interface User {
  name: string;
  handle: string;
  image: string;
  initials: string;
}

interface EventProps {
  id: number;
  event_name: string;
  date: string;
  city: string;
  country: string;
  upcoming: boolean;
}

export function Event({
  id,
  event_name,
  date,
  city,
  country,
  upcoming,
}: EventProps) {
  return (
    <div className="w-full p-2">
      <Button
        className="w-full content-start text-left px-2 py-4 justify-start h-14"
        size="lg"
        variant="ghost"
      >
        <div className="flex w-full items-center">
          <Calendar className="w-6 h-6 mr-4" />
          <div className="flex flex-col w-full">
            <div className="font-semibold">{event_name}</div>
            <div className="flex text-left justify-between text-sm text-gray-600/55">
              <div className="truncate text-ellipsis w-[250px]">
                {city}, {country}
              </div>
              <div className="text-sm text-gray-600/55">{date}</div>
            </div>
          </div>
        </div>
      </Button>
    </div>
  );
}

export function EventsCard() {
  const [search, setSearch] = useState("");

  return (
    <Card className="w-full p-4 pt-2">
      <CardTitle className="flex items-center justify-between">
        <div>Events</div>
        <Button variant="ghost" size="icon">
          <SquarePen />
        </Button>
      </CardTitle>
      <CardContent className="flex flex-col p-0 pt-4 space-y-4">
        <SearchInput
          placeholder="Search events"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Suspense fallback={<div>Loading...</div>}>
          <Tabs defaultValue="Upcoming" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger className="min-w-[50%]" value="Upcoming">
                Upcoming
              </TabsTrigger>
              <TabsTrigger className="min-w-[50%]" value="Past">
                Past
              </TabsTrigger>
            </TabsList>
            <TabsContent value="Upcoming">
              {(events.slice(0, 10) ?? [])
                .filter((event) => event.upcoming)
                .map((event) => (
                  <Event key={event.id} {...event} />
                ))}
            </TabsContent>
            <TabsContent value="Past">
              {(events.slice(0, 10) ?? [])
                .filter((event) => !event.upcoming)
                .map((event) => (
                  <Event key={event.id} {...event} />
                ))}
            </TabsContent>
          </Tabs>
        </Suspense>
        <Button variant="ghost">View All Events</Button>
      </CardContent>
    </Card>
  );
}
