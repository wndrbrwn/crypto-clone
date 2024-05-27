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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    ></path>
                  </svg>
                </button>
                <button className="text-left flex items-center gap-1">
                  Twitter
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    ></path>
                  </svg>
                </button>
                <button className="text-left flex items-center gap-1">
                  Newsletter
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    ></path>
                  </svg>
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

