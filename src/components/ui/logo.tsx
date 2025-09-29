import ExportedImage from "next-image-export-optimizer";

import { Link as I18nLink } from "@/i18n/navigation.public";
import { cn } from "@/lib/utils";

type indexProps = {
  href?: string;
  className?: string;
  imgClassName?: string;
};

export default function Logo({
  className,
  imgClassName,
  href = "/"
}: indexProps) {
  return (
    <I18nLink
      href={href}
      aria-label="site-logo"
      className={cn("flex items-center", className)}
    >
      <ExportedImage
        className={cn("h-auto w-28 max-w-full sm:w-48", imgClassName)}
        src="/images/logo.png"
        width={401}
        height={141}
        placeholder="empty"
        priority
        alt="site-logo"
      />
    </I18nLink>
  );
}
