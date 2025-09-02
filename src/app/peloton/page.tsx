"use client";

import { Inter, Nunito, Poppins } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
});

const Landing_Page = () => {
  return (
    <div className="bg-white md:max-h-screen  md:overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
        {/* LEFT IMAGE */}
        <div className="relative h-[50vh] md:h-screen">
          <Image
            src="/assets/peloton2.webp"
            fill
            alt="some text"
            unoptimized
            className="object-cover"
          />

          <div
            className={`inset-0 absolute pt-3 flex justify-center ${nunito.className}`}
          >
            <p className="uppercase font-bold text-3xl lg:text-5xl text-black tracking-widest">
              Peloton
            </p>
          </div>
          <div
            className={`absolute -right-10 lg:-right-20 top-1/2 -translate-y-1/2 ${nunito.className}`}
          >
            <p className="text-3xl lg:text-5xl font-bold uppercase tracking-widest text-black rotate-90 origin-center">
              Peloton
            </p>
          </div>
          <div
            className={`absolute w-full flex justify-center items-center pt-[100px] md:pt-[60px] lg:pt-[120px] text-white h-full`}
          >
            <motion.button
              className="border-white border-4 text-xl lg:text-3xl md:shadow-black md:shadow-2xl  font-semibold px-5 lg:px-[35px] py-2 lg:py-3 text-shadow-2xs will-change-transform transform-gpu text-shadow-black cursor-pointer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.8 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              Try The App Free
            </motion.button>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div
          className={`h-[50vh] md:h-auto lg:h-screen pt-3 text-center flex flex-col justify-center items-center w-full`}
        >
          <div
            className={`border-2 md:mt-0 mt-70 border-red-500 p-5 flex w-full max-w-[400px] flex-col ${nunito.className}`}
          >
            <h3 className="text-red-500 text-2xl lg:text-2xl tracking-wider text-nowrap font-bold pb-2">
              Peloton App MemberShip
            </h3>
            <p className="text-lg">
              Use the Peloton App to access thousands of classes and train with
              equipment or none at all on your phone, tablet, TV and web.
            </p>
            <span>
              <p className="text-red-500 pt-3 font-bold text-3xl lg:text-2xl">
                $12.99/mo
              </p>
              <p className="text-slate-700">No Peloton hardware required</p>
            </span>
          </div>
          <div
            className={`flex mt-5 flex-col border-b-2 w-full pb-2  max-w-[400px] ${nunito.className}`}
          >
            <h3 className="font-extrabold text-2xl">
              Peloton All-Access Membership
            </h3>
            <p className="text-lg lg:text-lg">
              Get the most value-packed Peloton membership for the whole
              household with Peloton Bike or Tread.
            </p>
            <p className="font-bold pt-3 text-3xl lg:text-2xl">$39/mo</p>
          </div>
          <div className={`mt-2 pb-5 ${nunito.className}`}>
            <h4 className="text-red-500 text-xl lg:text-lg font-bold">
              Endless Ways To Stay Inspired
            </h4>
            <ul className="flex mt-1 flex-col gap-2 font-bold text-lg lg:text-xl">
              <li>LIVE DAILY CLASSES</li>
              <li>WORLD-CLASS INSTRUCTORS</li>
              <li>CURATED TRAINING PROGRAMS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landing_Page;
