'use client'
import Navbar from "@/components/Navbar";
import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
import { motion } from "framer-motion";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Project from "@/components/Project";
import Archive from "@/components/Archive";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function Home() {
  return (
<>
    <main className="w-full h-screen font-bodyFont bg-bodyColor1 text-textLight 
    overflow-x-hidden overflow-y-scroll">
      <Navbar />
      <div className="w-full h-[88vh] mdl:flex items-center gap-20 justify-between">
        <motion.div 
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{delay:1.5}}
        className="hidden mdl:inline-flex w-32 h-full fixed left-0 bottom-0">
          <LeftSide />
        </motion.div>

        <div className="h-[88vh] w-[80%] mx-auto p-4">
          <Banner />
          <About />
          <Experience />
          <Project />
          <Archive />
          <Contact />
          <Footer />

        </div>
        <motion.div 
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{duration:1.5}}
        className="hidden mdl:inline-flex w-32 h-full fixed right-0 bottom-0">
          <RightSide />
        </motion.div>

      </div>
      </main>
</>
  );
}
