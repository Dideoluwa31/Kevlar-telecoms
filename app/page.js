import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import Navbar from "@/components/Navbar";
import LandingPage from "@/components/LandingPage";
import ApproachSection from "@/components/ApproachSection";
import ClientsSection from "@/components/ClientsSection";
import ProjectsSection from "@/components/ProjectsSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import Footer from "@/components/Footer";





export default function Home() {
  return (
    <main
      className="font-sans text-gray-900"
      style={{ ["--brand"]: "#019a65" }}
    >
    <div>
      <div>
        <Navbar/>
        <LandingPage/>
        <AboutSection/>
        <VisionMissionSection/>
        <ServicesSection/>
        <ApproachSection/>
        <ClientsSection/>
        <ProjectsSection/>
        <Footer/>
      </div>
      

    </div>
    </main>
  );
};
