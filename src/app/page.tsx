import Image from "next/image";
import freeToEarnIcon from "@/assets/image/free-to-earn.png";
import hotNft from "@/assets/image/hot-nft.png";
import howToBuyIcon from "@/assets/image/how-to-buy.png";
import newNftIcon from "@/assets/image/new-nft.png";
import promotion from "@/assets/image/promotion.png";
import rakingIcon from "@/assets/image/ranking.png";
import roadmapIcon from "@/assets/image/roadmap.png";
import videoIcon from "@/assets/image/video.png";
import Banners from "@/components/home/banners";
import DropCalendar from "@/components/home/drop-calendar";
import Heading from "@/components/home/heading";
import NavigationLink from "@/components/home/navigation-link";
import NewCollection from "@/components/home/new-collection";
import Container from "@/components/ui/container";

const naviagationLinks = [
  {
    href: "#",
    label: "Free to earn",
    icon: freeToEarnIcon,
  },
  {
    href: "#",
    label: "Ranking",
    icon: rakingIcon,
  },
  {
    href: "#",
    label: "Video NFT",
    icon: videoIcon,
  },
  {
    href: "#",
    label: "How to buy",
    icon: howToBuyIcon,
  },
  {
    href: "#",
    label: "New NFTS",
    icon: newNftIcon,
  },
  {
    href: "#",
    label: "Roadmaps",
    icon: roadmapIcon,
  },
];

export default function Home() {
  return (
    <div>
      <Banners />

      <section className="bg-secondary-background">
        <Container className="px-1">
          <ul className="flex justify-between gap-1 py-6 lg:gap-2">
            {naviagationLinks.map((link, index) => (
              <li key={index}>
                <NavigationLink
                  href={link.href}
                  label={link.label}
                  icon={link.icon}
                />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <NewCollection />

      <Container className="mb-20 grid grid-cols-2 items-stretch gap-x-6 gap-y-10 lg:grid-cols-4">
        <DropCalendar />

        <section className="space-y-2.5">
          <Heading>HOT TFT</Heading>
          <Image
            src={hotNft}
            alt="hot nft"
            className="h-auto w-full cursor-pointer rounded-xl lg:h-auto"
          />
        </section>

        <section className="space-y-2.5">
          <Heading>PROMOTION</Heading>
          <Image
            src={promotion}
            alt="promotion"
            className="h-auto w-full cursor-pointer rounded-xl lg:h-auto"
          />
        </section>
      </Container>
    </div>
  );
}
