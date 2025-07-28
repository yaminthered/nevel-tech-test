import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/image/logo.png";
import Button from "../ui/button";
import HamburgerMenu from "./hamburger-menu";
import Navbar from "./navbar";

const links = [
  { href: "/", label: "Home" },
  { href: "/item1", label: "Item1" },
  { href: "/item2", label: "Item2" },
  { href: "/item3", label: "Item3" },
  { href: "/item4", label: "Item4" },
];

function Header() {
  return (
    <header className="bg-background fixed inset-x-0 top-0 z-[9999] flex w-full items-center justify-between gap-4 px-5 py-3 lg:gap-6 lg:px-10 lg:py-5">
      <HamburgerMenu links={links} />

      <Link href="/">
        <Image src={logo} alt="Logo" />
      </Link>

      <Navbar links={links} />

      <div className="flex flex-1 justify-end gap-2">
        <Button className="text-sm font-bold tracking-tighter italic lg:text-base">
          SIGN UP
        </Button>
        <Button
          variant="outline"
          className="text-sm font-bold tracking-tighter italic lg:text-base"
        >
          LOG IN
        </Button>
      </div>
    </header>
  );
}

export default Header;
