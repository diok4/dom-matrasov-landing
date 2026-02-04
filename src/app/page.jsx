import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FadeInSection from "@/components/FadeInSection";
import { content } from "@/lib/content";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: content.brand.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: content.brand.address,
      addressLocality: "Ташкент",
      addressCountry: "UZ",
    },
    telephone: content.brand.phone,
    sameAs: [content.brand.telegram, content.brand.instagram],
  };

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <HeroSection />
        <FadeInSection>
          <ProductsSection />
        </FadeInSection>
        <FadeInSection>
          <AboutSection />
        </FadeInSection>
        <FadeInSection>
          <ContactSection />
        </FadeInSection>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
