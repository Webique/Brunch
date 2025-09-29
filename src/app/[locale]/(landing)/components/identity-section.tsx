"use client";

import * as React from "react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

export default function IdentitySection() {
  const t = useTranslations("IndexPage.IdentitySection");

  const highlights = [
    t("authenticity"),
    t("freshness"),
    t("quality"),
    t("customerFocus")
  ];

  return (
    <section
      id="identity"
      className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-white py-24 sm:py-28"
    >
      <div className="layout grid items-center gap-16 lg:grid-cols-2">
        {/* Text */}
        <m.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-center text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-start">
            {t.rich("title", {
              span: (chunks: React.ReactNode) => (
                <span className="from-primary via-primary bg-gradient-to-r to-amber-600 bg-clip-text text-transparent">
                  {chunks}
                </span>
              )
            })}
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            {t("description")}
          </p>

          <ul className="space-y-3">
            {highlights.map((item, i) => (
              <m.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <span className="bg-primary flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white">
                  ✓
                </span>
                <span className="text-gray-700">{item}</span>
              </m.li>
            ))}
          </ul>
        </m.div>

        {/* Image */}
        <m.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative h-[420px] w-full overflow-hidden rounded-3xl shadow-xl"
        >
          <ExportedImage
            src="/images/identity.jpg"
            alt={t("imageAlt")}
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </m.div>
      </div>
    </section>
  );
}
