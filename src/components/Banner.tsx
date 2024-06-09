import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";

function Banner() {
  return (
    <div className="relative isolate">
      <Carousel className="w-full mx-auto ">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent
                  className={`flex h-96 items-center justify-center gradient-box-${index} text-white`}
                >
                  Banner
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>

      {/* before:content-[''] before:h-32 before:w-full before:bg-gradient-to-t before:from-white before:to-transparent before:bottom-0 before:absolute before:z-[-1] */}
    </div>
  );
}

export default Banner;
