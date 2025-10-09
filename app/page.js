import Navbar from "@/Components/Navbar"
import AboutSection from "@/Components/AboutSection";
import ServicesSection from "@/Components/ServicesSection";



export default function Home() {
  return (
    <main
      className="font-sans text-gray-900"
      style={{ ["--brand"]: "#019a65" }}
    >
    <div>
      <div>
        {/* <Navbar/> */}
        <AboutSection/>
        <ServicesSection/>
      </div>
      
    </div>
    </main>
  );
};
