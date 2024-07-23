"use client";

import Header from "@/components/header/Header";
import Game from "@/components/game-new/Game";

export default function Home() {
  return (
    <HomePageLayot header={<Header />}>
      <Game />
    </HomePageLayot>
  );
}

function HomePageLayot({ header, children }) {
  return (
    <div className="bg-slite-50 min-h-screen">
      {header}
      <main className="pt-6 mx-auto w-max">{children}</main>
    </div>
  );
}
