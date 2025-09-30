"use client";

import * as m from "motion/react-m";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Variants } from "motion";
import { AnimatePresence } from "motion/react";
import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Link, usePathname } from "@/i18n/navigation.public";
import Logo from "@/components/ui/logo";
import { cn } from "@/lib/utils";
import LocaleSwitcher from "@/components/locale-switcher";
import { siteConfig } from "@/config/site";

export default function Header() {
  const t = useTranslations("Header");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.contact"), href: "#contact" }
  ];

  useEffect(() => {
    if (pathname === "/") {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setIsScrolled(true);
    }
  }, [pathname]);

  const headerVariants: Variants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    hidden: {
      y: -100,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  const mobileMenuVariants: Variants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const mobileNavItemVariants: Variants = {
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    closed: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.2, ease: "easeIn" }
    }
  };

  return (
    <>
      <m.header
        variants={headerVariants}
        initial="visible"
        animate="visible"
        className={cn(
          "fixed top-0 z-50 w-full duration-300 ease-in-out",
          isScrolled
            ? "bg-white text-gray-900 shadow-lg lg:bg-white/95 lg:backdrop-blur-lg"
            : "text-primary-foreground bg-white lg:bg-transparent"
        )}
      >
        <div className="layout py-3">
          <div className="flex items-center justify-between duration-300">
            {/* Logo */}

            <m.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Logo
                smallInMobile
                desClassName={isScrolled ? "text-gray-600" : "lg:text-white"}
              />
            </m.div>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-8 lg:flex">
              {navItems.map((item, index) => (
                <m.div
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "relative px-1 text-sm font-medium tracking-wide transition-colors duration-300 hover:scale-105",
                      isScrolled
                        ? "hover:text-primary text-gray-700"
                        : "text-white hover:text-white/80",
                      "before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-current before:transition-all before:duration-300 hover:before:w-full"
                    )}
                  >
                    {item.label}
                  </Link>
                </m.div>
              ))}
            </nav>

            <div className="flex items-center">
              <m.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex items-center"
              >
                <Button
                  className="group me-2 hidden rounded-full px-4 py-5 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl lg:inline-flex"
                  size="lg"
                  asChild
                >
                  <Link
                    href={siteConfig.links.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("cta")}
                    <Phone className="h-5 w-5 transition group-hover:scale-95" />
                  </Link>
                </Button>
                <LocaleSwitcher className="w-auto" isTop={!isScrolled} />
              </m.div>

              {/* Mobile Menu Button */}
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="lg:hidden"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className={cn(
                    "p-2 transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-offset-2",
                    isScrolled
                      ? "hover:text-primary focus:ring-primary text-gray-700"
                      : "hover:text-primary focus:ring-primary lg:text-primary-foreground lg:hover:bg-primary/80 lg:hover:text-primary-foreground/80 lg:focus:ring-primary-foreground text-gray-700"
                  )}
                  aria-label="Toggle mobile menu"
                >
                  <div className="space-y-1.5">
                    <m.div
                      animate={
                        isMobileMenuOpen
                          ? { rotate: 45, y: 9 }
                          : { rotate: 0, y: 0 }
                      }
                      transition={{ duration: 0.3 }}
                      className="h-0.5 w-6 bg-current"
                    />
                    <m.div
                      animate={
                        isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }
                      }
                      transition={{ duration: 0.3 }}
                      className="h-0.5 w-6 bg-current"
                    />
                    <m.div
                      animate={
                        isMobileMenuOpen
                          ? { rotate: -45, y: -6 }
                          : { rotate: 0, y: 0 }
                      }
                      transition={{ duration: 0.3 }}
                      className="h-0.5 w-6 bg-current"
                    />
                  </div>
                </Button>
              </m.div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <m.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className={cn(
                "overflow-hidden border-t lg:hidden",
                isScrolled
                  ? "border-gray-200 bg-white/95 backdrop-blur-lg"
                  : "lg:bg-primary/95 lg:border-primary-foreground/20 border-gray-200 bg-white/95 backdrop-blur-lg lg:backdrop-blur-sm"
              )}
            >
              <nav className="layout py-6">
                <div className="space-y-4">
                  {navItems.map((item, index) => (
                    <m.div key={index} variants={mobileNavItemVariants}>
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "block rounded-lg px-4 py-3 text-base font-medium transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2",
                          isScrolled
                            ? "hover:bg-primary/10 hover:text-primary focus:ring-primary text-gray-700"
                            : "hover:bg-primary/10 hover:text-primary focus:ring-primary lg:text-primary-foreground lg:hover:bg-primary-foreground/10 lg:focus:ring-primary-foreground text-gray-700"
                        )}
                      >
                        {item.label}
                      </Link>
                    </m.div>
                  ))}

                  {/* CTA in Mobile Menu */}
                  <m.div variants={mobileNavItemVariants} className="pt-4">
                    <Button
                      size="lg"
                      className="group w-full justify-center"
                      asChild
                    >
                      <Link
                        href={siteConfig.links.whatsapp}
                        onClick={() => setIsMobileMenuOpen(false)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t("cta")}
                        <Phone className="h-5 w-5 transition group-hover:scale-95" />
                      </Link>
                    </Button>
                  </m.div>
                </div>
              </nav>
            </m.div>
          )}
        </AnimatePresence>
      </m.header>

      {/* Overlay for mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
