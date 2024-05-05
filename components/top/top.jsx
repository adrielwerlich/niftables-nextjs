import Navbar from "../navbar/navbar";

export default function Top() {
  return (
    <>
      <video autoPlay loop muted className="max-h-[1270px] w-full">
        <source
          src="/assets/videos/main-background-video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <Navbar />

      <h1 className="absolute top-[10%] sm:top-[15%] lg:top-[30%] 2xl:top-[60%] text-white font-monument-regular 
        text-[16px] sm:text-[20px] md:text-[30px] 2xl:text-[50px] w-[80%] uppercase">
        The world&apos;s first platform for Tokenizing AI blockchain projects
      </h1>

      <h2 className="absolute top-[22%] sm:top-[22%] md:top-[28%] lg:top-[42%] 2xl:top-[80%] 
      font-satoshi-bold text-gradient gradient-border flex left-[10%] 
      text-[12px] sm:text-[14px] md:text-[18px] 2xl:text-[22px] ">
        Hold the Creon Pass NFT and earn passive income from AI Tools
      </h2>
    </>
  );
}
