"use client";

import * as React from "react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";
import { Coffee, Sandwich, Croissant, Utensils } from "lucide-react";

export default function ServicesSection() {
  const t = useTranslations("IndexPage.ServicesSection");

  const services = [
    {
      icon: Utensils,
      title: t("breakfastMeals"),
      description: t("breakfastMealsDesc"),
      image: "/images/services/breakfast.jpg"
    },
    {
      icon: Coffee,
      title: t("beverages"),
      description: t("beveragesDesc"),
      image: "/images/services/beverages.jpg"
    },
    {
      icon: Sandwich,
      title: t("sandwiches"),
      description: t("sandwichesDesc"),
      image: "/images/services/sandwiches.jpg"
    },
    {
      icon: Croissant,
      title: t("frenchToast"),
      description: t("frenchToastDesc"),
      image: "/images/services/french-toast.jpg"
    }
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-white py-24 sm:py-28"
    >
      <div className="layout">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            {t.rich("title", {
              span: (chunks: React.ReactNode) => (
                <span className="from-primary via-primary bg-gradient-to-r to-amber-600 bg-clip-text text-transparent">
                  {chunks}
                </span>
              )
            })}
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            {t("subtitle")}
          </p>
        </m.div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Menu Highlight */}
        <m.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-amber-100 to-amber-50 p-8 shadow-xl sm:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">
                  {t("menuHighlight")}
                </h3>
                <p className="text-lg leading-relaxed text-gray-700">
                  {t("menuDescription")}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="bg-primary mt-1 flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white">
                      ✓
                    </span>
                    <span className="text-gray-700">{t("feature1")}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary mt-1 flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white">
                      ✓
                    </span>
                    <span className="text-gray-700">{t("feature2")}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary mt-1 flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white">
                      ✓
                    </span>
                    <span className="text-gray-700">{t("feature3")}</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-[300px] overflow-hidden rounded-2xl shadow-lg sm:h-[400px]">
                <ExportedImage
                  src="/images/services/menu-highlight.jpg"
                  alt={t("menuImageAlt")}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index
}: {
  service: {
    icon: React.ElementType;
    title: string;
    description: string;
    image: string;
  };
  index: number;
}) {
  const Icon = service.icon;

  return (
    <m.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ y: -8, boxShadow: "0 16px 32px rgba(0, 0, 0, 0.12)" }}
      className="group overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-lg transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <ExportedImage
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="bg-primary absolute bottom-4 left-4 rounded-full p-3 shadow-lg">
          <Icon className="size-6 text-white" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="mb-3 text-xl font-bold text-gray-900">
          {service.title}
        </h3>
        <p className="leading-relaxed text-gray-600">{service.description}</p>
      </div>
    </m.div>
  );
}
