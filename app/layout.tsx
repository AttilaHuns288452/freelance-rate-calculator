import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Freelance Hourly Rate Calculator — Know What to Charge",
  description: "Calculate your true freelance hourly rate. Factor in taxes, benefits, business expenses, and non-billable time. Includes day rate, weekly rate, and monthly retainer equivalents.",
  keywords: [
    "freelance rate calculator",
    "hourly rate calculator freelancer",
    "how much to charge as freelancer",
    "freelance day rate calculator",
    "freelance pricing calculator",
    "contractor rate calculator",
  ],
  authors: [{ name: "FreelanceRateCalculator.com" }],
  creator: "FreelanceRateCalculator.com",
  publisher: "FreelanceRateCalculator.com",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://freelanceratecalculator.com",
    siteName: "Freelance Rate Calculator",
    title: "Freelance Hourly Rate Calculator — Know What to Charge",
    description: "Calculate your true freelance hourly rate. Factor in taxes, benefits, business expenses, and non-billable time.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Freelance Rate Calculator - Calculate your true hourly rate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelance Hourly Rate Calculator",
    description: "Stop guessing. Calculate what you actually need to charge.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "google-site-verification-code-here", // Replace after GSC setup
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Google AdSense */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
            crossOrigin="anonymous"></script>
        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Freelance Hourly Rate Calculator",
              description: "Calculate your true freelance hourly rate including taxes, benefits, expenses, and non-billable time.",
              url: "https://freelanceratecalculator.com",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: [
                "Hourly rate calculation",
                "Day/week/month rate equivalents",
                "Tax and benefit factoring",
                "Risk buffer for non-billable time",
                "Employed salary equivalent",
                "Industry presets",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-gray-50">
        {children}
        <footer className="mt-auto py-8 px-4 text-center text-sm text-gray-500 border-t border-gray-200 bg-white">
          <p>Freelance Rate Calculator — Free tool for freelancers &amp; contractors</p>
          <p className="mt-1">
            <a href="/privacy" className="text-blue-600 hover:underline mr-4">Privacy</a>
            <a href="/terms" className="text-blue-600 hover:underline mr-4">Terms</a>
            <a href="/affiliate-disclosure" className="text-blue-600 hover:underline">Affiliate Disclosure</a>
          </p>
        </footer>
      </body>
    </html>
  );
}