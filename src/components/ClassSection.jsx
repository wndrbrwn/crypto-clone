import { useState } from "react";

import ClassButton from "./ClassButton";
import ClassCard from "./ClassCard";
import classData from "../data/classData.json";

const ClassSection = () => {
  const [classCardComps, setClassCardComps] = useState([]);

  return (
    <>
      <div className="rounded-lg p-6 flex flex-wrap gap-[10px]">
        {classData.map((v, i) => (
          <ClassButton
            key={i}
            classData={v}
            classCardComps={classCardComps}
            setClassCardComps={setClassCardComps}
          />
        ))}
      </div>
      <ul className="grid gap-6 mt-6">
        {classCardComps.map((v, i) => (
          <li
            key={v.name + i}
            className="mx-auto bg-indigo-950 rounded-3xl max-w-[1000px] shadow-2xl w-full"
          >
            <ClassCard
              name={v.name}
              description={v.description}
              image={v.image}
              
              
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ClassSection;

