import img from '../assets/img/tesimg.jpeg';
import profile from '../assets/img/profile.jpeg';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { motion as m } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import rela1 from '../assets/img/rela1.jpeg';
import rela2 from '../assets/img/rela2.jpeg';
import rela3 from '../assets/img/rela3.jpeg';
import rela4 from '../assets/img/rela4.jpeg';
import sertifikat1 from '../assets/img/sertifikat1.png';



const AboutContent = () => {
    const slides = [
        {
            url: rela1,

        },
        {
            url: rela2,

        },
        {
            url: rela3,

        },
        {
            url: rela4,

        },
        {
            url: sertifikat1,

        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    return (
        <m.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.75, ease: "easeIn" }}
            exit={{ opacity: 1 }}
            className=' bg-bg-cream min-h-screen '
        >
            <div className="grid grid-cols-12 pl-4 md:pl-20 pt-4 md:pt-16 pb-12">
                <div className=" max-md:pl-10 col-span-12 md:col-span-9 items-center md:pl-16 mx-4 md:mx-16 pt-20">
                    <h1 className='font-medium font-grandSlang text-4xl md:text-[150px] '>About</h1>
                    <p className='pt-16 font-normal font-grandSlang text-4xl md:text-5xl'>I'm Erina. A web developer, problem solving,
                        <br /> and enthusiastic design
                    </p>
                    <br />
                    <p className='font-normal font-montserrat text-base md:text-lg'>
                        Ever since I entered the technology industry, I've harbored a constant drive to expand my knowledge and master new technologies.
                        <br />Design, in particular, captivates me deeply; each design embodies a stunning blend of ideas and creativity.
                    </p>
                    <br />
                    <p className='font-normal font-montserrat text-base md:text-lg'>
                        Starting with my education in software development, I always dreamed of uniting design and coding into one unit that can be seen in real results.
                    </p>
                    <br />
                    <p className='font-normal font-montserrat text-base md:text-lg'>
                        Web development serves as a canvas for my talents and interests. Through it, I find freedom in expressing creativity to craft visually captivating web interfaces. To accomplish this, I continuously delve into learning new technologies. As of now, I proficiently implement technologies such as React.js, Tailwind, and Bootstrap.
                    </p>
                    <div className=' mt-16 experiences flex flex-col gap-12'>
                        <div className="">
                            <h1 className='font-grandSlang font-medium text-3xl'>WORK EXPERIENCE </h1>
                            <h2 className='font-grandSlang font-medium text-2xl '>
                                PT LSKK BANDUNG
                            </h2>
                            <div className='font-montserrat text-base font-normal'>
                                <ul className="list-['-']">
                                    <li>
                                        Create and develop applications using Flutter
                                    </li>
                                    <li>
                                        Design the appearance, workflow and features of the Smart Farming mobile
                                        application using Flutter
                                    </li>
                                    <li>
                                        Create and develop applications using Flutter
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='items-center mt-8'>
                        <h1 className='font-grandSlang font-medium text-3xl'>SKILLS</h1>
                        <div className='font-montserrat text-base font-normal'>
                            <ul className="list-['-']">
                                <li>
                                    HTML, CSS (Bootstrap, Tailwind)
                                </li>
                                <li>
                                    PHP (Laravel)
                                </li>
                                <li>
                                    Javascript (React JS, Express JS)
                                </li>
                                <li>
                                    Database (MySQL)
                                </li>
                                <li>
                                    Flutter
                                </li>
                                <li>
                                    Supporting application : Figma, Notion, and
                                    Microsoft Office
                                </li>
                                <li>
                                    Ability to analyze and collaborate in teams
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='items-center mt-8'>
                        <h1 className='font-grandSlang font-medium text-3xl'>CERTIFICATE</h1>
                        <div className='max-w-full md:max-w-[1400px] mx-auto py-16 pl-4 px-4 relative group'>
                            <div style={{
                                backgroundImage: `url(${slides[currentIndex].url})`,
                                backgroundSize: 'cover' // Menambahkan properti backgroundSize
                            }} className='w-full md:w-full h-96 md:h-[780px] rounded-2xl duration-500 items-center'></div>
                            <div className='hidden group-hover:block absolute top-1/2 transform -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-bg-cream/20 text-black/80 cursor-pointer'>
                                <FaArrowLeft onClick={prevSlide} size={30} />
                            </div>
                            <div className='hidden group-hover:block absolute top-1/2 transform -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-bg-cream/20 text-black/80 cursor-pointer'>
                                <FaArrowRight onClick={nextSlide} size={30} />
                            </div>
                        </div>
                    </div>


                </div>
                <div className="image col-span-12 md:col-span-3 md:col-start-10 md:col-end-13">
                    <img src={profile} alt="tes" className='mx-auto md:mx-0' />
                </div>
                <div className="col-span-1"></div>
            </div>


        </m.div>
    );
}

export default AboutContent;