"use client";
import React, { useState, useEffect, useRef, useContext } from "react";
import Image from "next/image";

export default function FourthPart() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const contentRef = useRef<HTMLElement | null>(null);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  useEffect(() => {
    if (contentRef.current) {
      if (activeSection) {
        contentRef.current.style.height = "auto";
      } else {
        contentRef.current.style.height = "0px";
      }
    }
  }, [activeSection]);

  return (
    <div className="grid grid-cols-12 gap-4 bg-black w-full relative blur-effect pt-[10%]">
      <div className="col-span-12 2xl:col-span-6 flex flex-col">
        <h1 className="mt-[15%] ml-[15%] 2xl:ml-[30%] z-20 text-white font-monument-regular 
        text-[28px] 2xl:text-[38px] w-[40vw] uppercase">
          Our vision is to support the innovation of AI blockchain projects
          <span className="text-gradient">
            {" "}
            while prioritizing communities and democratizing profits
          </span>
        </h1>
        <Image
          src="/assets/images/fourth-part-image.svg"
          alt="Logo"
          width={832}
          height={512}
          className="ml-0 lg:ml-[15%] 2xl:ml-[40%]"
        />
      </div>
      <div className="col-span-12 2xl:col-span-6">
        <div className="accordion pt-24">
          <div
            className={`accordion-section ${
              activeSection === "section1" ? "open" : ""
            }`}
          >
            <div className="w-full 2xl:w-[500px] flex justify-between">
              <div className="w-[80%] flex">
                <Image
                  src="/assets/images/icon1-fourth.svg"
                  alt="Logo"
                  width={100}
                  height={114}
                />
                <button
                  onClick={() => toggleSection("section1")}
                  className="accordion-title"
                >
                  <span className="">Profitability and Growth</span>
                </button>
              </div>
              <Image
                src="/assets/images/arrow.svg"
                alt="Logo"
                width={18}
                height={18}
                style={{
                  transform:
                    activeSection === "section1"
                      ? "rotate(0deg)"
                      : "rotate(180deg)",
                  transition: "transform 0.5s ease-in-out",
                }}
              />
            </div>
            <div ref={contentRef} className="accordion-content">
              {activeSection === "section1" && (
                <p className="mt-[3%] ml-[30%] font-satoshi-regular text-[18px] text-white">
                  Free and early access to Creon built AI projects
                </p>
              )}
            </div>
          </div>
          <div
            className={`accordion-section ${
              activeSection === "section2" ? "open" : ""
            }`}
          >
            <div className="w-full 2xl:w-[500px] flex justify-between">
              <div className="w-[80%] flex">
                <Image
                  src="/assets/images/icon2-fourth.svg"
                  alt="Logo"
                  width={100}
                  height={114}
                />
                <button
                  onClick={() => toggleSection("section2")}
                  className="accordion-title text-start"
                >
                  <span className="">
                    Transparent & Fair Decentralized Earnings
                  </span>
                </button>
              </div>
              <Image
                src="/assets/images/arrow.svg"
                alt="Logo"
                width={18}
                height={18}
                style={{
                  transform:
                    activeSection === "section2"
                      ? "rotate(0deg)"
                      : "rotate(180deg)",
                  transition: "transform 0.5s ease-in-out",
                }}
              />
            </div>
            <div ref={contentRef} className="accordion-content">
              {activeSection === "section2" && (
                <p className="mt-[3%] ml-[30%] font-satoshi-regular text-[18px] text-white">
                  Free and early access to Creon built AI projects
                </p>
              )}
            </div>
          </div>
          <div
            className={`accordion-section ${
              activeSection === "section3" ? "open" : ""
            }`}
          >
            <div className="w-full 2xl:w-[500px] flex justify-between">
              <div className="w-[80%] flex">
                <Image
                  src="/assets/images/icon3-fourth.svg"
                  alt="Logo"
                  width={100}
                  height={114}
                />
                <button
                  onClick={() => toggleSection("section3")}
                  className="accordion-title"
                >
                  <span className="">Launching the future</span>
                </button>
              </div>
              <Image
                src="/assets/images/arrow.svg"
                alt="Logo"
                width={18}
                height={18}
                style={{
                  transform:
                    activeSection === "section3"
                      ? "rotate(0deg)"
                      : "rotate(180deg)",
                  transition: "transform 0.5s ease-in-out",
                }}
              />
            </div>
            <div ref={contentRef} className="accordion-content">
              {activeSection === "section3" && (
                <p className="mt-[3%] ml-[30%] font-satoshi-regular text-[18px] text-white">
                  some content
                </p>
              )}
            </div>
          </div>
          <div
            className={`accordion-section ${
              activeSection === "section4" ? "open" : ""
            }`}
          >
            <div className="w-full 2xl:w-[500px] flex justify-between">
              <div className="w-[80%] flex">
                <Image
                  src="/assets/images/icon4-fourth.svg"
                  alt="Logo"
                  width={100}
                  height={114}
                />
                <button
                  onClick={() => toggleSection("section4")}
                  className="accordion-title"
                >
                  <span className="">
                    Limitless Possibilities of AI & Crypto
                  </span>
                </button>
              </div>
              <Image
                src="/assets/images/arrow.svg"
                alt="Logo"
                width={18}
                height={18}
                style={{
                  transform:
                    activeSection === "section4"
                      ? "rotate(0deg)"
                      : "rotate(180deg)",
                  transition: "transform 0.5s ease-in-out",
                }}
              />
            </div>
            <div ref={contentRef} className="accordion-content">
              {activeSection === "section4" && (
                <p className="mt-[3%] ml-[30%] font-satoshi-regular text-[18px] text-white">
                  some content
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
