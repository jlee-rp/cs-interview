import { Image, Paperclip, Video } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { CommentInput } from "../ui/comment-input";
import { UserAvatar } from "../user-avatar";
import { Separator } from "../ui/separator";

export function NewPostCard() {
  return (
    <Card>
      <CardTitle className="p-4">Create Post</CardTitle>
      <CardContent className="flex flex-col space-y-4 py-0">
        <div className="flex items-center space-x-2">
          <UserAvatar />
          <CommentInput
            className="h-12"
            placeholder="Where have you been lately?"
          />
          <Button className="h-12">Create Post</Button>
        </div>
        <Separator />
        <div className="flex space-x-2">
          <Button variant="ghost" className="text-gray-400">
            <Image className="h-4 w-4 mr-2" /> Image
          </Button>
          <Button variant="ghost" className="text-gray-400">
            <Video className="h-4 w-4 mr-2" /> Video
          </Button>
          <Button variant="ghost" className="text-gray-400">
            <Paperclip className="h-4 w-4 mr-2" /> Attachment
          </Button>
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
