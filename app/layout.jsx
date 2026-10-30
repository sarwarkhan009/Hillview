import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SCHOOL } from "../lib/content";

export const metadata = {
  metadataBase: new URL("https://hillviewsimdega.com"),
  title: {
    default: "HillView Public School, Simdega | CBSE Affiliated School",
    template: "%s | HillView Public School, Simdega",
  },
  description:
    "HillView Public School, Simdega - an English medium, co-educational CBSE affiliated school (Affiliation No. 3430725) managed by Ramawtar Ji Memorial Trust. Admissions open.",
  keywords: [
    "HillView Public School",
    "Simdega school",
    "CBSE school Simdega",
    "school in Simdega Jharkhand",
  ],
  openGraph: {
    title: "HillView Public School, Simdega",
    description:
      "English medium, co-educational CBSE affiliated school in Simdega, Jharkhand. Managed by Ramawtar Ji Memorial Trust.",
    url: "https://hillviewsimdega.com",
    siteName: "HillView Public School, Simdega",
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "School",
    name: SCHOOL.fullName,
    url: "https://hillviewsimdega.com",
    email: SCHOOL.email,
    telephone: SCHOOL.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Samtoli, Kurdeg Road",
      addressLocality: "Simdega",
      addressRegion: "Jharkhand",
      postalCode: "835235",
      addressCountry: "IN",
    },
  };
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
