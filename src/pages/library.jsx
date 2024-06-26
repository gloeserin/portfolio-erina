import React, { useState } from 'react';
import 'react-slideshow-image/dist/styles.css';
import NavbarWork from '../components/NavbarWork';
import { Carousel } from "@material-tailwind/react";
import '../index.css';
import { motion as m } from 'framer-motion';
import { TECarousel, TECarouselItem } from "tw-elements-react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import tes1 from '../assets/img/tes1.png';
import tes2 from '../assets/img/tes2.png';
import tes3 from '../assets/img/tes3.png';
import tes4 from '../assets/img/tes4.png';
import tes5 from '../assets/img/tes5.png';
import tes6 from '../assets/img/tes6.png';
import tes7 from '../assets/img/tes7.png';
import tes10 from '../assets/img/tes10.png';
import tes11 from '../assets/img/tes11.png';
import tes12 from '../assets/img/tes12.png';
import tes13 from '../assets/img/tes13.png';
import tes14 from '../assets/img/tes14.png';
import tes15 from '../assets/img/tes15.png';
import tes16 from '../assets/img/tes16.png';
import tes17 from '../assets/img/tes17.png';
import tes18 from '../assets/img/tes18.png';
import login from '../assets/img/login.png'

const Library = () => {
    const slides = [
        {
            url: login,

        },
        {
            url: tes2,

        },
        {
            url: tes3,

        },
        {
            url: tes4,

        },
        {
            url: tes5,

        },
        {
            url: tes6,

        },
        {
            url: tes7,

        },
        {
            url: tes10,

        },
        {
            url: tes11,

        },
        {
            url: tes12,

        },
        {
            url: tes13,

        },
        {
            url: tes14,

        },
        {
            url: tes15,

        },
        {
            url: tes16,

        },
        {
            url: tes17,

        },
        {
            url: tes18,

        },
        {
            url: tes1,

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
        <>
            <NavbarWork />
            <m.div
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.75, ease: "easeIn" }}
                exit={{ opacity: 1 }}
                className='bg-bg-black px-4 md:px-16 min-h-screen'
            >
                <div className='pt-16 md:pt-36 pb-4 md:pb-0 px-4 md:px-12 h-100vh w-full flex justify-center items-center bg-bg-cream'>
                    <div className='h-95vh flex justify-center items-center pt-20'>
                        <h1 className='text-4xl md:text-8xl font-bold font-grandSlang text-center'>E-Library</h1>
                    </div>
                </div>
                <div className='max-w-full px-4 md:px-12 pt-8 md:pt-32'>
                    <div className='work-container pb-16 md:pb-0'>
                        <p className='max-w-full md:max-w-3/4 mx-auto font-grandSlang text-white text-lg md:text-5xl font-light leading-tight text-center md:text-center'>This project is an online library where officers and administrators can upload books and users can borrow automatically.</p>
                        <div className='work-details max-w-full md:max-w-3/4 mx-auto pt-8 md:pt-14'>
                            <div className='grid grid-cols-3 justify-center md:justify-start'>
                                <div className='w-full sm:w-1/3 md:w-auto mb-4 sm:mb-0 ml-20 max-md:ml-4 items-center flex flex-col'>
                                    <div className='text-white pt-6 pb-2 font-montserrat text-xs font-semibold text-center s md:text-left'>ROLE</div>
                                    <p className='max-w-full ml-auto mr-auto sm:ml-0 sm:mr-0 text-white font-montserrat text-base font-normal leading-9 text-center max-md:text-left'>Fullstack Developer</p>
                                </div>
                                <div className='w-full sm:w-1/3 md:w-auto mb-4 sm:mb-0 gap-6 items-center flex flex-col max-md:ml-5'>
                                    <div className='text-white pt-6 pb-2 font-montserrat text-xs font-semibold text-center md:text-left'>FRAMEWORK & DATABASE</div>
                                    <p className='max-w-full ml-auto mr-auto sm:ml-0 sm:mr-0 text-white font-montserrat text-base font-normal leading-9 text-center max-md:text-left'>React Js, Express Js, MYSQL</p>
                                </div>
                                <div className='w-full sm:w-1/3 md:w-auto max-md:ml-5 ml-14 items-center text-center flex flex-col'>
                                    <div className='text-white pt-6 pb-2 font-montserrat text-xs font-semibold text-center md:text-left'>STATUS</div>
                                    <p className='max-w-full ml-auto mr-auto sm:ml-0 sm:mr-0 text-white font-montserrat text-base font-normal leading-9 text-center max-md:text-left'>completed, not yet hosted to the public domain</p>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className='items-center mt-8'>
                    <div className='max-w-full md:max-w-[800px] md:max-h-[600px] mx-auto py-16 pl-4 px-4 relative group'>
                        <div style={{
                            backgroundImage: `url(${slides[currentIndex].url})`,
                            backgroundSize: 'cover' // Menambahkan properti backgroundSize
                        }} className='w-full md:w-full h-72 md:h-[500px] rounded-2xl duration-500 items-center'></div>
                        <div className='hidden group-hover:block absolute top-1/2 transform -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-bg-cream/20 text-black/80 cursor-pointer'>
                            <FaArrowLeft onClick={prevSlide} size={30} />
                        </div>
                        <div className='hidden group-hover:block absolute top-1/2 transform -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-bg-cream/20 text-black/80 cursor-pointer'>
                            <FaArrowRight onClick={nextSlide} size={30} />
                        </div>
                    </div>
                </div>
            </m.div>
        </>
    )
}




export default Library;