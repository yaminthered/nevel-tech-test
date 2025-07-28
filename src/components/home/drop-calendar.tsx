"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import dropCalendar from "@/assets/image/drop-calendar.png";
import Button from "../ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import Heading from "./heading";

const dropCalendars = [
  { id: 1, image: dropCalendar },
  { id: 2, image: dropCalendar },
  { id: 3, image: dropCalendar },
];

function DropCalendar() {
  const [api, setApi] = useState<CarouselApi>();
  const [_current, setCurrent] = useState(0);
  const [_count, setCount] = useState(0);

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
    <section className="col-span-2 space-y-2">
      <div className="flex items-center justify-between">
        <Heading>NFT DROPS CALENDAR</Heading>

        <div className="flex gap-2">
          <Button
            variant="secondary"
            size="icon"
            onClick={() => api?.scrollPrev()}
          >
            <ChevronLeft />
          </Button>

          <Button
            variant="secondary"
            size="icon"
            onClick={() => api?.scrollNext()}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>

      <Carousel setApi={setApi}>
        <CarouselContent className="-ml-0">
          {dropCalendars.map((calendar) => (
            <CarouselItem key={calendar.id} className="pl-0">
              <Image
                src={calendar.image}
                alt={`Banner ${calendar.id}`}
                className="cursor-pointer rounded-3xl object-center lg:h-[260px]"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

export default DropCalendar;
