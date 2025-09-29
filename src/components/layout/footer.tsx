"use client";

import * as m from "motion/react-m";
import { useTranslations } from "next-intl";
import { Phone, Mail, MapPin } from "lucide-react";

import WhatsApp from "@/assets/icons/whatsapp.svg";
import X from "@/assets/icons/x.svg";
import Instagram from "@/assets/icons/instagram.svg";
import Facebook from "@/assets/icons/facebook.svg";
import Tiktok from "@/assets/icons/tiktok.svg";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import { Link } from "@/i18n/navigation.public";
import { siteConfig } from "@/config/site";

const Footer = () => {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: t("home"), href: "/" },
    { label: t("vision"), href: "#vision" },
    { label: t("about"), href: "#about" },
    { label: t("services"), href: "#services" },
    { label: t("identity"), href: "#identity" }
  ];

  const services = [
    { label: t("breakfastMeals"), href: "#services" },
    { label: t("beverages"), href: "#services" },
    { label: t("sandwiches"), href: "#services" },
    { label: t("frenchToast"), href: "#services" }
  ];

  const socialLinks = [
    {
      name: t("socialMedia.whatsapp"),
      url: "https://wa.me/966566402023",
      icon: WhatsApp
    },
    {
      name: t("socialMedia.instagram"),
      url: "https://instagram.com/bruncharea",
      icon: Instagram
    },
    {
      name: t("socialMedia.x"),
      url: "https://x.com/bruncharea",
      icon: X
    },
    {
      name: t("socialMedia.facebook"),
      url: "https://facebook.com/bruncharea",
      icon: Facebook
    },
    {
      name: t("socialMedia.tiktok"),
      url: siteConfig.links.tiktok,
      icon: Tiktok
    }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="layout px-4 py-12 sm:pt-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Logo className="mb-4" desClassName="text-current" />
            <p className="text-sm leading-relaxed opacity-90">
              {t("companyDescription")}
            </p>
          </m.div>

          {/* Quick Links */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold">{t("quickLinks")}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <m.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={link.href}
                    className="text-sm opacity-90 transition-opacity hover:opacity-100"
                  >
                    {link.label}
                  </Link>
                </m.li>
              ))}
            </ul>
          </m.div>

          {/* Services */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold">{t("services")}</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <m.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={service.href}
                    className="text-sm opacity-90 transition-opacity hover:opacity-100"
                  >
                    {service.label}
                  </Link>
                </m.li>
              ))}
            </ul>
          </m.div>

          {/* Contact Info */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold">{t("contactUs")}</h3>
            <div className="space-y-3">
              <m.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-2"
              >
                <Phone className="size-4 opacity-90" />
                <a
                  href="tel:+966566402023"
                  className="text-sm opacity-90 transition-opacity hover:opacity-100"
                  dir="ltr"
                >
                  +966 56 640 2023
                </a>
              </m.div>

              <m.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-2"
              >
                <Mail className="size-4 opacity-90" />
                <a
                  href="mailto:bruncharea@gmail.com"
                  className="text-sm opacity-90 transition-opacity hover:opacity-100"
                >
                  bruncharea@gmail.com
                </a>
              </m.div>

              <m.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-2"
              >
                <MapPin className="size-4 opacity-90" />
                <a
                  href={siteConfig.links.googleMap}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm opacity-90 transition-opacity hover:opacity-100"
                >
                  {t("ourLocation")}
                </a>
              </m.div>

              <div className="text-xs opacity-75">{t("available24_7")}</div>
            </div>
          </m.div>
        </div>

        {/* Social Links */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-primary-foreground/20 mt-8 border-t pt-8"
        >
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <m.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 hover:opacity-80"
                  title={social.name}
                >
                  <social.icon className="size-5" />
                </m.a>
              ))}
            </div>

            <Button variant="outline" asChild>
              <Link
                href="https://wa.me/966566402023"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("connectViaWhatsApp")}
              </Link>
            </Button>
          </div>
        </m.div>

        {/* Copyright */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-primary-foreground/20 mt-6 border-t pt-6 text-center"
        >
          <p className="text-sm opacity-75">
            {t("copyright", { year: currentYear })}
          </p>
        </m.div>
      </div>
    </footer>
  );
};

export default Footer;
