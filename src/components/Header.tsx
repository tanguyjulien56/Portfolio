"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import GitHubIcon from "./ui/icon/GitHubIcon";
import LinkedInIcon from "./ui/icon/LinkedInIcon";
import NotionIcon from "./ui/icon/NotionIcon";

export default function Header() {
  const { setTheme } = useTheme();

  return (
    <header className="sticky w-full bg-background top-0 right-0 left-0 p-5 z-50">
      <section className="flex   justify-between">
        <div className="flex-[1] flex gap-2 items-center">
          <Avatar>
            <AvatarImage src="profile-pic2.png" alt="photo-profil" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="hidden md:block text-lg font-semibold">
            Julien TANGUY
          </div>
        </div>
        <ul className=" flex items-start gap-2">
          <Link href="/">
            <Button
              variant="outline"
              className=" hover:shadow-md hover:shadow-purple-500/10"
            >
              <GitHubIcon size={16} className="text-foreground color-primary" />
            </Button>
          </Link>
          <Link href="/">
            <Button
              variant="outline"
              className=" hover:shadow-md hover:shadow-purple-500/10"
            >
              <LinkedInIcon
                size={16}
                className="text-foreground color-primary"
              />
            </Button>
          </Link>
          <Link href="/">
            <Button
              variant="outline"
              className=" hover:shadow-md hover:shadow-purple-500/10"
            >
              <NotionIcon
                size={16}
                className="text-foreground color-primary text-white"
              />
            </Button>
          </Link>
          <div className="pl-5">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className=" hover:shadow-md hover:shadow-purple-500/10"
                >
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </ul>
      </section>
    </header>
  );
}
