import messages from "./locales/ar.json";

import { routing } from "@/i18n/routing.public";

declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof messages;
  }
}
