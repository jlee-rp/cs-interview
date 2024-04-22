import { NavigationCard } from "@/components/cards/nav-card";
import { PlanCard } from "@/components/cards/plan-card";
import { ProfileCard } from "@/components/cards/profile-card";

export default function Profile() {
  return (
    <div className="grid md:grid-cols-12 gap-5 p-4 m-2">
      <aside className="md:col-span-2">
        <div className="sticky top-[115px] space-y-4">
          <ProfileCard />
          <NavigationCard />
        </div>
      </aside>
      <main className="md:col-span-7 space-y-4">
        <PlanCard />
      </main>
    </div>
  );
}
