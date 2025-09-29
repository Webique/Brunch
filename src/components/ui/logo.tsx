import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

import { Link as I18nLink } from "@/i18n/navigation.public";
import { cn } from "@/lib/utils";

type indexProps = {
  href?: string;
  className?: string;
  imgClassName?: string;
  desClassName?: string;
  smallInMobile?: boolean;
};

export default function Logo({
  className,
  imgClassName,
  desClassName,
  href = "/",
  smallInMobile = false
}: indexProps) {
  const t = useTranslations("Header");

  return (
    <I18nLink
      href={href}
      aria-label="site-logo"
      className={cn(
        "flex items-center gap-4",
        smallInMobile && "gap-2 sm:gap-4",
        className
      )}
    >
      <ExportedImage
        className={cn(
          "size-12 max-w-full overflow-hidden rounded-full sm:size-24",
          smallInMobile && "size-12 sm:size-20",
          imgClassName
        )}
        src="/images/logo.png"
        width={96}
        height={96}
        placeholder="empty"
        priority
        alt="site-logo"
      />
      <div>
        <span
          className={cn(
            "from-primary/90 via-primary bg-gradient-to-r to-amber-500 bg-clip-text text-xl font-black text-transparent",
            smallInMobile && "text-lg leading-5 sm:text-lg"
          )}
        >
          {t("siteName")}
        </span>
        <p className={cn("text-xs font-medium text-gray-600", desClassName)}>
          {t("siteDescription")}
        </p>
      </div>
    </I18nLink>
  );
}
