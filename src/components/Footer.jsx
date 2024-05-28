const Footer = () => {
  return (
    <footer className=" lg:mt-40 bg-footer-back ">
      <div className="container-style px-6 py-8">
        <div className="flex justify-between items-start">
          <img src="/images/crypto_logo.png" alt="Crypto" />
          
          <div className="flex justify-between max-w-[300px] w-full">
            <div>
              <h6 className="text-white text-xl">GET STARTED</h6>
              <nav className="flex flex-col text-sm font-semibold gap-3 mt-4">
                <button className="text-left">Blog</button>
                <button className="text-left">Course</button>
                <button className="text-left">What is Blockchain?</button>
                
              </nav>
            </div>
            <div>
              <h6 className="text-white text-xl">GET IN TOUCH</h6>
              <nav className="flex flex-col text-sm font-semibold gap-3 mt-4">
                <button className="text-left flex items-center gap-1">
                  Github
                
                </button>
                <button className="text-left flex items-center gap-1">
                  Twitter
                 
                  
                </button>
                <button className="text-left flex items-center gap-1">
                  Newsletter
                  
                </button>
              </nav>
            </div>
          </div>
        </div>
        <div className=" border-techit-gray-100 mt-5 text-techit-gray-200 text-xs">
          
           
          <div className="mt-1">
          © Copyright 2024 Cryptozombies All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

