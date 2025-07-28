import Link from "next/link";
import Button from "../ui/button";

interface FooterLinkProps {
  href: string;
  label: string;
}

function FooterLink({ href, label }: FooterLinkProps) {
  return (
    <Button asChild variant="link" className="text-sm">
      <Link href={href}>{label}</Link>
    </Button>
  );
}

export default FooterLink;
