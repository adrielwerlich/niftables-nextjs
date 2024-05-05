import Image from "next/image";

export default function SecondPart() {
  return (
    <div className="grid grid-cols-12 gap-4 bg-black w-full relative blur-effect">
      <div className="col-span-12 lg:col-span-6 flex flex-col">
        <h1 className="mt-[15%] ml-[12%] sm:ml-[20%] md:ml-[30%] z-20 text-white font-monument-regular lg:text-[45px] 2xl:text-[60px] w-[40vw] uppercase">
          creon pass nft
        </h1>
        <h2 className="ml-[12%] sm:ml-[20%] md:ml-[30%] font-satoshi-bold text-gradient flex lg:text-[18px] 2xl:text-[22px] w-[40vw]">
          The Creon NFT pass unlocks access to AI projects, the Creon launchpad,
          and a ticket to generate passive income through AI-driven tools
        </h2>
        <p className="mt-[5%] ml-[12%] sm:ml-[20%] md:ml-[30%] font-satoshi-regular text-[10px] sm:text-[14px] lg:text-[18px]">
          Pre-launch investment opportunities for upcoming AI projects
        </p>
        <p className="mt-[3%] ml-[12%] sm:ml-[20%] md:ml-[30%] font-satoshi-regular text-[10px] sm:text-[14px] lg:text-[18px]">
          Free and early access to Creon built AI projects
        </p>
        <p className="mt-[3%] ml-[12%] sm:ml-[20%] md:ml-[30%] font-satoshi-regular text-[10px] sm:text-[14px] lg:text-[18px]">
          Higher allocation limits on the Creon AI Launchpad
        </p>
        <p className="mt-[3%] ml-[12%] sm:ml-[20%] md:ml-[30%] font-satoshi-regular text-[10px] sm:text-[14px] lg:text-[18px]">
          Revenue share distribution from Creon built AI projects
        </p>
        <button className="gradient-button">Buy Creon Pass</button>
      </div>
      <div className="col-span-12 lg:col-span-6 max-h-[340px] lg:max-h-none">
      <video autoPlay loop muted className="py-10 md:py-0 max-h-[80%] md:max-h-[50%] mt-10 lg:mt-0 lg:max-h-[1270px] w-full">
        <source
          src="/assets/videos/nft-video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      </div>
    </div>
  );
}
