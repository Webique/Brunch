"use client";

import * as m from "motion/react-m";
import { Phone } from "lucide-react";
import { useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

import Arrow from "@/assets/icons/arrow-1.svg";
import { type CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import { siteConfig } from "@/config/site";

const HeroSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const t = useTranslations("IndexPage.HeroSection");

  const slides = [
    {
      id: 1,
      title: t("slides.0.title"),
      subtitle: t("slides.0.subtitle"),
      image: "/images/hero/1.jpg"
    },
    {
      id: 2,
      title: t("slides.1.title"),
      subtitle: t("slides.1.subtitle"),
      image: "/images/hero/2.jpg"
    },
    {
      id: 3,
      title: t("slides.2.title"),
      subtitle: t("slides.2.subtitle"),
      image: "/images/hero/3.jpg"
    },
    {
      id: 4,
      title: t("slides.3.title"),
      subtitle: t("slides.3.subtitle"),
      image: "/images/hero/4.jpg"
    }
  ];

  useEffect(() => {
    if (!api) return;

    // Update current slide index
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="relative h-screen min-h-[500px] overflow-hidden">
      <Carousel
        setApi={setApi}
        className="h-full max-w-full overflow-hidden"
        plugins={[
          Autoplay({
            delay: 4000
            // stopOnInteraction: false
          })
        ]}
        opts={{
          align: "start",
          loop: true,
          duration: 20
        }}
      >
        <CarouselContent className="-ms-0 h-screen min-h-[500px] gap-0">
          {slides.map((slide, index) => (
            <CarouselItem
              key={slide.id}
              className="h-screen min-h-[500px] ps-0"
            >
              <div className="relative h-full w-full">
                <ExportedImage
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={slide.id === 1}
                  sizes="100vw"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                  }}
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 z-10 bg-black/50"></div>

                {/* Content */}
                <div className="relative z-20 flex h-full items-center justify-center">
                  <div className="layout">
                    <div className="m-auto max-w-4xl text-center text-white">
                      <div className="mx-auto flex flex-col items-center space-y-8">
                        {/* Title Animation */}
                        <m.h1
                          initial={{ opacity: 0, y: -30 }}
                          animate={{
                            opacity: current === index ? 1 : 0,
                            y: current === index ? 0 : -30
                          }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className="text-5xl font-bold leading-tight lg:text-7xl"
                        >
                          {slide.title}
                        </m.h1>

                        {/* Subtitle Animation */}
                        <m.p
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{
                            opacity: current === index ? 1 : 0,
                            scale: current === index ? 1 : 0.9
                          }}
                          transition={{ duration: 0.7, delay: 0.4 }}
                          className="max-w-2xl text-xl leading-relaxed text-gray-100 lg:text-2xl"
                        >
                          {slide.subtitle}
                        </m.p>

                        {/* Call Button Animation */}
                        <m.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{
                            opacity: current === index ? 1 : 0,
                            y: current === index ? 0 : 30
                          }}
                          transition={{ duration: 0.7, delay: 0.6 }}
                        >
                          <a
                            className="flex items-center justify-center gap-3 rounded-full bg-white px-10 py-4 text-lg font-bold text-gray-900 shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-gray-100"
                            href={siteConfig.links.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Phone className="h-6 w-6" />
                            <span dir="ltr">{siteConfig.support.whatsapp}</span>
                          </a>
                        </m.div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-6 right-6 flex w-fit gap-7">
                    <button
                      // disabled={!api || current === 0}
                      className="[&>svg]:fill-primary hover:[&>svg]:fill-primary/80 disabled:[&>svg]:fill-zinc-300"
                      onClick={() => api?.scrollPrev()}
                    >
                      <Arrow className="h-6 w-6 ltr:rotate-180" />
                    </button>
                    <button
                      // disabled={!api || current === slides.length - 1}
                      className="[&>svg]:fill-primary hover:[&>svg]:fill-primary/80 disabled:[&>svg]:fill-zinc-300"
                      onClick={() => api?.scrollNext()}
                    >
                      <Arrow className="h-6 w-6 rtl:rotate-180" />
                    </button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default HeroSection;
