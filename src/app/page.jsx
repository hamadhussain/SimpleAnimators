"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className=" bgpage h-screen  text-black">
        <motion.h1
          animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
          transition={{
            duration: 5,
            delay: 0.3,
            ease: [0.5, 0.71, 1, 1.5],
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.2 }}
          style={{ position: "relative", top: "40px", left: "-42px" }}
          className="flex items-center justify-center h-6 py-10 md:py-20 text-center  text-2xl md:text-3xl font-extrabold font-serif"
        >
          Click One Of Them
        </motion.h1>
        <div className="sdsd flex flex-col md:flex-row items-center justify-center h-screen space-y-10 md:space-y-0 md:space-x-20">
          <Link href="/Components/Animal">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                opacity: 1,
              }}
              whileHover={{ scale: 1.1 }}
              className="mb-5 md:mb-0"
            >
              <img className="pikachuu" src="" alt="" />
            </motion.div>
          </Link>
          <Link href="/Components/Bird">
            <motion.div
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0 }}
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                opacity: 1,
              }}
              className=""
            >
              <img className="birdd" src="" alt="" />
            </motion.div>
          </Link>
        </div>
      </div>
    </>
  );
}
