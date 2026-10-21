import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://meridex.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Meridex Solutions — Outsource Admin Work | Australia & USA",
    template: "%s | Meridex Solutions",
  },
  description:
    "Meridex supports mortgage brokers, insurance brokers, accountants and finance firms with accurate document, bookkeeping, tax and payroll support. Start with a small pilot. No lock-in. Where merit meets dexterity.",
  keywords: [
    "outsourcing admin work",
    "mortgage broker back office support",
    "bookkeeping outsourcing Australia",
    "QuickBooks bookkeeping support USA",
    "insurance broker admin support",
    "payroll support outsourcing",
    "tax preparation support",
    "BAS preparation support",
    "1003 mortgage file preparation",
    "AP AR support QuickBooks",
    "document verification mortgage brokers",
    "outsource admin work Australia",
    "outsource admin work USA",
    "back office support finance firms",
    "Meridex Solutions",
    "no lock-in outsourcing pilot",
  ],
  authors: [{ name: "Meridex Solutions" }],
  creator: "Meridex Solutions",
  publisher: "Meridex Solutions",
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
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/meridex-logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Meridex Solutions",
    title: "Meridex Solutions — Where Merit Meets Dexterity",
    description:
      "Outsource the admin work slowing your business down. Accurate document, bookkeeping, tax and payroll support for mortgage brokers, accountants and finance firms across Australia and the USA. No lock-in.",
    images: [
      {
        url: "/meridex-logo-full.jpg",
        width: 1200,
        height: 630,
        alt: "Meridex Solutions — Where merit meets dexterity. Outsource admin work for mortgage brokers, accountants and finance firms.",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meridex Solutions — Where Merit Meets Dexterity",
    description:
      "Outsource the admin work slowing your business down. Accurate support for mortgage brokers, accountants and finance firms. No lock-in pilot.",
    images: ["/meridex-logo-full.jpg"],
    creator: "@meridexhq",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Business Services",
};

// JSON-LD Structured Data for Organization + LocalBusiness + FAQ
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Meridex Solutions",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/meridex-logo-full.jpg`,
        width: 1200,
        height: 630,
      },
      description:
        "Meridex supports mortgage brokers, insurance brokers, accountants and finance firms with accurate document, bookkeeping, tax and payroll support across Australia and the USA.",
      email: "info@meridex.com",
      telephone: "+918097527110",
      sameAs: [],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+918097527110",
          contactType: "customer support",
          email: "info@meridex.com",
          areaServed: ["AU", "US", "GB"],
          availableLanguage: ["English"],
        },
      ],
      areaServed: [
        {
          "@type": "Country",
          name: "Australia",
        },
        {
          "@type": "Country",
          name: "United States",
        },
        {
          "@type": "Country",
          name: "United Kingdom",
        },
      ],
      knowsAbout: [
        "Mortgage broker back office support",
        "Bookkeeping outsourcing",
        "BAS preparation",
        "Tax return preparation",
        "Payroll support",
        "QuickBooks Online support",
        "1003 mortgage file preparation",
        "Insurance broker admin support",
        "Document collection and verification",
        "AP/AR management",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Meridex Solutions",
      publisher: { "@id": `${siteUrl}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}/?s={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Meridex Solutions — Outsource Admin Work | Australia & USA",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
      description:
        "Outsource the admin work slowing your business down. Accurate document, bookkeeping, tax and payroll support for mortgage brokers, accountants and finance firms. No lock-in.",
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How does the pilot work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We start with a clearly scoped pilot project. You define the tasks, we deliver to spec. There's no lock-in—if the work doesn't meet your standards, you can stop after the pilot.",
          },
        },
        {
          "@type": "Question",
          name: "How do you protect client data?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We work inside the platforms you already use, under access you control, and only the people assigned to your work can see your data. We don't share client information with anyone outside that team.",
          },
        },
        {
          "@type": "Question",
          name: "Which software do you work with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We work with Xero, MYOB, QuickBooks, various CRM systems, document management tools, and lender portals. If you use a specific tool, let us know and we'll confirm compatibility.",
          },
        },
        {
          "@type": "Question",
          name: "What is the minimum engagement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There's no minimum term. We recommend starting with a small pilot of two to four weeks so you can assess the quality and fit before scaling.",
          },
        },
        {
          "@type": "Question",
          name: "What is your turnaround time?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Turnaround depends on the scope and volume. During onboarding, we agree on deadlines and SLAs upfront.",
          },
        },
        {
          "@type": "Question",
          name: "Can we stop after the pilot?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The pilot is designed so you can assess us with zero obligation. If it's not the right fit, you walk away with no cost beyond the pilot.",
          },
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#service`,
      serviceType: "Business Process Outsourcing",
      provider: { "@id": `${siteUrl}/#organization` },
      name: "Admin & Back-Office Support for Finance Firms",
      description:
        "Outsourced mortgage broker support, bookkeeping, BAS preparation, payroll, tax return preparation, and insurance broker admin for firms in Australia and the USA.",
      areaServed: ["Australia", "United States", "United Kingdom"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Outsourcing Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Mortgage Broker Support",
              description:
                "Document collection, verification, lodgement support, and lender follow-up for mortgage brokers.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Bookkeeping & Accounting Support",
              description:
                "Bank and credit card reconciliations, AP/AR processing, BAS preparation, and month-end support.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Payroll Support",
              description:
                "Pay run preparation, superannuation calculations, Single Touch Payroll data, and payroll reconciliations.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Tax Return Preparation",
              description:
                "Working papers and review-ready files for registered tax agents and CPAs.",
            },
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/meridex-logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
