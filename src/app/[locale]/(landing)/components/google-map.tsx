"use client";

import * as React from "react";

import { siteConfig } from "@/config/site";

export default function GoogleMap() {
  return (
    <iframe
      src={siteConfig.links.googleMapIframe}
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map"
    />
  );
}
