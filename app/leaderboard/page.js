import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Hero from "@/components/common/Hero";
import { Leaderboard } from "@/components/leaderboard/Leaderboard";
import { Suspense } from "react";
import "../../styles/leaderboardpage.css";

import { PastWinnersList } from "@/components/leaderboard/PastWinnersList";

export default function page() {
  return (
    <>
      <Header />
      <Hero content={false} img="/images/leaderboard__bg.png" />

      <Suspense fallback={<div>Loading...</div>}>
        <Leaderboard />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <PastWinnersList />
      </Suspense>

      <Footer />
    </>
  );
}
