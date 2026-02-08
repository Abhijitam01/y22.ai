import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import Challenges from "./_components/Challenges";
import AIMagic from "./_components/AIMagic";
import Efficiency from "./_components/Efficiency";
import BuiltForYourTeam from "./_components/BuiltForYourTeam";
import Platform from "./_components/Platform";
import Ecosystem from "./_components/Ecosystem";
import Pricing from "./_components/Pricing";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Challenges />
      <AIMagic />
      <Efficiency />
      <BuiltForYourTeam />
      <Platform />
      <Pricing />
      <Ecosystem />
      <Footer />
    </>
  );
}
