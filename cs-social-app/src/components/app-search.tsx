import { Input } from "./ui/input";
import { SearchInput } from "./ui/search-input";

export function AppSearch() {
    return (
        <SearchInput
                className="w-[500px] h-12"
                placeholder="Search for places, people, events"
            />
    )
}