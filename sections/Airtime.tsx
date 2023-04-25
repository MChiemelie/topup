'use client';

import {motion } from 'framer-motion';
import { airtimeContainer, airtimeItem, navVariants, textVariant, textVariant2 } from "../utils/motion";
import Image from 'next/image';
import mtn from "../public/mtn.jpg";
import airtel from "../public/airtel.jpg";
import glo from "../public/glo.jpg";
import _9moblie  from "../public/9mobile.jpg";


const Airtime: React.FC = () => {
  return (
    <>
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: .9}}
      className='flex px-4 gap-4 mx-1 justify-around md:m-12'>
    <div
    className='items-center p-auto'>
    <motion.h1
      variants={textVariant(1.5)}
      className='my-8 font-sans font-bold text-sky-100 
      leading-normal tracking-wide
      text-2xl md:text-5xl sm:lg 2xl:text-6xl'
      >Buy airtime</motion.h1>
      <motion.p
      variants={textVariant2}
      className="
      font-sans w-96
      text-sky-100 text-xl text-left
      md:text-xl
      sm:w-24 sm:text-base
      2xl:text-3xl"
      >Recharge all your favourite networks at very discounted prices.
      </motion.p>
    </div>
    <motion.div
      variants={airtimeContainer}
      initial='hidden'
      animate='visible'
      className='flex items-center'
      >
        <motion.div
          variants={airtimeItem}
          className='grid grid-rows-2 grid-flow-col  gap-2 sm:w-48'>
           <Image src={mtn} alt='mtn' className='rounded hover:scale-75 sm:w-56 md:72 2xl:w-48'/>
           <Image src={glo} alt='glo' className='rounded hover:scale-75 sm:w-56 md:72 2xl:w-48'/>
           <Image src={airtel} alt='airtel'className='rounded hover:scale-75 sm:w-56 md:72 2xl:w-48'/>
           <Image src={_9moblie} alt='9moblie' className='rounded hover:scale-75 sm:w-56 md:36 2xl:w-48'/>
        </motion.div>
    </motion.div>
    </motion.div>
    </>
  );
};

export default Airtime;