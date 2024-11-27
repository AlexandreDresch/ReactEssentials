import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { baseLinks } from "@/constants";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ImageCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const navigate = useNavigate();

  function handleNavigation(slug: string) {
    navigate(`/tutorial/${slug}`);
  }

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
    <div className="mx-auto lg:max-w-6xl w-full">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {baseLinks.map((item) => (
            <CarouselItem key={item.id}>
              <Card className="rounded-none bg-slate-600/10 border-none">
                <CardContent
                  className="flex aspect-video items-center justify-center rounded-none"
                  onClick={() => handleNavigation(item.slug)}
                >
                  <img
                    src={item.image}
                    className="size-full object-contain hover:cursor-pointer"
                    alt={`${item.slug} image`}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-transparent text-white border-none size-8 hover:bg-transparent hover:text-white" />
        <CarouselNext className="bg-transparent text-white border-none size-8 hover:bg-transparent hover:text-white" />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
  );
}
