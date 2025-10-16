import AboutSection from "@/Components/AboutSection";
import ServicesSection from "@/Components/ServicesSection";
import Navbar from "@/Components/Navbar";
import LandingPage from "@/Components/LandingPage";
import ApproachSection from "@/Components/ApproachSection";
import ClientsSection from "@/Components/ClientsSection";
import ProjectsSection from "@/Components/ProjectsSection";
import VisionMissionSection from "@/Components/VisionMissionSection";
import Footer from "@/Components/Footer";





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
