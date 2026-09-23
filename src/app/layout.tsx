import type { Metadata } from "next";
import { Bebas_Neue, Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
});

const liberationSerif = localFont({
  src: [
    {
      path: "../fonts/LiberationSerif-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/LiberationSerif-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/LiberationSerif-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/LiberationSerif-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-liberation-serif",
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "RoboISM | Robotics & AI Club",
    template: "%s | RoboISM",
  },
  description:
    "The official Robotics & AI Club of IIT (ISM) Dhanbad. Building innovative robots, autonomous drones, self-driving systems, and more.",
  keywords: [
    "RoboISM",
    "Robotics",
    "AI",
    "IIT ISM Dhanbad",
    "Robotics Club",
    "Artificial Intelligence",
  ],
  openGraph: {
    title: "RoboISM | Robotics & AI Club",
    description:
      "The official Robotics & AI Club of IIT (ISM) Dhanbad.",
    url: "https://roboism.in",
    siteName: "RoboISM",
    type: "website",
  },
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${liberationSerif.variable} ${roboto.variable}`}
    >
      <body>
        <Header />
        <main className="max-w-[1200px] m-auto py-[2rem] px-[1rem]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}













































// export default function RootLayout({ children }: LayoutProps<"/">) {
//   return (
//     <html
//       lang="en"
//       className={`${bebasNeue.variable} ${sourceSans.variable} ${roboto.variable}`}
//     >
//       <body className="min-h-screen flex flex-col">
//         <Header />
//         <main className="flex-1 max-w-[1200px] w-full mx-auto md:px-[2.4rem]">
//           {children}
//         </main>
//         <Footer />
//       </body>
//     </html>
//   );
// }
