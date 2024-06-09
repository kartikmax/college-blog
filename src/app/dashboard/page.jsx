"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {

  NavigationMenuLink,
 
} from "@/components/ui/navigation-menu";

import Image from "next/image";
import StoriesList from "./StoriesList";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StoriesGrid from "./StoriesGrid";
import { stories, storiesNews, components } from "../constants";
import Navbar from "./Navbar";

export default function Page() {
  return (
    <div className="m-10">
      <div className=" flex justify-between">
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
                <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  test 1
                </div>
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
      <div className="w-auto  h-10 p-2 flex lg:gap-4 sm:gap-1 ">
        <Badge variant="outline" className="bg-slate-300">
          All 
        </Badge>
        <Badge variant="outline" className="bg-slate-300">
          Addmission 
        </Badge>
        <Badge variant="outline" className="bg-slate-300">
          College 
        </Badge>
        <Badge variant="outline" className="bg-slate-300">
          Exam 
        </Badge>
      </div>
      <div className=" flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/5 md:w-3/5">
          <Image src="/imageClg.png" height={450} width={800} />
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            dolor autem incidunt tempore blanditiis quam voluptatum. Repellat
            cumque nostrum quidem harum quo, quis mollitia eveniet inventore
            quia quod quisquam molestiae.
          </div>
        </div>
        <div className="w-full lg:w-2/5 md:w-2/5  m-4">
          <StoriesList stories={stories} />
        </div>
      </div>
      <div className="border border-[#E3960082] flex flex-col h-28">
        <div className="text-3xl text-[#E3960082]">Featured News</div>
        <div></div>
      </div>
      <div className=" p-4 flex flex-col justify-center ">
        <div className="flex justify-center">
          <Tabs defaultValue="all" className="w-auto ">
            <TabsList className="grid  grid-cols-4 w-auto  ">
              <TabsTrigger value="all">All News</TabsTrigger>
              <TabsTrigger value="college">College News</TabsTrigger>
              <TabsTrigger value="exam">Exam News</TabsTrigger>
              <TabsTrigger value="admission">Addmission 2024</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <Card>
                <StoriesGrid stories={storiesNews} />
              </Card>
            </TabsContent>
            <TabsContent value="college">
              <Card>
                <StoriesGrid stories={storiesNews} />
              </Card>
            </TabsContent>
            <TabsContent value="exam">
              <Card>
                <StoriesGrid stories={storiesNews} />
              </Card>
            </TabsContent>
            <TabsContent value="admission">
              <Card>
                <StoriesGrid stories={storiesNews} />
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        <div></div>
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
