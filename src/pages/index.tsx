import { Geist } from "next/font/google";
import WorkWithUs from "@/component/WorkWithUs";
import Header from "@/component/Header";
import Hero from "@/component/Hero";
import AboutUs from "@/component/AboutUs";
import Services from "@/component/Services";
import Team from "@/component/Team";
import ContactSection from "@/component/ContactSection";
import Footer from "@/component/Footer";
import i18next from "i18next";
import { useRouter } from "next/router";
import Blog from "@/component/Blog";
import UzbekistanMap from "@/component/Map";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function Home() {
  const { locale } = useRouter();
  i18next.changeLanguage(locale);

  return (
    <div className={`${geistSans.className} container mx-auto`}>
      <Header />
      <Hero />
      <AboutUs />
      <WorkWithUs />
      <Services />
      <Team />
      <UzbekistanMap />
      <Blog />
      <ContactSection />
      <Footer />
    </div>
  );
}
