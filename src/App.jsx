import { useState, useEffect } from "react";

import Header from "./components/Header";
import SlideBanner from "./components/SlideBanner";

import ScheduleSection from "./components/ScheduleSection";


import Footer from "./components/Footer";

const App = () => {
  const [isViewed, setIsViewed] = useState(false);

  useEffect(() => {
    const savedIsViewed = localStorage.getItem("isViewed");

    if (savedIsViewed === "1") {
      setIsViewed(true);
    }
  }, []);

  return (
    <div className="font-pretendard text-crypto-text bg-crypto-main">
      
      <Header />
      <SlideBanner />
      
      <ScheduleSection />
      
     
    
      
      <Footer />
      
    </div>
  );
};

export default App;
