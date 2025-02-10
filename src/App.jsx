import BeforeAfter from "./components/BeforeAfter";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NearestGym from "./components/NearestGym";
import OurBenefits from "./components/OurBenefits";
import OurBlogs from "./components/OurBlogs";
import OurMission from "./components/OurMission";
import Personalized from "./components/Personalized";
import Review from "./components/Review";
import RunningText from "./components/RunningText";
import Services from "./components/Services";

function App() {

  return (
    <div className="max-w-screen min-h-screen bg-black relative">
      <div className="w-full fixed top-5 md:top-10 z-30">
        <Navbar />
      </div>
      <Home />
      <RunningText />
      <OurMission />
      <Services />
      <OurBenefits />
      <Personalized />
      <BeforeAfter />
      <Review />
      <NearestGym />
      <OurBlogs />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;

// fontFamily: "Space Grotesk", "Space Grotesk Placeholder", sans-serif;
