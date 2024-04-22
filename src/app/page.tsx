import { EventsCard } from "@/components/cards/events-card";
import { MessagesCard } from "@/components/cards/messages-card";
import { NavigationCard } from "@/components/cards/nav-card";
import { NewPostCard } from "@/components/cards/new-post-card";
import { ProfileCard } from "@/components/cards/profile-card";
import { PostList } from "@/components/post-list";

export default function Home() {
  return (
    <div className="grid grid-cols-12 md:grid-cols-12 gap-5 p-4 m-2">
      <aside className="col-span-12 md:col-span-2">
        <div className="sticky top-[115px] space-y-4">
          <ProfileCard />
          <NavigationCard />
        </div>
      </aside>
      <main className="col-span-12 md:col-span-7 space-y-4">
        <NewPostCard />
        <PostList />
      </main>
      <aside className="col-span-12 md:col-span-3 space-y-4">
        <MessagesCard />
        <EventsCard />
      </aside>
    </div>
  );
}
