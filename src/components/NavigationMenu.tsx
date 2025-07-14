"use client";

interface NavigationMenuDemoProps {
  mobile?: boolean;
}

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Getting Started",
    href: "/docs/getting-started",
    description:
      "Begin your journey with Kubernetes. Learn how to install, configure, and run your first cluster.",
  },
  {
    title: "Core Concepts",
    href: "/docs/core-concepts",
    description:
      "Understand Kubernetes architecture, objects, and the control plane components.",
  },
  {
    title: "Workloads & Scheduling",
    href: "/docs/workloads",
    description:
      "Learn how to deploy, scale, and manage applications using Deployments, Pods, and Jobs.",
  },
  {
    title: "Networking & Services",
    href: "/docs/networking",
    description:
      "Discover how services, DNS, ingress, and network policies work in Kubernetes.",
  },
];

export function NavigationMenuDemo({ mobile }: NavigationMenuDemoProps) {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList
        className={mobile ? "flex-col space-y-2" : "flex-row"}
      >
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/" aria-label="Go to home page">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Link href="/docs">Docs</Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
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
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/about">About</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Apply</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Become a Partner</div>
                    <div className="text-muted-foreground">
                      Join us and grow your business with our platform.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">RESTful API</div>
                    <div className="text-muted-foreground">
                      Integrate seamlessly using our developer-friendly API.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Customize</div>
                    <div className="text-muted-foreground">
                      Tailor the experience to match your brand and needs.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href} passHref>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
