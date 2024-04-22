"use client";

import {
  SquarePen,
} from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Suspense, useState } from "react";
import messages from "../../../public/messages.json";
import { SearchInput } from "../ui/search-input";

interface User {
  name: string;
  username: string;
  avatar: string;
  relationships: string[];
  online: boolean;
}

//TODO message props probably should not inherit from the user, it does here because I mocked the data with a very flat structure for ease or regenerating
interface MessageProps extends User {
  message: string;
  dateSent: string;
}

function getInitials(str: string) {
  return str
    .split(/\s/)
    .reduce((response, word) => (response += word.slice(0, 1)), "");
}

//TODO I would move this to another file, and I create a separate message list component, that uses a Message as a child ie: <MessageList><Message /></MessageList>
//This Message component could potentially be reused in a toast or alternate UX
export function Message({
  name,
  username,
  avatar,
  message,
  dateSent,
  online,
}: MessageProps) {
  return (
    <div className="w-full p-2">
      <div className="flex items-center space-x-4 w-full">
        <div className="relative">
          <Avatar className="h-14 w-14 bg-background">
            <AvatarImage src={avatar} />
            <AvatarFallback>{getInitials(name)}</AvatarFallback>
          </Avatar>
          {online && (
            <div className="inline-block h-[15px] w-[15px] z-10 absolute rounded-full bg-lime-500 bottom-1 -right-1 border border-2 border-[white]"></div>
          )}
        </div>
        <div className="w-full">
          <div className="font-semibold">
            {name} - @{username}
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="truncate text-ellipsis w-[250px]">{message}</div>
            <div className="text-sm text-gray-600/55">{dateSent}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MessagesCard() {
  const [search, setSearch] = useState("");

  return (
    <Card className="w-full p-4 pt-2">
      <CardTitle className="flex items-center justify-between">
        <div>Messages</div>
        <Button variant="ghost" size="icon">
          <SquarePen />
        </Button>
      </CardTitle>
      <CardContent className="flex flex-col p-0 pt-4 space-y-4">
        <SearchInput
          placeholder="Search Messages"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Suspense fallback={<div>Loading...</div>}>
          <Tabs defaultValue="All" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger className="min-w-[25%]" value="All">
                All
              </TabsTrigger>
              <TabsTrigger className="min-w-[25%]" value="hosts">
                Hosts
              </TabsTrigger>
              <TabsTrigger className="min-w-[25%]" value="surfers">
                Surfers
              </TabsTrigger>
              <TabsTrigger className="min-w-[25%]" value="friends">
                Friends
              </TabsTrigger>
            </TabsList>
            <TabsContent value="All">
              {(messages.slice(0, 10) ?? [])
                .filter((message) => {
                  if (!search) return true;
                  return (
                    message.name.includes(search) ||
                    message.message.includes(search) ||
                    message.username.includes(search)
                  );
                })
                .map((message) => (
                  <Message key={message.id} {...message} />
                ))}
            </TabsContent>
            <TabsContent value="hosts">
              {(messages.slice(0, 10) ?? [])
                .filter((message) => {
                  if (!search) return message.relationships.includes("host");
                  return (
                    message.relationships.includes("host") &&
                    (message.name.includes(search) ||
                      message.message.includes(search) ||
                      message.username.includes(search))
                  );
                })
                .map((message) => (
                  <Message key={message.id} {...message} />
                ))}
            </TabsContent>
            <TabsContent value="surfers">
              {(messages.slice(0, 10) ?? [])
                .filter((message) => {
                  if (!search) return message.relationships.includes("surfer");
                  return (
                    message.relationships.includes("surfer") &&
                    (message.name.includes(search) ||
                      message.message.includes(search) ||
                      message.username.includes(search))
                  );
                })
                .map((message) => (
                  <Message key={message.id} {...message} />
                ))}
            </TabsContent>
            <TabsContent value="friends">
              {(messages.slice(0, 10) ?? [])
                .filter((message) => {
                  if (!search) return message.relationships.includes("friend");
                  return (
                    message.relationships.includes("friend") &&
                    (message.name.includes(search) ||
                      message.message.includes(search) ||
                      message.username.includes(search))
                  );
                })
                .map((message) => (
                  <Message key={message.id} {...message} />
                ))}
            </TabsContent>
          </Tabs>
        </Suspense>
        <Button variant="ghost">View All</Button>
      </CardContent>
    </Card>
  );
}
