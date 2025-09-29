"use client";

import * as React from "react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

export default function VisionMissionSection() {
  const t = useTranslations("IndexPage.VisionMissionSection");

  return (
    <section
      id="vision"
      className="relative bg-gradient-to-br from-white to-amber-50 py-28"
    >
      <div className="layout text-center">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl space-y-6"
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            {t.rich("whyBrunchArea", {
              span: (chunks: React.ReactNode) => (
                <span className="from-primary via-primary bg-gradient-to-r to-amber-600 bg-clip-text text-transparent">
                  {chunks}
                </span>
              )
            })}{" "}
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            {t("description")}
          </p>
        </m.div>

        {/* Hero Image */}
        <m.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative mx-auto mt-16 h-[420px] w-full max-w-5xl overflow-hidden rounded-3xl shadow-2xl"
        >
          <ExportedImage
            src="/images/vision.jpg"
            alt={t("imageAlt")}
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </m.div>

        {/* Animated Cards */}
        <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: t("vision"),
              text: t("visionText")
            },
            {
              title: t("mission"),
              text: t("missionText")
            },
            {
              title: t("values"),
              text: t("valuesText")
            }
          ].map((item, i) => (
            <Feature
              key={i}
              title={item.title}
              text={item.text}
              delay={0.3 + i * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Feature({
  title,
  text,
  delay
}: {
  title: string;
  text?: string;
  delay: number;
}) {
  return (
    <m.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ y: -5, boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)" }}
      className="rounded-2xl border border-amber-100 bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-100 hover:bg-white"
    >
      <h3 className="mb-4 text-2xl font-semibold text-gray-900">{title}</h3>
      {text && <p className="leading-relaxed text-gray-600">{text}</p>}
    </m.div>
  );
}
