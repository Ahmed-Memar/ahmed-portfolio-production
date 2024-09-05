import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Resume from "@/components/Resume";

export default function Home() {
  return (
    <>
      <Header id="home" />
      <Features id="features" />
      <Resume id="resume" />
      <Services id="services" />
      <Contact id="contact" />
    </>
  );
}
