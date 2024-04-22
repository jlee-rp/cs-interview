import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardContent, CardFooter } from "../ui/card";

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

export function ProfileCard() {
  return (
    <Card className="w-full p-2">
      <CardContent className="pt-4">
        <div className="flex items-center space-x-4 ">
          <Avatar className="h-14 w-14">
            <AvatarImage src="https://tcdn.couchsurfing.com/5r4b09YnhNjWRBsHj6CkJyE43F0=/200x200/smart/https://s3.amazonaws.com/images.couchsurfing.us/1SHJQUU/18395756_l_b13919670f868a75dde48fa28e6932ef.jpg" />
            <AvatarFallback>JL</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">Jess Lee</div>
            <div className="font-light">@jess-lee</div>
          </div>
        </div>
        <div className="mt-4 justify-center">
          <div className="flex justify-between spacce-x-2">
            <Stat value={100} description="Followers" />
            <Stat value={45} description="Hosted" />
            <Stat value={25} description="Posts" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
