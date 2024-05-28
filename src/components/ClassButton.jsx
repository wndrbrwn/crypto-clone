import { useEffect, useState } from "react";

const ClassButton = ({ classData, classCardComps, setClassCardComps }) => {
  const [isClicked, setIsClicked] = useState();

  const onClickClass = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    if (isClicked) {
      setClassCardComps([...classCardComps, classData]);
    } else {
      const temp = classCardComps.filter((v) => {
        if (v.name !== classData.name) {
          return v;
        }
      });

      setClassCardComps(temp);
    }
  }, [isClicked]);

  return (
    <button
      className={`${
        isClicked
          ? "border-2 border-blue-700 text-white bg-crypto-back"
          : "border-crypto-back "
      } w-[165px] h-[40px] px-3 py-1.5 text-lg border border-crypto-back text-white rounded-md`}
      onClick={onClickClass}
    >
      {classData.name}
    </button>
  );
};

export default ClassButton;
