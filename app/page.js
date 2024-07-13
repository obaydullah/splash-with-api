import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Hero from "@/components/common/Hero";
import Bonuses from "@/components/home/Bonuses";
import Giveway from "@/components/home/Giveway";
import Leaderboard from "@/components/home/Leaderboard";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero content={true} img="/images/hero-bg.png" />
      <Bonuses />
      <Giveway />
      <Leaderboard />
      <Footer />
    </div>
  );
}
