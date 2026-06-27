export const APP_SCREENSHOTS = [
  {
    id: "dashboard",
    src: "/app-dashboard.png",
    label: "Dashboard",
    alt: "Osstel app dashboard showing rent collection and hostel overview",
  },
  {
    id: "hostels",
    src: "/app-hostels.png",
    label: "Hostels",
    alt: "Osstel app hostels list and property management",
  },
  {
    id: "rent",
    src: "/app-rent.png",
    label: "Rent",
    alt: "Osstel app rent tracking and payment collection",
  },
  {
    id: "profile",
    src: "/app-profile.png",
    label: "Profile",
    alt: "Osstel app owner profile and account settings",
  },
  {
    id: "quickmenu",
    src: "/app-quickmenu.png",
    label: "Quick Menu",
    alt: "Osstel app quick actions menu",
  },
] as const;

export type AppScreenshotId = (typeof APP_SCREENSHOTS)[number]["id"];
