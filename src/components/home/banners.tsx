"use client";

import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import bannerImage from "@/assets/image/banner.png";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";

const banners = [
  {
    id: 1,
    href: "#",
    image: bannerImage,
  },
  {
    id: 2,
    href: "#",
    image: bannerImage,
  },
  {
    id: 3,
    href: "#",
    image: bannerImage,
  },
  {
    id: 4,
    href: "#",
    image: bannerImage,
  },
];

function Banners() {
  const plugin = useRef(Autoplay({ delay: 5000 }));

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

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
    <section className="relative">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        opts={{ loop: true }}
      >
        <CarouselContent className="ml-0 max-h-[390px] w-full lg:max-h-[450px]">
          {banners.map((banner) => (
            <CarouselItem key={banner.id} className="pl-0">
              <Image
                src={banner.image}
                alt={`Banner ${banner.id}`}
                className="h-auto w-full lg:h-auto"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/*carousel paging*/}
      <div className="absolute inset-x-0 bottom-2 z-50 flex items-center justify-center gap-1 lg:gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "h-1 w-4 rounded-full lg:w-7",
              current === index + 1 ? "bg-primary" : "bg-accent",
            )}
          />
        ))}
      </div>
    </section>
  );
}

export default Banners;
