"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import nft1 from "@/assets/image/nft1.png";
import nft2 from "@/assets/image/nft2.png";
import nft3 from "@/assets/image/nft3.png";
import nft4 from "@/assets/image/nft4.png";
import nft5 from "@/assets/image/nft5.png";
import Button from "../ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import Container from "../ui/container";
import Heading from "./heading";

const nftCollection = [
  { id: 1, image: nft1 },
  { id: 2, image: nft2 },
  { id: 3, image: nft3 },
  { id: 4, image: nft4 },
  { id: 5, image: nft5 },
  { id: 6, image: nft1 },
  { id: 7, image: nft2 },
  { id: 8, image: nft3 },
];

function NewCollection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [_, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="py-10 lg:py-20">
      <Container className="space-y-2">
        <div className="flex items-center justify-between">
          <Heading>NEW NFT COLLECTIONS</Heading>

          <div className="flex gap-2">
            <Button
              variant="secondary"
              size="icon"
              onClick={() => api?.scrollTo(current - 3)}
            >
              <ChevronLeft />
            </Button>

            <Button
              variant="secondary"
              size="icon"
              onClick={() => api?.scrollTo(current + 3)}
            >
              <ChevronRight />
            </Button>
          </div>
        </div>

        <Carousel setApi={setApi}>
          <CarouselContent className="-ml-1 max-h-[390px] w-full lg:-ml-2 lg:max-h-[450px]">
            {nftCollection.map((nft) => (
              <CarouselItem
                key={nft.id}
                className="basis-1/3 pl-1 lg:basis-1/5 lg:pl-2"
              >
                <Image
                  src={nft.image}
                  alt={`NFT ${nft.id}`}
                  className="h-auto w-full cursor-pointer rounded-xl lg:h-auto"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Container>
    </section>
  );
}

export default NewCollection;
