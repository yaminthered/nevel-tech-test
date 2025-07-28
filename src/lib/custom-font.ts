import localFont from "next/font/local";

const grotesk = localFont({
  src: [
    {
      path: "../assets/font/grotesk-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/font/grotesk-medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/font/grotesk-bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-grotesk",
});

export { grotesk };
