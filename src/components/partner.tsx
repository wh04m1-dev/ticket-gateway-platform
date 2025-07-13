"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

export function Partner() {
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: false }) 
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h3 className="text-center text-xl font-bold mb-6">
        Businesses using Ticket Gateway
      </h3>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        className="w-full"
      >
        <CarouselContent>
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-2">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6 bg-white shadow-md rounded-xl">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
