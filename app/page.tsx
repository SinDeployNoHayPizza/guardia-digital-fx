import MainLayout from "@/components/layout/MainLayout";
import Hero from "@/components/home/Hero";
import ServicesGrid from "@/components/home/ServicesGrid";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <ServicesGrid />
      <Testimonials />
    </MainLayout>
  );
}