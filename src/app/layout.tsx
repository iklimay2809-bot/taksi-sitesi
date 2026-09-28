import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://taksi-sitesi-blue.vercel.app"),
  title: "Alazı Taksi | Serinyol, Dikmece ve Hatay Güvenilir Taksi - Mehmet Sarıkaya",
  description: "Alazı, Serinyol, Dikmece ve Hatay genelinde 7/24 bağımsız özel taksi hizmeti. Durağa bağlı olmadan doğrudan araç sahibi Mehmet Sarıkaya'ya ulaşın. 0531 393 01 46",
  keywords: [
    "alazı taksi",
    "alazi taksi",
    "serinyol taksi",
    "dikmece taksi",
    "hatay alazı taksi",
    "serinyol taksi numarası",
    "dikmece taksi numarası",
    "hatay taksi",
    "mehmet sarıkaya taksi",
    "hatay özel taksi",
    "hatay bağımsız taksi",
    "serinyol nöbetçi taksi"
  ],
  authors: [{ name: "Mehmet Sarıkaya" }],
  creator: "Mehmet Sarıkaya",
  publisher: "Alazı Taksi",
  formatDetection: {
    telephone: true,
    address: true,
  },
  alternates: {
    canonical: "https://taksi-sitesi-blue.vercel.app",
  },
  openGraph: {
    title: "Alazı Taksi | Serinyol, Dikmece ve Hatay Taksi Hizmeti",
    description: "Alazı, Serinyol, Dikmece ve Hatay genelinde durağa bağlı olmadan doğrudan şoföre ulaşabileceğiniz bağımsız taksi hizmeti. 0531 393 01 46",
    url: "https://taksi-sitesi-blue.vercel.app",
    siteName: "Alazı Taksi",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/görsel/taksi3.jpeg",
        width: 1200,
        height: 630,
        alt: "Alazı Taksi - Mehmet Sarıkaya",
      },
    ],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "Alazı Taksi - Mehmet Sarıkaya",
    "image": "https://taksi-sitesi-blue.vercel.app/görsel/taksi3.jpeg",
    "telephone": "+905313930146",
    "url": "https://taksi-sitesi-blue.vercel.app",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Cumhuriyet Cd.",
      "postalCode": "31060",
      "addressLocality": "Hatay Merkez",
      "addressRegion": "Hatay",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 36.2163901,
      "longitude": 36.0827011
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Alazı" },
      { "@type": "AdministrativeArea", "name": "Serinyol" },
      { "@type": "AdministrativeArea", "name": "Dikmece" },
      { "@type": "AdministrativeArea", "name": "Hatay Merkez" },
      { "@type": "AdministrativeArea", "name": "Antakya" }
    ],
    "provider": {
      "@type": "Person",
      "name": "Mehmet Sarıkaya",
      "jobTitle": "Bağımsız Taksi Şoförü"
    },
    "description": "Alazı, Serinyol, Dikmece ve Hatay genelinde durağa bağlı olmayan 7/24 bağımsız özel taksi hizmeti."
  };

  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-[#09090b] text-zinc-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
