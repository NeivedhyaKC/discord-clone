import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-3xl  text-indigo-500">
      <UserButton afterSignOutUrl="/"></UserButton>
      <ModeToggle></ModeToggle>
    </div>
  );
}
