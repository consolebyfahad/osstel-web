import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/brand";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — Hostel Management System`,
    short_name: SITE_NAME,
    description:
      "Osstel is the all-in-one hostel management system for Pakistan. Manage tenants, rooms, rent, and payments in one app.",
    start_url: "/",
    display: "standalone",
    background_color: BRAND.colors.bg,
    theme_color: BRAND.colors.midnight,
    icons: [
      {
        src: BRAND.logo,
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
