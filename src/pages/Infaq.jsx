import React, { useState } from 'react';
import 'react-slideshow-image/dist/styles.css';
import NavbarWork from '../components/NavbarWork';
import { motion as m } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import admin1 from '../assets/img/admin1.png';
import admin2 from '../assets/img/admin2.png';
import admin3 from '../assets/img/admin3.png';
import admin4 from '../assets/img/admin4.png';
import admin5 from '../assets/img/admin5.png';
import user1 from '../assets/img/user1.png';
import user2 from '../assets/img/user2.png';
import user3 from '../assets/img/user3.png';
import user4 from '../assets/img/user4.png';
import user5 from '../assets/img/user5.jpg';

const Infaq = () => {
    const slides = [
        { url: admin1 },
        { url: admin2 },
        { url: admin3 },
        { url: admin4 },
        { url: admin5 },
        { url: user1 },
        { url: user2 },
        { url: user3 },
        { url: user4 },
        { url: user5 },
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
                        <h1 className='text-4xl md:text-8xl font-bold font-grandSlang text-center'>Infaq</h1>
                    </div>
                </div>
                <div className='max-w-full px-4 md:px-12 pt-8 md:pt-32'>
                    <div className='work-container pb-16 md:pb-0'>
                        <p className='max-w-full md:max-w-3/4 mx-auto font-grandSlang text-white text-xl md:text-5xl font-light leading-tight text-center md:text-center'>This project is an automatic transaction application for payment of infaq bills used by all administration and students of SMK Wikrama Bogor.</p>
                        <div className='work-details max-w-full md:max-w-3/4 mx-auto pt-8 md:pt-14'>
                            <div className='flex flex-wrap justify-center md:justify-start'>
                                <div className='w-full sm:w-1/3 md:w-auto mb-4 sm:mb-0 ml-12'>
                                    <div className='text-white pt-6 pb-2 font-montserrat text-xs font-semibold text-center md:text-left'>ROLE</div>
                                    <p className='max-w-full ml-auto mr-auto sm:ml-0 sm:mr-0 text-white font-montserrat text-base font-normal leading-9 text-center md:text-left'>Backend Developer & Frontend Developer</p>
                                </div>
                                <div className='w-full sm:w-1/3 md:w-auto mb-4 sm:mb-0 gap-6 max-md:ml-5 ml-30  '>
                                    <div className='text-white pt-6 pb-2 font-montserrat text-xs font-semibold text-center md:text-left'>FRAMEWORK & DATABASE</div>
                                    <p className='max-w-full ml-auto mr-auto sm:ml-0 sm:mr-0 text-white font-montserrat text-base font-normal leading-9 text-center md:text-left'>Laravel, MYSQL</p>
                                </div>
                                <div className='w-full sm:w-1/3 md:w-auto max-md:ml-5 ml-20'>
                                    <div className='text-white pt-6 pb-2 font-montserrat text-xs font-semibold text-center md:text-left'>STATUS</div>
                                    <p className='max-w-full ml-auto mr-auto sm:ml-0 sm:mr-0 text-white font-montserrat text-base font-normal leading-9 text-center md:text-left'>completed, not yet hosted to the public domain</p>
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




export default Infaq;