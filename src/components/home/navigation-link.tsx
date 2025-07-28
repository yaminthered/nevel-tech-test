import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface NavigationLinkProps {
  href: string;
  label: string;
  icon: StaticImageData;
}

function NavigationLink({ href, label, icon }: NavigationLinkProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col items-center justify-start gap-2 lg:gap-3"
    >
      <Image
        src={icon}
        alt={label}
        className="h-7 w-auto object-cover lg:h-10"
      />
      <span className="group-hover:text-primary text-center text-xs uppercase lg:text-base">
        {label}
      </span>
    </Link>
  );
}

export default NavigationLink;
