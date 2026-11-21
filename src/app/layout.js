import { Playfair_Display, Lato, Roboto, Roboto_Slab } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const lato = Lato({
  variable: "--font-lato-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "BS Fiber Product",
  description:
    "Modern fountain designs crafted to enhance any space with elegance and calm.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-US"
      className={`${playfair.variable} ${lato.variable} ${roboto.variable} ${robotoSlab.variable} antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
