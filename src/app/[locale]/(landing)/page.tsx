import type { Locale } from "next-intl";

import { setRequestLocale } from "next-intl/server";
import { use } from "react";

import GoogleMap from "./components/google-map";

import WhatsAppFloat from "@/components/whats-app-float";

export default function IndexPage({ params }: PageProps<"/[locale]">) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  return (
    <main>
      <GoogleMap />
      <WhatsAppFloat />
    </main>
  );
}
