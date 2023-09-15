"use client";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24
    flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-textGreen"
      >
        HI THERE 👋🏾 I&apos; M
      </motion.h3>

      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-5xl font-titleFont font-semibold flex flex-col"
      >
        Bless C. Obika.
        <span className="text-textDark mt-2 lgl:mt-4">
          A Creative Frontend Developer.
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        {" "}
        My technical expertise spans HTML5, CSS3, JavaScript, ReactJS, VueJS,
        TailwindCSS, MySQL, PostgreSQL, RESTful APIs, Git. I pride myself on
        crafting user-centric solutions while maintaining a strong focus on
        functionality and design. Beyond my technical prowess, I’m known for
        fostering collaborative environments, providing clear direction, and
        remaining open to feedback. I thrive in dynamic settings and am eager to
        contribute my expertise to a forward-thinking team. <br />{" "}
        <a href="https://obikadev.netlify.app" target="_blank">
          <span
            className="text-textGreen inline-flex relative cursor-pointer h-7
             overflow-x-hidden group"
          >
            Learn More
            <span
              className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1
              -translate-x-[110%] group-hover:translate-x-0 transition-transform
               duration-500"
            ></span>
          </span>
        </a>
      </motion.p>
      <a href="mailto:blesschinedumobika@gmail.com" target="_blank">
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="w-52 h-14 text-sm font-titleFont border border-textGreen
          rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
        >
          Hire Me!
        </motion.button>
      </a>
    </section>
  );
};

export default Banner;
