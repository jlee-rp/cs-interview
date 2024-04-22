"use client";

import {
  Banknote,
  Calendar,
  Car,
  CircleCheck,
  CircleCheckBig,
  HandCoins,
  Hotel,
  MapPin,
  MapPinIcon,
  NotebookTabs,
  NotepadText,
  PaintBucket,
  Pin,
  Plane,
  PlaneLanding,
  PlaneTakeoff,
  Ticket,
  Wand,
  WandSparkles,
} from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";
import { Avatar } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";

export function PlanCard() {
  return (
    <Card>
      <CardHeader className="-m-6 rounded-lg">
        <div className="flex relative justify-center items-center rounded-t-lg w-full h-[200px] bg-cover bg-center bg-[url('https://a.cdn-hotels.com/gdcs/production109/d34/0e2d7854-11df-4ca9-8018-211e8ae372e5.jpg?impolicy=fcrop&w=800&h=533&q=medium')]">
          <div className="absolute text-[72px] text-white flex justify-center items-center drop-shadow-md">
            Bali
          </div>
        </div>

        {/* <img src="https://a.cdn-hotels.com/gdcs/production109/d34/0e2d7854-11df-4ca9-8018-211e8ae372e5.jpg?impolicy=fcrop&w=800&h=533&q=medium" className="w-full h-100">> */}
      </CardHeader>
      <CardTitle className="mt-4 px-4 flex items-center justify-between">
        <div className="flex items-center">
          <MapPin className="mr-2" /> My Trip To Bali
        </div>
        <div className="flex items-center">
          <Calendar className="mr-2" /> Sept. 12 - Sept. 22 2024
        </div>
      </CardTitle>
      <CardContent>
        <Separator className="my-4" />
        <div>
          <div className="font-semibold text-xl mb-2">My Host</div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage src="https://tcdn.couchsurfing.com/4RfPHjULlOGf3QR58bEahgx7H1M=/200x200/smart/https://s3.amazonaws.com/ht-images.couchsurfing.com/u/3951475/80b24cd1-6271-41a8-bc8a-91d832f066b2" />
              </Avatar>
              <div>
                <div className="font-semibold">Jamie Lancaster</div>
                <div className="text-sm font-light flex items-center">
                  @jamieBaliHost{" "}
                  <CircleCheckBig className="h-4 w-4 bg-green-500 rounded-full text-white ml-2" />
                </div>
              </div>
            </div>
            <div>
              <Button>Message Host</Button>
            </div>
          </div>
        </div>

        <Separator className="my-4" />

        <div className="flex justify-between">
          <div className="font-semibold text-xl ">Trip Details</div>
        </div>
        <div className="mb-2">Budget: $1600 | Allocated: $1100</div>
        <Separator />
        <div className="mt-2 flex flex-col md:flex-row justify-between">
          <div className="font-semibold">Air Travel Details</div>
          <div className="flex items-center space-x-2 py-2 justify-between md:justify-start md:py-0">
            <Label htmlFor="allow-host">
              Share Air Travel Details With Host
            </Label>
            <Switch id="allow-host" />
          </div>
        </div>
        <div className="flex items-center">
          <PlaneTakeoff className="h-4 w-4 mr-2" /> Depart: 9/12/2024 - 7:30pm
        </div>
        <div className="flex items-center">
          <PlaneLanding className="h-4 w-4 mr-2" /> Return: 9/22/2024 - 10:30am
        </div>
        <div className="flex items-center">
          <Ticket className="h-4 w-4 mr-2" /> Flight: #3024
        </div>
        <div className="flex items-center">
          <Banknote className="h-4 w-4 mr-2" /> Cost: $684.34
        </div>
        <div className="flex items-center">
          <NotepadText className="h-4 w-4 mr-2" /> Jamie (Host) will pick up at
          the airport.
        </div>
        <Separator className="my-2" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <Button variant="ghost">
              <Plane className="h-4 w-4 mr-2" />
              Add Airline Info
            </Button>
            <Button variant="ghost">
              <Car className="h-4 w-4 mr-2" />
              Add Rental Car
            </Button>
            <Button variant="ghost">
              <Hotel className="h-4 w-4 mr-2" />
              Add Hotel
            </Button>
          </div>
          <div>
            <Button variant="ghost">
              <NotebookTabs className="h-4 w-4 mr-2" />
              Generate An Itinerary
            </Button>
            <Button variant="ghost">
              <WandSparkles className="h-4 w-4 mr-2" />
              Generate A Packing List
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
