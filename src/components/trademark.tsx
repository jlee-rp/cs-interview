import Image from "next/image";
import Link from "next/link";

//TODO add logo here
export function Trademark() {
  return (
    <Link href="/">
      <div className="flex items-center space-x-4 font-light">
        <Image src="/next.svg" alt="" height={80} width={80} />
        <div className="text-xl hidden md:flex">Demo Social App</div>
      </div>
    </Link>
  );
}
