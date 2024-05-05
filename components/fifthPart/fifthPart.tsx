"use client";
import React from "react";
import Image from "next/image";
import styles from "./fifth.module.css";

export default function FifthPart() {
  return (
    <section className="grid grid-cols-12 gap-4 bg-black w-full relative blur-effect pt-[10%]">
      <article className="col-span-12 2xl:col-span-4 flex flex-col">
        <h1 className="mt-[5%] 2xl:ml-[45%] z-20 text-white font-monument-regular text-[38px]
           w-full 2xl:w-[90vw] uppercase text-center 2xl:text-left">
          Token
          <span className={`ml-32 ${styles.badgeCommingSoon}`}>COMMING SOON</span>
        </h1>
        <h2 className="2xl:ml-[45%] font-satoshi-bold text-gradient flex text-[22px] w-full h-16 justify-center 2xl:justify-start">
          The Gateway token to the world of AI
        </h2>
        <Image
          src="/assets/images/fifth-1.svg"
          alt="Logo"
          width={423}
          height={234}
          className="2xl:ml-[43%] 2xl:mt-[7%] justify-center 2xl:justify-start flex m-auto 2xl:m-0"
        />
        <p className="font-satoshi-regular text-[18px] mx-auto w-2/4 2xl:mx-0 2xl:w-2/3 2xl:ml-[45%] mt-6 text-white">
          Set to debut in the latter half of 2024, the CREON token serves as the
          pioneering link between cutting-edge AI initiatives and blockchain
          technology. This innovative token provides NFT and token holders with
          unparalleled access to our Launchpad, AI tools, and exclusive
          pre-launch investment prospects.
        </p>
      </article>
      <article className="col-span-12 2xl:col-span-4 flex flex-col">
        <h1 className="mt-[5%] 2xl:ml-[25%] z-20 text-white font-monument-regular text-[38px] uppercase 
          text-center 2xl:text-left w-full 2xl:w-[90vw]">
          Revenue
          <span className={`ml-20 ${styles.badgeCommingSoon}`}>COMMING SOON</span>
        </h1>
        <h2 className="ml-[4%] 2xl:ml-[24.5%] font-satoshi-bold text-gradient flex text-[22px] 2xl:w-2/3 
        w-full h-16 justify-center 2xl:justify-start">
          Driving income and growth through decentralization
        </h2>
        <Image
          src="/assets/images/fifth-2.svg"
          alt="Logo"
          width={423}
          height={234}
          className="2xl:ml-[22%] 2xl:mt-[7%] justify-center 2xl:justify-start flex m-auto 2xl:m-0"
        />
        <p className="font-satoshi-regular text-[18px] 2xl:ml-[25%] mx-auto mt-6 text-white w-[50%]">
          CREON NFT and token holders are integral participants in the
          profit-sharing from our launched AI-based enterprises. We support the
          development of AI tools, ensuring a steady revenue stream, all while
          allowing early investors to enjoy the benefits of their support.
        </p>
      </article>
      <article className="col-span-12 2xl:col-span-4 flex flex-col">
        <h1 className="mt-[5%] 2xl:ml-[6%] z-20 text-white font-monument-regular text-[38px] uppercase
        text-center 2xl:text-left w-full 2xl:w-[90vw]">
          Launchpad
          <span className={`${styles.badgeCommingSoon}`}>COMMING SOON</span>
        </h1>
        <h2 className="2xl:ml-[5.5%] font-satoshi-bold text-gradient flex text-[22px] w-[96%] h-16 
        2xl:w-2/3 justify-center 2xl:justify-start">
          Driving the future of AI Innovation
        </h2>
        <Image
          src="/assets/images/fifth-3.svg"
          alt="Logo"
          width={423}
          height={234}
          className="2xl:ml-[2%] 2xl:mt-[10%] justify-center 2xl:justify-start flex m-auto 2xl:m-0"
        />
        <p className="font-satoshi-regular text-[18px] 2xl:ml-[6%] mt-6 text-white w-[50%] mx-auto">
          The Creon AI Launchpad, an essential component of our initiative,
          represents a groundbreaking opportunity in the realm of AI and
          blockchain. It provides the first known platform for acquiring
          allocations in tokenized AI projects, offering our community of NFT
          and CREON token holders early access to innovative and promising AI
          endeavors.
        </p>
      </article>
    </section>
  );
}
