import Engagements from "@/components/Engagements";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import React from "react";

function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <Solutions />
      <Engagements />
      <Footer />
    </div>
  );
}

export default HomePage;
