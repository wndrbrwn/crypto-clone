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
      
     
    
      <div data-v-54b33430="" class="subscribe">
  <h2 data-v-54b33430="" id="stayUpdate" class="subscribe-title">Stay Updated</h2>
   <p data-v-54b33430="" class="text-secondary px-3">Join our mailing list to stay in the loop with our newest feature releases</p> 
   <div data-v-54b33430="" class="subscribe-container"><div data-v-54b33430="" class="subscribe-container">
    
      </div> <button data-v-54b33430="" type="submit" class="subscribe-btn">Subscribe</button></div></div>
      <Footer />
      
    </div>
  );
};

export default App;
