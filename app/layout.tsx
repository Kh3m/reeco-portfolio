import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { site } from "@/content/site";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { WorkWithMe } from "@/components/sections";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.seo.title, template: `%s — ${site.brand}` },
  description: site.seo.description,
  openGraph: {
    type: "website",
    siteName: site.brand,
    title: site.seo.title,
    description: site.seo.description,
    locale: "en_GB",
  },
  twitter: { card: "summary_large_image", title: site.seo.title, description: site.seo.description },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} antialiased`} suppressHydrationWarning>
      <head>
        {/* Enables scroll-reveal hiding only when JS runs, so content is never stuck invisible. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="flex min-h-screen flex-col font-sans">
        <Nav />
        <main className="flex-1">{children}</main>
        <WorkWithMe />
        <Footer />
      </body>
    </html>
  );
}
