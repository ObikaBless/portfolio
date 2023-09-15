"use client";
import { logo } from "@/public/assets";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { delay, motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import { TbBrandGithub } from "react-icons/tb";
import { TbBrandGoogle } from "react-icons/tb";
import { SlSocialYoutube } from "react-icons/sl";
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialTwitter,
} from "react-icons/sl";
// import { createContext } from "react";

const Navbar = () => {
  const ref = useRef<string | any>("");
  const [showMenu, setShowMenu] = useState(false);
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShowMenu(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    // update click link class name
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  function handleClick(e:any){
    if(e.target.contains(ref.current)){
      //do something with myRef.current 
      setShowMenu(false);
    }
  };
  return (
    <div className="w-full shadow-navbarshadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor1 px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image className="" src={logo} alt="logo" />
        </motion.div>
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-[13px] gap-7">
            <Link
              className="flex items-center gap-1 font-medium text-textDark
                hover:text-textGreen cursor-pointer duration-300 nav-link"
              href="#home"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                Home
              </motion.li>
            </Link>

            <Link
              className="flex items-center gap-1 font-medium text-textDark
                hover:text-textGreen cursor-pointer duration-300 nav-link"
              href="#about"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
              >
                <span className="text-textGreen">I.</span>
                About
              </motion.li>
            </Link>

            <Link
              className="flex items-center gap-1 font-medium text-textDark
                hover:text-textGreen cursor-pointer duration-300 nav-link"
              href="#experience"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.2 }}
              >
                <span className="text-textGreen">II.</span>
                Experience
              </motion.li>
            </Link>

            <Link
              className="flex items-center gap-1 font-medium text-textDark
                hover:text-textGreen cursor-pointer duration-300 nav-link"
              href="#project"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
              >
                <span className="text-textGreen">III.</span>
                Project
              </motion.li>
            </Link>

            <Link
              className="flex items-center gap-1 font-medium text-textDark
                hover:text-textGreen cursor-pointer duration-300 nav-link"
              href="#contact"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
              >
                <span className="text-textGreen">IV.</span>
                Contact
              </motion.li>
            </Link>
          </ul>

          <a href="/assets/obika_resume.pdf" target="_blank">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen
              hover:bg-hoverColor duration-300"
            >
              Resume
            </motion.button>
          </a>
        </div>
        {/*handbugger menu section */}
        <div
          onClick={() => setShowMenu(true)}
          className="w-12 h-4 flex flex-col justify-between items-center mdl:hidden
        text-4xl text-textGreen cursor-pointer overflow-hidden group"
        >
          <span
            className="w-full h-[1px] bg-textGreen inline-flex transform 
          group-hover:translate-x-1 transition-all ease-in-out duration-300"
          ></span>

          <span
            className="w-full h-[2px] bg-textGreen inline-flex transform
          translate-x-0 group-hover-translate-x-5 transition-all ease-in-out duration-300"
          ></span>

          <span
            className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-0
          group-hover:translate-x-0.5 transition-all ease-in-out duration-300"
          ></span>
        </div>
        {showMenu && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handleClick}
            className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black
            bg-opacity-50 flex flex-col items-end"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%] h-full overflow-y-scroll
              scrollbarHide bg-[#112240] flex flex-col
              items-center px-4 py-10 relative"
            >
              <MdOutlineClose
                onClick={() => setShowMenu(false)}
                className="text-3xl text-textGreen cursor-pointer
                hover:text-red-500 absolute top-4 right-4"
              />
              <div className="flex flex-col items-center gap-7">
                <ul className="flex flex-col text-base gap-7">
                  <Link
                    className="flex items-center gap-1 font-medium text-textDark
                hover:text-textGreen cursor-pointer duration-300 nav-link"
                    href="#home"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.1,
                        ease: "easeIn",
                      }}
                    >
                      Home
                    </motion.li>
                  </Link>

                  <Link
                    className="flex items-center gap-1 font-medium text-textDark
                hover:text-textGreen cursor-pointer duration-300 nav-link"
                    href="#about"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.2,
                        ease: "easeIn",
                      }}
                    >
                      <span className="text-textGreen">01.</span>
                      About
                    </motion.li>
                  </Link>

                  <Link
                    className="flex items-center gap-1 font-medium text-textDark
                hover:text-textGreen cursor-pointer duration-300 nav-link"
                    href="#experience"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.3,
                        ease: "easeIn",
                      }}
                    >
                      <span className="text-textGreen">02.</span>
                      Experience
                    </motion.li>
                  </Link>

                  <Link
                    className="flex items-center gap-1 font-medium text-textDark
                hover:text-textGreen cursor-pointer duration-300 nav-link"
                    href="#project"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.4,
                        ease: "easeIn",
                      }}
                    >
                      <span className="text-textGreen">03.</span>
                      Project
                    </motion.li>
                  </Link>

                  <Link
                    className="flex items-center gap-1 font-medium text-textDark
                hover:text-textGreen cursor-pointer duration-300 nav-link"
                    href="#contact"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.5,
                        ease: "easeIn",
                      }}
                    >
                      <span className="text-textGreen">04.</span>
                      Contact
                    </motion.li>
                  </Link>
                </ul>
                <a href="/asset/my-resume.pdf" target="_blank">
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, ease: "easeIn" }}
                    className="w-32 h-10 rounded-md text-textGreen text-[13px] border border-textGreen
              hover:bg-hoverColor duration-300"
                  >
                    Resume
                  </motion.button>
                </a>
                <div className="sm:inline-flex items-center justify-center
    w-full py-6 gap-4">
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, ease: "easeIn" }}
                    href="https://github.com/ObikaBless"
                    target="_blank"
                  >
                    <span
                      className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700
          hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center
          justify-center hover:text-textGreen cursor-pointer
          hover:-translate-y-2 transition-all duration-300"
                    >
                      <TbBrandGoogle />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, ease: "easeIn" }}
                    href="https://github.com/ObikaBless"
                    target="_blank"
                  >
                    <span
                      className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700
          hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center
          justify-center hover:text-textGreen cursor-pointer
          hover:-translate-y-2 transition-all duration-300"
                    >
                      <TbBrandGithub />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9, ease: "easeIn" }}
                    href="https://www.linkedin.com/in/bless-obika-ba96b5221/"
                    target="_blank"
                  >
                    <span
                      className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700
          hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center
          justify-center hover:text-textGreen cursor-pointer
          hover:-translate-y-2 transition-all duration-300"
                    >
                      <SlSocialLinkedin />
                    </span>
                  </motion.a>
                  {/* <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, ease: "easeIn" }}
                    href="https://twitter.com/BlessObika"
                    target="_blank"
                  >
                    <span
                      className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700
          hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center
          justify-center hover:text-textGreen cursor-pointer
          hover:-translate-y-2 transition-all duration-300"
                    >
                      <SlSocialTwitter />
                    </span>
                  </motion.a> */}
                </div>
                </div>
                <motion.a 
                  initial={{ y:20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay:1.5, ease: "easeIn"}}
                  className="text-sm w-72 tracking-widest text-textGreen text-center mt-4"
                  href="mailto:blesschinedumobika@gmail.com">
                    blesschinedumobika@gmail.com
                </motion.a>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
