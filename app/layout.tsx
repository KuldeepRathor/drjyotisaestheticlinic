import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyWhatsApp from "@/components/sticky-whatsapp";
import PageWrapper from "@/components/layout/PageWrapper";

export const metadata = {
  title: "Dr Jyoti's Aesthetic Clinic",
  description:
    "Advanced skin, hair and aesthetic treatments. Book your consultation today.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-RVW59CZ5TC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-RVW59CZ5TC');
          `}
        </Script>
      </head>
      <body>
        <Navbar />
        <PageWrapper>{children}</PageWrapper>
        <Footer />
        <StickyWhatsApp />
      </body>
    </html>
  );
}
