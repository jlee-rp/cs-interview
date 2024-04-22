"use client";

import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card";
import { Heart, MessagesSquare, Share2 } from "lucide-react";
import { Separator } from "../ui/separator";
import { CommentInput } from "../ui/comment-input";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface Post {
  title: string;
  content: string;
  image: string;
  hash_tags: string[];
  datePosted: string;
  avatar: string;
  name: string;
  city: string;
  country: string;
}

export function PostCard({
  title,
  content,
  image,
  name,
  hash_tags,
  avatar,
  datePosted,
  city,
  country,
}: Post) {
  return (
    <Card className="p-4">
      <CardTitle className="mt-2 ml-4">
        <div className="flex items-center space-x-2">
          <Avatar className="h-14 w-14 bg-background">
            <AvatarImage src={avatar} />
          </Avatar>
          <div>
            <div className="text-xl font-semibold">{name}</div>
            <div className="text-sm text-gray-500">
              @username | {datePosted} | {city}, {country}
            </div>
          </div>
        </div>
      </CardTitle>
      <CardContent>
        <div className="flex -ml-4">
          {hash_tags.map((tag) => (
            <Button key={tag} variant="link">
              #{tag}
            </Button>
          ))}
        </div>
        <div className="w-[50%] truncate text-ellipsis text-xl mb-2">
          {title}
        </div>
        <div className="mb-4">{content}</div>
        <div className="rounded-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            className="w-full h-auto mb-4 rounded-lg"
            alt="dummy image"
          />
        </div>
      </CardContent>
      <Separator />
      <CardFooter className="block w-full p-4">
        <div className="flex justify-start -ml-4">
          <Button variant="ghost">
            <Heart className="w-4 h-4 mr-2" /> Like
          </Button>
          <Button variant="ghost">
            <MessagesSquare className="w-4 h-4 mr-2" /> Comment
          </Button>
          <Button variant="ghost">
            <Share2 className="w-4 h-4 mr-2" /> Share
          </Button>
        </div>
        <div className="flex items-center mt-6 w-full">
          <div>
            <Avatar className="h-12 w-12 mr-2">
              <AvatarImage src="https://tcdn.couchsurfing.com/5r4b09YnhNjWRBsHj6CkJyE43F0=/200x200/smart/https://s3.amazonaws.com/images.couchsurfing.us/1SHJQUU/18395756_l_b13919670f868a75dde48fa28e6932ef.jpg" />
              <AvatarFallback>JL</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex items-center w-full">
            <CommentInput
              className="text-md h-12 mr-2"
              placeholder="Leave A Comment"
            />
            <Button className="h-12 text-md" size="sm">
              Comment
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
