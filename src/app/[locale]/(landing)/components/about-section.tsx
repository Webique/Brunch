"use client";

import * as React from "react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("IndexPage.AboutSection");

  return (
    <section
      id="about"
      className="max-w-screen relative overflow-hidden bg-white py-24 sm:py-28"
    >
      <div className="layout grid items-center gap-16 lg:grid-cols-2">
        <m.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="mb-10 text-center text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:mb-6 lg:text-start">
            {t("title")}
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            {t("description1Part1")}
            <span className="from-primary via-primary bg-gradient-to-r to-amber-600 bg-clip-text font-semibold text-transparent">
              {t("description1Part2")}
            </span>
            {t("description1Part3")}
          </p>
          <p className="text-lg leading-relaxed text-gray-600">
            {t("description2")}
          </p>
          <p className="text-lg leading-relaxed text-gray-600">
            {t("description3")}
          </p>
        </m.div>

        <m.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative h-[420px] w-full overflow-hidden rounded-3xl shadow-xl"
        >
          <ExportedImage
            src="/images/about.jpg"
            alt={t("imageAlt")}
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </m.div>
      </div>
    </section>
  );
}
