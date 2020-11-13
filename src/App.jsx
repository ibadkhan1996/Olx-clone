import React from "react";
import "./App.css";
import Header from "./components/Header";
import FeatureCard from "./components/FeatureCard";
import RecommendedCard from "./components/RecommendedCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <FeatureCard />
      <RecommendedCard />
      <Footer />
    </div>
  );
}

export default App;
