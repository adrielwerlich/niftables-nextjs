"use client";
import React from "react";
import Image from "next/image";

export default function SixthPart() {
  return (
    <section className="grid grid-rows-3 grid-cols-2 gap-4 bg-black w-full relative blur-effect pt-[10%]">
      <article className="row-span-1 col-span-2 flex flex-col items-center lg:flex-row">
        <div className=" flex flex-col text-white w-2/4 2xl:w-2/3 pl-[6%] 2xl:pl-[15%]">
          <h1 className="mt-[5%] z-20 text-white font-monument-regular text-[22px] 2xl:text-[38px] uppercase">
            AI Prospects, Market Size, and Development Pace
          </h1>
          <p className="font-satoshi-regular text-[12px] 2xl:text-[18px] mt-2 w-[80%] text-white">
            The AI market is one of the most dynamically growing areas of
            technology. According to reports, the global AI market is expected
            to reach $190.61 billion by 2025, with a CAGR (Compound Annual
            Growth Rate) of 36.6%. The key drivers behind this growth include
            advancements in machine learning, increasing demand for big data
            analytics, and growing adoption of AI technology across various
            sectors such as healthcare, finance, and transportation.
          </p>
        </div>
        <Image
          width={453}
          height={302}
          src="/assets/images/six-1.svg"
          alt="Image for first row"
          className="mt-10 2xl:mt-0"
        />
      </article>
      <article className="row-span-1 col-span-2 flex flex-col items-center lg:flex-row">
        <div className=" flex flex-col text-white w-2/4 2xl:w-2/3 pl-[6%] 2xl:pl-[15%]">
          <h1 className="mt-[5%] z-20 text-white font-monument-regular text-[22px] 2xl:text-[38px] uppercase">
            AI Tools and Market
          </h1>
          <p className="font-satoshi-regular text-[12px] 2xl:text-[18px] mt-2 w-[80%] text-white">
            AI tools refer to the technologies and software that enable computer
            systems to perform tasks usually requiring human intellect. The
            market for these tools is dynamic and diverse, encompassing areas
            such as Natural Language Processing (NLP), machine learning,
            computer vision, and robotics. With a wide range of applications, AI
            tools are becoming increasingly indispensable in many sectors, from
            healthcare to finance, retail, manufacturing, and many others.
          </p>
        </div>
        <Image
          width={453}
          height={302}
          src="/assets/images/six-2.svg"
          alt="Image for second row"
          className="mt-10 2xl:mt-0"
        />
      </article>
      <article className="row-span-1 col-span-2 flex flex-col items-center lg:flex-row">
        <div className=" flex flex-col text-white w-2/4 2xl:w-2/3 pl-[6%] 2xl:pl-[15%]">
          <h1 className="mt-[5%] z-20 text-white font-monument-regular text-[22px] 2xl:text-[38px] uppercase">
            AI, Crypto, and NFT Market
          </h1>
          <p className="font-satoshi-regular text-[12px] 2xl:text-[18px] mt-2 w-[80%] text-white">
            Artificial Intelligence and blockchain technology are two
            groundbreaking areas leading new technological innovations. The
            combination of these two technologies creates intriguing
            possibilities. For instance, Non-Fungible Tokens (NFTs) can leverage
            AI to create unique digital artworks or to provide exclusive
            AI-based services. Meanwhile, cryptocurrencies can benefit from AI
            by improving security mechanisms, transaction efficiency, and
            service personalization. Such combination brings substantial
            benefits for both developers and users, paving the way for
            unprecedented possibilities.
          </p>
        </div>
        <Image
          width={453}
          height={302}
          src="/assets/images/six-3.svg"
          alt="Image for third row"
          className="mt-10 2xl:mt-0"
        />
      </article>
    </section>
  );
}
