"use client";
import React, { useContext } from "react";
import Image from "next/image";
import styles from "./navbar.module.css";
import { ScreenSizeContext } from "../../context/ScreenSizeContext";

const Logo = () => (
  <div className="absolute top-0 left-0 m-6">
    <Image
      src="/assets/images/creon-logo.svg"
      alt="Logo"
      width={140}
      height={40}
    />
  </div>
);

const DesktopNav = () => {
  return (
    <>
      <Logo />
      <nav className="flex items-center justify-end p-6 bg-transparent w-full absolute">
        <div className="space-x-4 w-[56%] flex items-end justify-end pr-10">
          <a href="#" className={`${styles.link} mr-8`}>
            Creon Pass
          </a>
          <a href="#" className={styles.link}>
            Token
            <span className={styles.badgeSoon}>SOON</span>
          </a>
          <a href="#" className={styles.link}>
            AI Revenue
            <span className={styles.badgeSoon}>SOON</span>
          </a>
          <a href="#" className={styles.link}>
            AI Launchpad
            <span className={styles.badgeSoon}>SOON</span>
          </a>
          <a
            href="#"
            className="relative left-[4%] px-4 py-2 text-white border-4 border-white w-[132px] justify-center flex rounded-lg hover:text-red-500 hover:border-red-500"
          >
            Connect
          </a>
        </div>
      </nav>
    </>
  );
};

const MobileNav = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Logo />
      <button onClick={toggleNav} className="absolute top-0 right-0 m-6 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          stroke="white"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <nav
        className={`fixed right-0 top-0 h-full transition-transform duration-200 ease-in-out z-10 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } bg-black p-6 flex flex-col space-y-4`}
      >
        <div className="flex flex-row">

        <a
          href="#"
          className="relative left-[4%] px-4 py-2 text-white border-4 border-white w-[132px] justify-center flex rounded-lg hover:text-red-500 hover:border-red-500"
        >
          Connect
        </a>
        <button
          onClick={toggleNav}
          className="bg-blue-500 hover:bg-purple-700 px-4 py-2 rounded-lg text-white ml-8 w-[70px] justify-center flex items-center"
        >
          X
        </button>
        </div>
        <a href="#" className={`${styles.link} mr-8`}>
          Creon Pass
        </a>
        <a href="#" className={styles.link}>
          Token
          <span className={styles.badgeSoon}>SOON</span>
        </a>
        <a href="#" className={styles.link}>
          AI Revenue
          <span className={styles.badgeSoon}>SOON</span>
        </a>
        <a href="#" className={styles.link}>
          AI Launchpad
          <span className={styles.badgeSoon}>SOON</span>
        </a>
        <div className="w-[50%] fixed bottom-0">
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
      </nav>
    </div>
  );
};
const Navbar = () => {
  const screenSize = useContext(ScreenSizeContext);

  return screenSize.width < 1400 ? <MobileNav /> : <DesktopNav />;
};

export default Navbar;
