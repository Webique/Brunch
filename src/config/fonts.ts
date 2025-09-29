import { Inter, Cairo } from "next/font/google";

export const cairoArabic = Cairo({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["arabic"]
});

export const fontInter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"]
});
