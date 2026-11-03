import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/data/siteConfig";

const siteUrl = siteConfig.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: `${siteConfig.name} - Portfolio`,
    images: [
      {
        url: "/fatoma.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Développeur Full Stack`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/fatoma.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/fatoma.jpg",
    apple: "/fatoma.jpg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: siteConfig.name,
      url: siteUrl,
      jobTitle: "Développeur Full Stack",
      description: siteConfig.description,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bamako",
        streetAddress: "Magnambougou",
        addressCountry: "ML",
      },
      email: siteConfig.contact.email,
      telephone: siteConfig.contact.phone,
      sameAs: [
        siteConfig.links.github,
        siteConfig.links.linkedin,
      ],
      knowsAbout: [
        "Front-end",
        "Back-end",
        "Base de données",
        "API REST",
        "JavaScript",
        "TypeScript",
        "Python",
        "Django",
        "SQL",
      ],
    },
    {
      "@type": "WebSite",
      url: siteUrl,
      name: `${siteConfig.name} Portfolio`,
      description: siteConfig.description,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased">
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
