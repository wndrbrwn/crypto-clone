import Button from "/images/button.png";

const SlideBannerCard = ({ id, title, description, isWhite }) => {
  return (
    <div className="relative h-[400px]">
      <div
        className={`container-style flex flex-col justify-center h-full px-6 text-white`}
      >
        <h2 className="text-blue-300">Featured</h2>
        <h3 className="text-[32px] font-bold">{title}</h3>
        <h5 className="mt-2 text-gray-400">{description}</h5>
        <div className="p-6">
            <img className="w-[200px]" src={Button} alt=""/>
            <div class="absolute bottom-0 px-4 py-3 w-full">
            <button class="btn btn-text btn-link">Start Course</button>
            
      
    </div>
          </div>
          <img
        className="absolute top-0 -z-10 w-full h-full object-cover"
        src={`/images/banners/1.webp`}
        alt=""
      />
      </div>
      
      
    </div>
  );
};

export default SlideBannerCard;


