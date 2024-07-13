import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Hero from "@/components/common/Hero";
import "../../styles/leaderboardpage.css";
import { Leaderboard } from "@/components/leaderboard/Leaderboard";
import { Suspense } from "react";

export default function page() {
  return (
    <>
      <Header />
      <Hero content={false} img="/images/leaderboard__bg.png" />

      <Suspense fallback={<div>Loading...</div>}>
        <Leaderboard />
      </Suspense>

      <Footer />
    </>
  );
}
