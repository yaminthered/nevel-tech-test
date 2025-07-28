"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavbarProps {
  links: {
    href: string;
    label: string;
  }[];
}

function Navbar({ links }: NavbarProps) {
  const pathname = usePathname();

  return (
    <nav className="hidden flex-1 lg:block">
      <ul className="flex">
        <AnimatePresence>
          {links.map((link) => (
            <motion.li key={link.href} className="">
              <Link
                href={link.href}
                className={cn(
                  "hover:text-primary relative z-10 px-4.5 py-2.5 font-bold uppercase",
                  pathname === link.href ? "text-primary" : "text-accent",
                )}
              >
                {link.label}

                {pathname === link.href ? (
                  <motion.div
                    className="bg-neutral absolute inset-0 -z-10 h-full w-full rounded-full"
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    layoutId="navlink-background"
                    transition={{ type: "spring", stiffness: 35 }}
                  />
                ) : null}
              </Link>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </nav>
  );
}

export default Navbar;
