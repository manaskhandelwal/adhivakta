"use client";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "../components/ui/navigation-menu";
import Link from "next/link";
import { Logo } from "../components/logo";
import clsx from "clsx";
import { Wrapper } from "../components/wrapper";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "../components/ui/dropdown-menu";

interface HeaderProps {
  type: "landing" | "client" | "pro";
}

export const Header: React.FC<HeaderProps> = ({ type }) => {
  if (type === "landing") {
    return (
      <div className="w-[100vw] border-b">
        <Wrapper className={`py-4`}>
          <Logo />
        </Wrapper>
      </div>
    );
  }

  if (type === "client") {
    return (
      <div className="w-[calc(100vw-20px)] border-b">
        <Wrapper className={`py-4 flex justify-between items-center`}>
          <Logo />
          <div className={`flex justify-between items-center gap-10`}>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/services" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={clsx(navigationMenuTriggerStyle(), "mr-6")}
                    >
                      Services
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/professionals/explore" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={clsx(navigationMenuTriggerStyle())}
                    >
                      Find Professionals
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className={`outline-none`}>
                <Avatar className={`w-8 h-8 m-auto`}>
                  <AvatarImage src={`/assets/girl2.jpg`} />
                  <AvatarFallback>TP</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Notifications</DropdownMenuItem>
                <DropdownMenuItem>Reminders</DropdownMenuItem>
                <DropdownMenuItem>Pending Dues</DropdownMenuItem>
                <DropdownMenuItem>Previous Cases</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </Wrapper>
      </div>
    );
  }
};
