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
        </Wrapper>
      </div>
    );
  }
};
