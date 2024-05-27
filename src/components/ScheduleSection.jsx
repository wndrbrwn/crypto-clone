import { useState } from "react";
import TitleBar from "./TitleBar";
import ClassSection from "./ClassSection";


const ScheduleSection = () => {
  const [isClass, setIsClass] = useState(true);

  return (
    <section className="mt-10 lg:mt-20 container-style px-6">
      <TitleBar
        title="Courses"
        
      />
      
        
       
       
     
      <h6 className="mt-8 mb-6 text-xl font-semibold">
       
      </h6>
      <ClassSection /> 
    </section>
  );
};

export default ScheduleSection;


