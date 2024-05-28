const ClassCard = ({ name, description, image}) => {
  return (
    <>
      <div
        className={`flex  rounded-t-lg px-6 py-4`}
      >
        <img
          className="w-[200px]"
          src={`/images/zombies/${image}.png`}
          alt="frontend"
        />
        
        
        <div className="flex flex-col justify-center">
        <div className="ml-auto">
        <span class="ml-auto mb-1">
          0% completed
        </span> </div>
          <div>
          <h5 className="text-white mr-auto">{description}</h5>
          </div>
        </div>
      </div>
      
        
      
    </>
  );
};

export default ClassCard;

