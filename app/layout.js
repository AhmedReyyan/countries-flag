import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ SEO-optimized metadata
export const metadata = {
  title: "CountryFlagsCDN - Free High Quality Country Flags CDN",
  description:
    "Free, fast, and reliable CDN for high-resolution country flag images. Just use simple URLs to get flags in your apps, websites, and projects.",
  keywords:
    "flag CDN, country flags API, free flag images, SVG country flags, country flag icons, high quality flags, flag images URL, country flags CDN, free flag CDN",
  authors: [{ name: "Ahmed Reyyan" }],
  robots: "index, follow",
  openGraph: {
    title: "CountryFlagsCDN - Free High Quality Country Flags CDN",
    description:
      "Serve free country flag images instantly via URLs. No API keys required. Perfect for developers and designers.",
    url: "https://countries-flag-pi.vercel.app/",
    siteName: "CountryFlagsCDN",
    images: [
      {
        url: "https://countries-flag-pi.vercel.app/us.svg", // Use an actual preview image or create one
        width: 1200,
        height: 630,
        alt: "CountryFlagsCDN Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CountryFlagsCDN - Free High Quality Country Flags CDN",
    description:
      "Get free, high-quality country flag icons with simple URLs. No API keys. Works instantly for your website or app.",
    images: [
      "https://countries-flag-pi.vercel.app/us.svg", // Same or better preview image
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
       <meta name="google-site-verification" content="7DA-5McyztDuZDmZZiYjlmZmRKCmHjcHMamtmrYzb-g" />
       
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
