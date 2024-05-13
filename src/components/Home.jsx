import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import pdf from '../assets/pdf/cverin.pdf';
import { motion as m } from 'framer-motion';

const Home = () => {
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeIn" }}
      exit={{ opacity: 1 }}
      className=' bg-bg-cream h-screen '
    >
      <div className=" p-4 py-1 max-w-s mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-4">
          <div className="mx-8 py-20 pl-14">
            <div className="mx-16 md:py-60">
              <h1 className='text-lg font-montserrat font-medium tracking-widest relative w-[max-content] before:absolute before:inset-0 before:animate-typewriter 
before:bg-bg-cream
after:absolute after:inset-0 after:w-[0.125em] after:animate-caret
after:bg-black'>
                ERINA FEBRIANTI
              </h1>
              <br />
              <p className="max-w-56 font-montserrat font-light">
                Web Devloper / Frontend Developer / Backend Developor and Mobile Developer .

                dedicated to bringing about change in the tech industry by creating innovative solutions to everyday problems.
              </p>
            </div>
          </div>
          <div>
            <div className="text-start max-md:pr-1 pr-20 pb-52">
              <ul className="flex flex-col space-y-4 justify-self-start">
                <li className=''>
                  <Link to="/about">
                    <p href="" className="md:text-9xl text-4xl font-grandSlang font-medium italics">ABOUT</p>
                  </Link>
                </li>
                <li className=''>
                  <p href="#" className="md:text-9xl text-4xl font-grandSlang font-medium italics">CONTACT</p>
                </li>
                <li className=''>
                  <a href={pdf}>
                    <p href="#" className="md:text-9xl text-4xl font-grandSlang font-medium italics">MY CV</p>
                  </a>
                </li>
                <li className=''>
                  <Link to="/work">
                    <p href="#" className="md:text-9xl text-4xl font-grandSlang font-medium italics">WORK</p>
                  </Link>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>


      {/* <div className="w-3/5	h-screen flex flex-col justify-center">
        <nav className="text-start py-10 px-8">
          <div className="text-start pr-5">
            <a href="" className="text-lg font-grandSlang font-medium">Home</a>
          </div>
        </nav>
      </div> */}
    </m.div>
  )
}

export default Home;
