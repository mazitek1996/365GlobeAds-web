import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./lib/theme-provider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], weight: ["300", "700"] });

export const metadata: Metadata = {
  title:
    "365GlobeAds Top SEO Service Company in USA - Elevate Your Brand with Global Reach. Innovative Digital Marketing Solutions to Grow Your Business. Join us on our journey to become a leader in digital marketing.",
  description:
    "Discover the power of innovative digital marketing with 365GlobeAds. We specialize in SEO, PPC, social media marketing, content creation, and more to help businesses achieve their marketing goals. With a focus on innovation and excellence, we deliver personalized strategies that drive results. Partner with us to elevate your brand and succeed in the digital landscape.",
  keywords:
    "365GlobeAds, digital marketing, SEO, PPC, social media marketing, content creation, marketing solutions, online marketing, brand elevation, global reach, innovative marketing, business growth, marketing strategies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="google-analytics"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTIC}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTIC}');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
