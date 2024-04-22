import { Input } from "./ui/input";
import { SearchInput } from "./ui/search-input";

export function AppSearch() {
  return (
    <SearchInput
      className="w-[500px] h-12 hidden md:flex"
      placeholder="Search for people, places, and events"
    />
  );
}
