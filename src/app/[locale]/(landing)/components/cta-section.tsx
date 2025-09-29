"use client";
import * as React from "react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";
import { Phone, Mail, MapPin, Clock, ChevronRight } from "lucide-react";

import { siteConfig } from "@/config/site";
import Instagram from "@/assets/icons/instagram.svg";
import Facebook from "@/assets/icons/facebook.svg";
import X from "@/assets/icons/x.svg";
import TikTok from "@/assets/icons/tiktok.svg";
import { cn } from "@/lib/utils";

export default function CtaSection() {
  const t = useTranslations("IndexPage.CtaSection");

  const contactInfo = [
    {
      icon: Phone,
      label: t("phone"),
      value: siteConfig.support.phone,
      href: `tel:${siteConfig.support.phone}`
    },
    {
      icon: Mail,
      label: t("email"),
      value: siteConfig.support.email,
      href: `mailto:${siteConfig.support.email}`
    },
    {
      icon: MapPin,
      label: t("location"),
      value: t("locationText"),
      href: siteConfig.links.googleMap
    },
    { icon: Clock, label: t("hours"), value: t("hoursText") }
  ];

  const socialLinks = [
    {
      name: t("socialMedia.instagram"),
      icon: Instagram,
      href: siteConfig.links.instagram
    },
    {
      name: t("socialMedia.facebook"),
      icon: Facebook,
      href: siteConfig.links.facebook
    },
    {
      name: t("socialMedia.x"),
      icon: X,
      href: siteConfig.links.x
    },
    {
      name: t("socialMedia.tiktok"),
      icon: TikTok,
      href: siteConfig.links.tiktok
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-amber-400 to-orange-500 py-32">
      <div className="layout relative z-10 mx-auto max-w-6xl text-center">
        <m.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="mb-4 text-5xl font-extrabold text-white drop-shadow-lg sm:text-6xl">
            {t("title")}
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-amber-100 sm:text-xl">
            {t("subtitle")}
          </p>
        </m.div>

        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {contactInfo.map((item, i) => {
            const Icon = item.icon;

            return (
              <m.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="flex flex-col items-center rounded-3xl bg-white/10 p-8 shadow-md backdrop-blur-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="mb-4 rounded-full bg-white/20 p-5">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <p className="mb-2 text-sm font-medium text-amber-100">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    dir="ltr"
                    href={item.href}
                    className="break-words text-center text-lg font-semibold text-white transition-colors hover:text-amber-100"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span
                    dir="ltr"
                    className="break-words text-center text-lg font-semibold text-white"
                  >
                    {item.value}
                  </span>
                )}
              </m.div>
            );
          })}
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 flex justify-center"
        >
          <m.a
            href={siteConfig.links.googleMap}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 rounded-full bg-white px-10 py-4 font-bold text-amber-600 shadow-lg transition-all duration-300 hover:shadow-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("getDirections")}
            <ChevronRight className="h-5 w-5" />
          </m.a>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {socialLinks.map((platform, index) => (
            <m.a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="flex items-center gap-2 rounded-full bg-white/20 px-6 py-3 font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white/30"
            >
              <platform.icon
                className={cn(
                  "h-6 w-6 fill-white",
                  index === 3 && "stroke-white"
                )}
              />
              <span>{platform.name}</span>
            </m.a>
          ))}
        </m.div>
      </div>
    </section>
  );
}
