// import Image from "next/image";
"use client";

import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import { components, stories } from "./constants";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import StoriesList from "./dashboard/StoriesList";
import { Button } from "@/components/ui/button";
import Navbar from "./dashboard/Navbar";

export default function Home() {
  return (
    <div className="m-10">
      test page
      <div className="border border-red-400  flex justify-between">
        {/* <NavigationMenu>
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
        <Input type="text" placeholder="search college" className="w-40 " /> */}
        <Navbar/>
      </div>
      <div className="border border-pink-500 flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/5 md:w-3/5">
          <Image src="/imageClg.png" height={450} width={800} />
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            dolor autem incidunt tempore blanditiis quam voluptatum. Repellat
            cumque nostrum quidem harum quo, quis mollitia eveniet inventore
            quia quod quisquam molestiae.
          </div>
        </div>
        <div className="w-full lg:w-2/5 md:w-2/5 border border-black m-4">
          <div className="flex flex-col gap-2">
            <Button className='bg-[#40347C]'>Apply Now </Button>
            <Button variant='outline'>Download Brochure</Button>
            <Button className='h-24 bg-[#DDC3FFCC]'>Advertisement Banner</Button>
            <Button className='h-24 bg-[#C3D7FFCC]'>Advertisement Banner</Button>
            <Button className='h-24 bg-[#FFEEC3CC]'>Advertisement Banner</Button>
          </div>
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
