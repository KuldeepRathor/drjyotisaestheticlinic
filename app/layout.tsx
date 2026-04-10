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
      <body>
        <Navbar />
        <PageWrapper>{children}</PageWrapper>
        <Footer />
        <StickyWhatsApp />
      </body>
    </html>
  );
}
