"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
// import { StoriesList } from "@/app/dashboard/StoriesList";
import StoriesList from "./StoriesList";

import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const stories = [
  {
    imageSrc: "/images/Small image.png",
    title:
      "What is the latest program that you are offering in your institute...",
    institute: "Lucknow Public College of Professional Studies...",
    date: "27 Dec 2020",
  },
  {
    imageSrc: "/images/Small image (1).png",
    title: "NMIMS LAT, MST and CET 2024 Registration to Close on March 10",
    institute: "Lucknow Public College of Professional Studies...",
    date: "27 Dec 2020",
  },
  {
    imageSrc: "/images/Small image (2).png",
    title:
      "What is the latest program that you are offering in your institute...",
    institute: "Lucknow Public College of Professional Studies...",
    date: "27 Dec 2020",
  },
  {
    imageSrc: "/images/Small image (3).png",
    title:
      "What is the latest program that you are offering in your institute...",
    institute: "Lucknow Public College of Professional Studies...",
    date: "27 Dec 2020",
  },
];

export default function Page() {
  return (
    <div className="m-10">
      dashboard
      <div className="border border-black  flex justify-between">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  test 1
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Documentation
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Input type="text" placeholder="search college" className="w-40 " />
      </div>
      <div className="w-[50%] border border-black h-10 p-2 flex justify-around ">
        <Badge variant="outline" className="bg-slate-300">
          All news
        </Badge>
        <Badge variant="outline" className="bg-slate-300">
          Addmission alert
        </Badge>
        <Badge variant="outline" className="bg-slate-300">
          College news
        </Badge>
        <Badge variant="outline" className="bg-slate-300">
          Exam News
        </Badge>
      </div>
      <div className="border border-black flex ">
        <div className="w-3/5">
          <Image src="/imageClg.png" height={450} width={800} />
        </div>
        <div className="w-2/5 border border-black m-4 ">
          <StoriesList stories={stories} />
        </div>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
