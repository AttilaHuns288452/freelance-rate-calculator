import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#5e6ad2",
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
  title: {
    default: "Design Your Ideal Freelance Life — Lifestyle Calculator",
    template: "%s | Freelance Calculator",
  },
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
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  alternates: {
    canonical: "https://freelancecalculator.xyz/",
  },
  other: {
    "google-site-verification": "85ErC2_tv1i_Oyxjrs35UXg9glDunSBPtXzjyyHbgds",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://freelancecalculator.xyz/",
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
        <link rel="preload" as="font" href="/_next/static/media/797e433ab948586e-s.p.0r6juujl39pe6.woff2" crossOrigin="anonymous" />
        <link rel="preload" as="font" href="/_next/static/media/caa3a2e1cccd8315-s.p.0wgildi0cnwt9.woff2" crossOrigin="anonymous" />
        {/* Google AdSense */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4645179646749256" crossOrigin="anonymous"></script>
        {/* Google Analytics 4 */}
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
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
              featureList: ["Hourly rate calculation","Day/week/month rate equivalents","Tax and benefit factoring","Risk buffer for non-billable time","Employed salary equivalent","Industry presets"],
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
            potentialAction: { "@type": "SearchAction", target: { "@type": "EntryPoint", urlTemplate: "https://freelancecalculator.xyz/blog?q={search_term_string}" }, "query-input": "required name=search_term_string" },
          })}}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#f8f9ff]">
        <header className="sticky top-0 z-50 glass-nav print:hidden">
          <nav className="max-w-6xl mx-auto px-4 h-[60px] flex items-center justify-between">
            <a href="/" className="flex items-center gap-2.5 text-[#0f1229] font-semibold text-sm hover:text-[#5e6ad2] transition-colors">
              <span className="flex items-center justify-center w-8 h-8 bg-[#5e6ad2] text-white rounded-xl text-xs font-bold shadow-sm shadow-[#5e6ad2]/20">FC</span>
              <span className="hidden sm:inline tracking-tight">Freelance Calculator</span>
            </a>
            <div className="flex items-center gap-1 text-sm">
              <a href="/" className="px-3 py-1.5 text-gray-500 hover:text-[#5e6ad2] hover:bg-[#eef2ff] rounded-full transition-colors font-medium">Calculator</a>
              <a href="/blog" className="px-3 py-1.5 text-gray-500 hover:text-[#5e6ad2] hover:bg-[#eef2ff] rounded-full transition-colors font-medium">Blog</a>
              <a href="/resources" className="px-3 py-1.5 text-gray-500 hover:text-[#5e6ad2] hover:bg-[#eef2ff] rounded-full transition-colors font-medium">Resources</a>
              <a href="/about" className="hidden sm:inline-flex px-3 py-1.5 text-gray-500 hover:text-[#5e6ad2] hover:bg-[#eef2ff] rounded-full transition-colors font-medium">About</a>
              <a href="#calculator" className="ml-1 hidden md:inline-flex items-center gap-1.5 px-4 py-2 bg-[#0f1229] text-white text-xs font-semibold rounded-full hover:bg-black transition-colors shadow-sm">Try it →</a>
            </div>
          </nav>
        </header>
        {children}
        <Analytics />
        <SpeedInsights />
        {/* Adsterra scripts 1 & 2 */}
        <Script strategy="afterInteractive" src="https://pl30918971.effectivecpmnetwork.com/6e/c3/30/6ec330c490d350e23deecc65c618b17d.js" />
        <Script strategy="afterInteractive" src="https://pl30918973.effectivecpmnetwork.com/ce/03/dc/ce03dc2a0e1cd4eadbd8f4a33cce1fc1.js" />
        <footer className="mt-auto border-t border-gray-100 bg-white print:hidden">
          <div className="max-w-6xl mx-auto px-4 py-10 text-center">
            <div className="flex justify-center mb-3">
              <a href="https://www.effectivecpmnetwork.com/efcmas0qkd?key=73bf03acf481effec355869d60a1daf7" target="_blank" rel="noopener sponsored" className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-semibold rounded-full hover:from-amber-600 hover:to-orange-600 transition-all shadow-md hover:shadow-lg">
                💼 Recommended Freelance Tools <span aria-hidden>→</span>
              </a>
            </div>
            <p className="text-[11px] tracking-[0.14em] uppercase text-gray-400 font-medium">Sponsored</p>
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6 text-xs font-medium text-gray-500" aria-label="Footer">
              <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
              <a href="/blog" className="hover:text-blue-600 transition-colors">Blog</a>
              <a href="/about" className="hover:text-blue-600 transition-colors">About</a>
              <a href="/resources" className="hover:text-blue-600 transition-colors">Resources</a>
              <a href="/contact" className="hover:text-blue-600 transition-colors">Contact</a>
              <a href="/privacy" className="hover:text-blue-600 transition-colors">Privacy</a>
              <a href="/terms" className="hover:text-blue-600 transition-colors">Terms</a>
            </nav>
            <p className="mt-5 text-[11px] leading-relaxed text-gray-400 max-w-2xl mx-auto">
              We recommend tools we believe in. Some links are affiliate & sponsored links — if you purchase through them, we earn a small commission at no extra cost to you. See our <a href="/resources" className="hover:text-blue-500 underline underline-offset-2">Resources page</a> for details.
            </p>
            <p className="mt-3 text-xs text-gray-400">💼 Freelance Lifestyle Calculator — Free tool for freelancers. Not financial advice.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
