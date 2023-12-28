'use client'

import { useUserContext } from "@/context/userContext";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export function Header() {
  const { user } = useUserContext();
  const router = useRouter();

  return (
    <header className="flex w-full items-center justify-between">
      <Button variant="link" className="p-0" onClick={()=>router.back()}>
        {/* Voltar */}
        <ChevronLeftIcon />
      </Button>
      <Link href="/">
        <span className="text-2xl font-bold text-primary">Alpha Fitness</span>
      </Link>
      {user ? (
        <Avatar>
          <AvatarImage src={user.imageUrl} alt={user.name} />
          <AvatarFallback>{user.name}</AvatarFallback>
        </Avatar>
      ) : (
        <Link href="login">Login</Link>
      )}
    </header>
  );
}
