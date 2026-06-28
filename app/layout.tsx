import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#1d4ed8",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Design Your Ideal Freelance Life — Lifestyle Calculator",
  description: "Not a rate calculator. Tell us the life you want — income, hours, time off — and we'll tell you exactly what to charge to make it real. Free lifestyle designer for freelancers.",
  keywords: [
    "freelance lifestyle calculator",
    "ideal freelance life",
    "freelance income calculator",
    "how much to charge as freelancer",
    "freelance life design",
    "freelancer rate calculator",
    "financial freedom freelancer",
  ],
  authors: [{ name: "FreelanceRateCalculator.com" }],
  creator: "FreelanceRateCalculator.com",
  publisher: "FreelanceRateCalculator.com",
  metadataBase: new URL("https://freelancecalculator.xyz"),
  robots: "index, follow",
  alternates: {
    canonical: "https://freelancecalculator.xyz",
  },
  other: {
    "google-site-verification": "85ErC2_tv1i_Oyxjrs35UXg9glDunSBPtXzjyyHbgds",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://freelancecalculator.xyz",
    siteName: "Freelance Lifestyle Calculator",
    title: "Design Your Ideal Freelance Life",
    description: "Tell us the life you want — how much income, hours, and time off — and we'll tell you what to charge to make it real.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Freelance Lifestyle Calculator - Design your ideal freelance life",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Design Your Ideal Freelance Life",
    description: "Tell us the life you want. We'll tell you what to charge to make it real.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "85ErC2_tv1i_Oyxjrs35UXg9glDunSBPtXzjyyHbgds",
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
        {/* Preload fonts */}
        <link rel="preload" as="font" href="/_next/static/media/797e433ab948586e-s.p.0r6juujl39pe6.woff2" crossOrigin="anonymous" />
        <link rel="preload" as="font" href="/_next/static/media/caa3a2e1cccd8315-s.p.0wgildi0cnwt9.woff2" crossOrigin="anonymous" />
        {/* Google AdSense - defer loading */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4645179646749256"
            crossOrigin="anonymous"></script>
        {/* Google Analytics 4 - defer loading */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3VTB3J5YP9"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3VTB3J5YP9');
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
              url: "https://freelancecalculator.xyz",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "FreelanceRateCalculator.com",
            url: "https://freelancecalculator.xyz",
            logo: "https://freelancecalculator.xyz/og-image.png",
            description: "Free freelance rate and lifestyle calculator for freelancers.",
          })}}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Freelance Lifestyle Calculator",
            url: "https://freelancecalculator.xyz",
            description: "Design your ideal freelance lifestyle and calculate your rate.",
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://freelancecalculator.xyz/blog?q={search_term_string}",
              },
              "query-input": "required name=search_term_string",
            },
          })}}
        />
      </head>
      <body className="min-h-full flex flex-col bg-gray-50">
        {children}
        <Analytics />
        <SpeedInsights />
        <footer className="mt-auto py-8 px-4 text-center text-sm text-gray-400 border-t border-gray-100 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-5 mt-2 text-xs">
              <a href="/" className="hover:text-blue-600">Home</a>
              <a href="/blog" className="hover:text-blue-600">Blog</a>
              <a href="/about" className="hover:text-blue-600">About</a>
              <a href="/resources" className="hover:text-blue-600">Resources</a>
              <a href="/contact" className="hover:text-blue-600">Contact</a>
              <a href="/privacy" className="hover:text-blue-600">Privacy</a>
              <a href="/terms" className="hover:text-blue-600">Terms</a>
            </div>
            <p className="mt-4 text-[11px] text-gray-300 max-w-xl mx-auto leading-relaxed">
              We recommend tools we believe in. Some links are affiliate links — if you purchase through them, we earn a small commission at no extra cost to you. See our <a href="/resources" className="hover:text-blue-500">Resources page</a> for details.
            </p>
            <p className="mt-2 text-xs text-gray-400">💼 Freelance Lifestyle Calculator — Free tool for freelancers. Not financial advice.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
