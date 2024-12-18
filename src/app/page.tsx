import Image from "next/image";
import HeroSection from "./components/HeroSection";
import JobSection from "./components/JobSection";
import TabSection from "./components/TabSection";

import { Navbar } from "./components/shared/Navbar";
import Footer from "./components/Footer";


const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Navbar/>

      {/* Hero Section */}
      <HeroSection />

      {/* Job Cards Section */}
      <JobSection />

      {/* Tabs Section */}
      <TabSection />

      {/* Footer  */}
      <Footer />
    </div>
  );
};

export default LandingPage;
