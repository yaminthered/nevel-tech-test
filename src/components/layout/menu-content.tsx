"use client";

import { createPortal } from "react-dom";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface MenuContentProps {
  links: { href: string; label: string }[];
  onLinkClick: () => void;
}

function MenuContent({ links, onLinkClick }: MenuContentProps) {
  const pathname = usePathname();

  return createPortal(
    <motion.div
      initial={{
        height: 0,
      }}
      animate={{
        height: "100%",
      }}
      exit={{
        height: 0,
      }}
      transition={{
        type: "spring",
        duration: 1,
      }}
      className="bg-secondary-background fixed inset-0 top-16 z-[9999] h-full w-full p-5"
    >
      <ul className="space-y-4">
        {links.map((link) => (
          <motion.li
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
            exit={{
              scale: 0,
            }}
            transition={{
              type: "spring",
              duration: 1,
              delay: 0.15 * links.indexOf(link),
            }}
            key={link.href}
            className=""
            onClick={onLinkClick}
          >
            <Link
              href={link.href}
              className={cn(
                "block w-full py-3 text-center font-medium uppercase",
                pathname === link.href &&
                  "bg-neutral text-primary rounded-full",
              )}
            >
              {link.label}
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>,
    document.body,
  );
}

export default MenuContent;
