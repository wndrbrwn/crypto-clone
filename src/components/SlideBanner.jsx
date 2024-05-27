import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import SlideBannerCard from "./SlideBannerCard";

const SlideBannerData = [
  {
    id: 1,
    title: "Solidity: Beginner to Intermediate Smart Contracts",
    description: "Get up to speed with the basics of Solidity.",
  },
  
  {
    id: 2,
    title: "Advanced Solidity: Get In-depth Knowledge",
    description: "Deploying Ethereum DApps with Truffle will walk you through the process of deploying your smart contracts with Truffle.",
  },
  
  
  {
    id: 3,
    title: "Beyond Ethereum: Explore the Blockchain Ecosystem",
    description:
      "Explore the blockchain ecosystem.",
    
  },
  {
    id: 4,
    title: "Optimism Unleashed",
    description: "Welcome to our groundbreaking course on writing, testing, and deploying smart contracts using the OP stack! In this course, we will explore the exciting world of Optimism, a revolutionary Layer 2 scaling solution built to enhance Ethereum's capabilities. At its core, Optimism is an EVM-compatible layer 2 protocol that aims to address the scalability and cost challenges of the Ethereum network. Throughout this course, you will embark on a hands-on journey, starting from the basics of writing and testing smart contracts and, by the end, you will possess the skills and knowledge necessary to deploy your own smart contracts on OP Mainnet!",
    
  },
  {
    id: 5,
    title: "Tron: Decentralize the web",
    description: "Start working with TRON, one of the fastest-growing public blockchains.",
  },
  {
    id: 6,
    title: "Mastering the NEO Blockchain",
    description: "Start using Neo, a feature-complete blockchain platform for building decentralized applications.",
  },
  {
    id: 7,
    title: "Chainlink: Decentralized Oracles",
    description: "Combine the real-world and all of its changes and information with our beloved zombies.",
    
  },
  {
    id: 8,
    title: "MultiversX",
    description: "Bring your beloved zombies to MultiversX, a highly scalable, secure and decentralized blockchain network created to enable radically new applications, for users, businesses, society, and the new metaverse frontier.",
  },
  {
    id: 9,
    title: "Building an NFT-Based Squid Game in ink!",
    description: "Get up to speed with the basics of <a href='https://use.ink' target='_blank'> ink!</a>"

  },
];

const SlideBanner = () => {
  const [page, setPage] = useState(0);

  const sliderRef = useRef();

  const onClickNext = () => {
    sliderRef.current.slickNext();
    getCurrentPage();
  };

  const onClickPrev = () => {
    sliderRef.current.slickPrev();
    getCurrentPage();
  };

  const getCurrentPage = () => {
    setPage(sliderRef.current.innerSlider.state.currentSlide);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getCurrentPage();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <Slider
        ref={sliderRef}
        fade={true}
        
        arrows={false}
      >
        {SlideBannerData.map((v) => (
          <SlideBannerCard
            key={v.id}
            id={v.id}
            title={v.title}
            description={v.description}
            isWhite={v.isWhite}
          />
        ))}
      </Slider>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 max-w-[1280px] w-full px-6">
        <div className="text-white bg-black bg-opacity-30 flex w-fit text-xs rounded-full gap-2 px-3 py-[5px]">
          <div>{page + 1} / 9</div>
          <button onClick={onClickPrev}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
          <button onClick={onClickNext}>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlideBanner;
