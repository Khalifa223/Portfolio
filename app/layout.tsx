import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const siteUrl = "https://johndoe.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "John Doe - Développeur Full Stack | Frontend, Backend & Mobile",
    template: "%s | John Doe",
  },
  description:
    "Portfolio de John Doe, Développeur Full Stack spécialisé en Angular, Node.js, Python, Django et Flutter. Création d'applications web et mobiles modernes, performantes et sécurisées.",
  keywords: [
    "Développeur Full Stack",
    "Développeur Frontend",
    "Développeur Backend",
    "Développeur Flutter",
    "Développeur Django",
    "Développeur Node.js",
    "Développeur Angular",
    "Développeur Python",
    "Portfolio Développeur",
    "Développeur Web",
  ],
  authors: [{ name: "John Doe", url: siteUrl }],
  creator: "John Doe",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    title: "John Doe - Développeur Full Stack",
    description:
      "Développeur Full Stack spécialisé en Angular, Node.js, Python, Django et Flutter. Découvrez mes projets et compétences.",
    siteName: "John Doe Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "John Doe - Développeur Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Doe - Développeur Full Stack",
    description:
      "Développeur Full Stack spécialisé en Angular, Node.js, Python, Django et Flutter.",
    images: ["/og-image.png"],
    creator: "@johndoe",
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
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "John Doe",
      url: siteUrl,
      jobTitle: "Développeur Full Stack",
      description:
        "Développeur Full Stack spécialisé en Angular, Node.js, Python, Django et Flutter.",
      sameAs: [
        "https://github.com",
        "https://linkedin.com",
        "https://x.com",
      ],
      knowsAbout: [
        "JavaScript",
        "TypeScript",
        "Angular",
        "React",
        "Node.js",
        "Python",
        "Django",
        "Flutter",
        "Dart",
      ],
    },
    {
      "@type": "WebSite",
      url: siteUrl,
      name: "John Doe Portfolio",
      description: "Portfolio de John Doe, Développeur Full Stack.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: siteUrl,
        },
      ],
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
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
