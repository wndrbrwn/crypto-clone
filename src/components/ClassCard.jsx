const ClassCard = ({ name, description, image, alarm }) => {
  return (
    <>
      <div
        className={`flex justify-between rounded-t-lg px-6 py-4`}
      >
        <div className="flex flex-col justify-center">
          
          <h5 className="text-white">{description}</h5>
        </div>
        <img
          className="w-[200px]"
          src={`/images/zombies/${image}.png`}
          alt="frontend"
        />
      </div>
      
        
      
    </>
  );
};

export default ClassCard;

