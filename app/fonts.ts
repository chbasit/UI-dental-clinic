import localFont from "next/font/local";

export const bagossCondensed = localFont({
  src: [
    {
      path: "../public/fonts/bagoss-font-family/BagossCondensed-TRIAL-Regular.otf",
      weight: "100", // Mapped to 200 for a lighter rendering
      style: "normal",
    },
    {
      path: "../public/fonts/bagoss-font-family/BagossCondensed-TRIAL-SemiBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/bagoss-font-family/BagossCondensed-TRIAL-Bold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-bagoss-condensed",
});

export const bagossExtended = localFont({
  src: [
    {
      path: "../public/fonts/bagoss-font-family/BagossExtended-TRIAL-Regular.otf",
      weight: "200", // Mapped to 200 for a lighter rendering
      style: "normal",
    },
    {
      path: "../public/fonts/bagoss-font-family/BagossExtended-TRIAL-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/bagoss-font-family/BagossExtended-TRIAL-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-bagoss-extended",
});