import { Geist } from "next/font/google";
import WorkWithUs from "@/component/WorkWithUs";
import Header from "@/component/Header";
import Hero from "@/component/Hero";
import AboutUs from "@/component/AboutUs";
import Services from "@/component/Services";
import Team from "@/component/Team";
import ContactSection from "@/component/ContactSection";
import Footer from "@/component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${geistSans.className} container mx-auto`}>
      <Header />
      <Hero />
      <AboutUs />
      <WorkWithUs />
      <Services />
      <Team />
      <ContactSection />
      <Footer />
    </div>
  );
}
