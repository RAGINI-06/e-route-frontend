import Navbar from "../components/common/Navbar";
import Hero from "../components/landing/Hero";
import EnvironmentalStats from "../components/landing/EnvironmentalStats";
import Timeline from "../components/landing/Timeline";
import DataSources from "../components/landing/DataSources";
import Footer from "../components/common/Footer";
import CTA from "../components/landing/CTA";
function LandingPage() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">

      <Navbar />

      <main className="space-y-2">
        <Hero />
        <EnvironmentalStats />
        <Timeline />
        <CTA />
        <DataSources />
      </main>

      <Footer />

    </div>
  );
}

export default LandingPage;