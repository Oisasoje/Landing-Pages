"use client";
import { motion, AnimatePresence } from "framer-motion";

import { Anton, Oswald, Kanit } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "400", "600", "700"],
});
const kanit = Kanit({ subsets: ["latin"], weight: ["400"] });
const anton = Anton({ subsets: ["latin"], weight: ["400"] });

const Landing_Page = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!isMounted) return null;

  return (
    <div
      className={`w-full h-screen pt-7 relative ${anton.className} overflow-x-hidden`}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`inset-0 w-full min-h-screen fixed bg-black/35 ${kanit.className}`}
            onClick={() => setIsOpen(false)}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="flex relative w-full min-h-screen flex-col justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="border-8 relative p-8 flex flex-col text-center items-center w-[800px] max-w-[90%] bg-white border-slate-300">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-xl cursor-pointer absolute top-0 bg-black text-white border-3 border-slate-300 shadow-2xl shadow-black -right-3 w-8 h-8 rounded-full"
                >
                  X
                </button>
                <h2 className="text-3xl mb-5">
                  Enter Your Info To Access The Training On-Demand
                </h2>

                <div className="flex gap-5 mt-4 md:w-[80%] w-[90%] flex-col">
                  <input
                    type="text"
                    placeholder="First Name*"
                    className="bg-[#E9ECEF] outline-none py-3 px-3 rounded-md"
                  />
                  <input
                    type="email"
                    placeholder="Email*"
                    className="bg-[#E9ECEF] outline-none rounded-md py-3 px-3"
                  />
                  <button
                    onClick={() => setIsOpen(true)}
                    className="bg-green-600 py-3 text-white hover:bg-green-500 cursor-pointer rounded-md shadow-2xs shadow-black text-2xl"
                  >
                    Start The Training
                  </button>

                  <div className="flex justify-center items-center mt-5 pb-10 gap-4 flex-wrap">
                    <p className="text-blue-500 cursor-pointer">
                      Privacy Policy
                    </p>
                    <p className={`${kanit}`}>|</p>
                    <p className="text-blue-500 cursor-pointer">
                      Terms of Service
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex w-full flex-col items-center">
        <h3 className="text-[21px] tracking-wide text-center">
          Introducing a Brand New Training Built Exclusively...
        </h3>

        <h1
          className={`md:text-4xl text-3xl  md:leading-15 leading-10 mt-2 tracking-wide md:tracking-wider text-center w-[800px] max-w-[90%]`}
        >
          <span> For Men Who Want to Lose</span>{" "}
          <span className="text-green-500">
            15<span>+</span> Pounds
          </span>{" "}
          and Feel Like Themselves Again in{" "}
          <span className="text-green-500">Just 90 Days</span>
        </h1>

        <h3 className={`text-lg font-extrabold ${kanit.className} text-center`}>
          The Fastest Way to Get Back in Shape Without Losing Time, Freedom, or
          Sanity
        </h3>

        <div
          className="max-w-[90%] cursor-pointer shadow-lg shadow-black mt-5"
          onClick={() => setIsOpen(true)}
        >
          <Image
            src="/assets/vid-thumb.gif"
            unoptimized
            alt="gif"
            width={200}
            height={200}
            className="w-full object-cover"
          />
        </div>

        <button
          className="mt-13 text-3xl text-white bg-green-700 shadow-md shadow-black px-10 md:px-[50px] py-3 cursor-pointer hover:bg-green-600"
          onClick={() => setIsOpen(true)}
        >
          Show Me How {">>"}{" "}
        </button>

        {/* Text block moved before second image */}
        <div
          className={`${kanit.className} flex flex-col gap-4 text-xl mt-10 w-[500px] max-w-[90%]`}
        >
          <h2 className={`text-center font-bold md:text-4xl text-2xl`}>
            Here&apos;s What You Will Learn In This Training...
          </h2>
          <p>
            <span className="font-bold">Secret 1:</span> The exact 3 step system
            I&apos;ve used to help 200+ men drop 15-80 pounds, build strength,
            and reclaim their discipline.
          </p>
          <p>
            <span className="font-bold">Secret 2:</span> Why restrictive diets
            and long workouts fail men with real jobs, families, and
            responsibilities.
          </p>
          <p>
            <span className="font-bold">Secret 3:</span> How to train just 2-4
            days a week and still see better results than ever with more energy.
          </p>
          <p>
            <span className="font-bold">Secret 4:</span> How to eat for fat loss
            without giving up carbs or family dinners and still enjoy weekends
            and travel.
          </p>
          <p>
            <span className="font-bold">Secret 5:</span> The structure, support,
            and accountability system that guarantees you never fall off even
            during your busiest weeks.
          </p>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap gap-10 md:gap-20 mt-10 w-full justify-center">
          <div className="flex flex-col items-center">
            <div className="rounded-lg shadow-lg shadow-black md:flex-1 overflow-hidden w-[300px] md:max-w-[90%]">
              <Image
                src="/assets/schober.webp"
                width={200}
                height={200}
                alt="Bailey Schober"
                unoptimized
                className="w-full object-cover"
              />
            </div>
            <span className="flex mt-2 flex-col items-center">
              <span
                className={` text-xl md:text-2xl font-semibold ${oswald.className}`}
              >
                Your Host:
              </span>
              <span className="text-xl md:text-2xl">Bailey Schober</span>
            </span>
          </div>
        </div>

        <div className="flex flex-col mb-5 mt-4 gap-3 items-center">
          <p className="tracking-wide mt-5 text-2xl text-center">
            Click On The Button Below To Get Started{" "}
          </p>
          <button
            className="mt-5 text-3xl text-white bg-green-700 shadow-md shadow-black px-10 md:px-[50px] text-center py-3 cursor-pointer hover:bg-green-600"
            onClick={() => setIsOpen(true)}
          >
            Get Instant Access {">>"}{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing_Page;
