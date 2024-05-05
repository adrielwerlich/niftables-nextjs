import Image from "next/image";

export default function ThirdPart() {
  return (
    <>
      <div className="bg-black w-full">
        <h1 className="mt-[5%] ml-[20%] z-20 text-white font-monument-regular 
          sm:text-[40px] 2xl:text-[60px] w-[90vw] uppercase">
          Profiting Through
        </h1>
        <h2 className="ml-[28%] sm:ml-[30%] 2xl:ml-[42%] font-monument-regular text-gradient flex  
        sm:text-[22px]  2xl:text-[38px] w-full">
          AI Innovation & Decentralization
        </h2>
      </div>
      <div className="grid grid-cols-12 gap-4 bg-black w-full relative blur-effect pt-10">
        <div className="col-span-12 2xl:col-span-6 flex flex-col items-center">
          <video
            autoPlay
            loop
            muted
            className="ml-0 2xl:ml-[30%] max-h-[485px] w-[947px] "
          >
            <source src="assets/videos/creon-logo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="col-span-12 2xl:col-span-6 text-white flex flex-col items-center">
          <p className="mt-[6%]  2xl:ml-[10%] font-satoshi-bold text-[22px] w-[50%] 2xl:w-[40%]">
            The dynamic community driven business model of the future.
          </p>
          <p className="mt-[3%] 2xl:ml-[10%] font-satoshi-regular text-[18px] w-[48%]">
            At Creon, we blend the power of AI tools with the dynamic crypto and
            NFT markets, utilizing an innovative business model to drive
            profitability. This approach empowers our community, as our NFT and
            token holders directly benefit from the growth and prosperity of the
            Creon network, creating a win-win scenario for both our community
            and for the projects we launch.
          </p>
        </div>
      </div>
    </>
  );
}
