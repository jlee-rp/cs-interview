import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function UserAvatar() {
  return (
    <Avatar className="h-12 w-12 mr-2">
      <AvatarImage src="https://tcdn.couchsurfing.com/5r4b09YnhNjWRBsHj6CkJyE43F0=/200x200/smart/https://s3.amazonaws.com/images.couchsurfing.us/1SHJQUU/18395756_l_b13919670f868a75dde48fa28e6932ef.jpg" />
      <AvatarFallback>JL</AvatarFallback>
    </Avatar>
  );
}
