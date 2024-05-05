"use client";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="flex w-full  items-center py-4 px-8 bg-black text-white">
      <p className="font-satoshi-regular w-[20%] text-[12px] lg:text-[16px] ml-[2%] lg:ml-[10%]">© Creon 2023. All rights reserved.</p>
      <div className="w-[50%]">
        <button className="bg-transparent rounded-full w-8 h-8 mr-2">
          <Image width={32} height={32} src="/assets/images/Telegram.svg" alt="Facebook" />
        </button>
        <button className="bg-transparent rounded-full w-8 h-8 mr-2">
          <Image width={32} height={32} src="/assets/images/Discord.svg" alt="Twitter" />
        </button>
        <button className="bg-transparent rounded-full w-8 h-8">
          <Image width={32} height={32} src="/assets/images/Twitter.svg" alt="Instagram" />
        </button>
      </div>
      <Image width={190} height={22} src="/assets/images/Niftables-logo.svg" alt="Niftables" />
      
    </div>
  );
}
