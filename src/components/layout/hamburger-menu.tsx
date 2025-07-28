"use client";

import { useState } from "react";
import { AnimatePresence } from "motion/react";
import MenuContent from "./menu-content";
import MenuToggle from "./menu-toggle";

interface HamburgerMenuProps {
  links: {
    href: string;
    label: string;
  }[];
}

function HamburgerMenu({ links }: HamburgerMenuProps) {
  const [isToggle, setIsToggle] = useState<boolean>(false);

  return (
    <div className="block lg:hidden">
      <MenuToggle isOpen={isToggle} toggle={() => setIsToggle(!isToggle)} />

      {isToggle && (
        <AnimatePresence>
          <MenuContent links={links} onLinkClick={() => setIsToggle(false)} />
        </AnimatePresence>
      )}
    </div>
  );
}

export default HamburgerMenu;
