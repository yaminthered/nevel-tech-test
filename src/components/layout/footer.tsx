import Image from "next/image";
import Link from "next/link";
import installAppImage from "@/assets/image/install-app.png";
import Container from "../ui/container";
import { Separator } from "../ui/separator";
import FooterLink from "./footer-link";

function Footer() {
  return (
    <footer>
      <Separator />

      <Container className="lg:grid-col-4 grid grid-cols-2 gap-x-2 gap-y-6 px-5 py-10 lg:grid-cols-4 lg:px-0">
        <div className="space-y-3">
          <h5 className="text-lg font-bold tracking-tighter italic">
            ABOUT US
          </h5>

          <ul className="space-y-2">
            <li>
              <FooterLink href="#" label="Careers" />
            </li>
            <li>
              <FooterLink href="#" label="Company Details" />
            </li>
            <li>
              <FooterLink href="#" label="Terms & Conditions" />
            </li>
            <li>
              <FooterLink href="#" label="Help Center" />
            </li>
            <li>
              <FooterLink href="#" label="Privacy Policy" />
            </li>
            <li>
              <FooterLink href="#" label="Affiliate" />
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h5 className="text-lg font-bold tracking-tighter italic">
            PRODUCTS
          </h5>

          <ul className="space-y-2">
            <li>
              <FooterLink href="#" label="NFT Marketplace" />
            </li>
            <li>
              <FooterLink href="#" label="Slingshot" />
            </li>
            <li>
              <FooterLink href="#" label="Swaps" />
            </li>
            <li>
              <FooterLink href="#" label="NFT Lauchpad" />
            </li>
            <li>
              <FooterLink href="#" label="Runes Platform" />
            </li>
            <li>
              <FooterLink href="#" label="Creator Dashboard" />
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h5 className="text-lg font-bold tracking-tighter italic">
            RESOUCES
          </h5>

          <ul className="space-y-2">
            <li>
              <FooterLink href="#" label="Support" />
            </li>
            <li>
              <FooterLink href="#" label="API" />
            </li>
            <li>
              <FooterLink href="#" label="Feature Requests" />
            </li>
            <li>
              <FooterLink href="#" label="Trust & Safety" />
            </li>
            <li>
              <FooterLink href="#" label="Sitemap" />
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h5 className="text-lg font-bold tracking-tighter italic">
            CONTACT US
          </h5>

          <ul className="space-y-2">
            <li>
              <FooterLink
                href="mailto:suppo@tech.email"
                label="suppo@tech.email"
              />
            </li>
            <li>
              <FooterLink
                href="mailto:affiliate@tech.email"
                label="affiliate@tech.email"
              />
            </li>
            <li className="mt-4">
              <Link href="#">
                <Image src={installAppImage} alt="Install App" />
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
