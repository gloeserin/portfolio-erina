import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { motion as m } from 'framer-motion';

const WorkContent = () => {
  const data = {
    work: [
      {
        title: 'PPDB WEB APP',
        description: 'Fullstack Developer'
      },
      {
        title: 'Smart Farming Mobile App & Web',
        description: 'Frontend & Backend Developer',
        link: 'https://smart-farming-five.vercel.app/'
      },
      {
        title: 'Infaq Web App',
        description: 'Backend Developer',
        link: '/infaq'
      },
      {
        title: 'E-Library Web App',
        description: 'Fullstack Developer',
        link: '/library'
      },
      {
        title: 'Masjid Al-Ikram Wikrama',
        description: 'Frontend Developer',
        link: 'https://alikramwikrama.id/'
      },
    ]
  }

  let items = []

  for (let i = 0; i < data.work.length; i++) {
    let linkComponent = <h1 className='text-3xl max-md:text-xl max-md:max-w-[200px]  group-hover:italic font-bold font-grandSlang'>{data.work[i].title}</h1>;
    if (data.work[i].link) {
      linkComponent = <Link to={data.work[i].link} rel="noopener noreferrer">{linkComponent}</Link>;
    }
    items.push(
      <div key={i} className='work-item group flex justify-between  md:gap-5 py-4 border-y-2 border-white'>
        <div className='italics'>
          {linkComponent}
          <p> - {data.work[i].description}</p>
        </div>
        <h2 className='max-md:text-xl text-4xl font-bold font-grandSlang max-md:pr-8'>0{i + 1}</h2>      </div>
    )
  }

  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeIn" }}
      exit={{ opacity: 1 }}
      className='bg-bg-black min-h-screen'
    >
      <div className='text-white md:pl-20 grid max-md:grid-cols-1 grid-cols-12 pb-20 pt-36 pl-20'>
        <div className='col-span-4 '>
          <h1 className='text-5xl font-bold font-grandSlang'>Work</h1>
          <p>Web Developer & Mobile Developer</p>
        </div>
        <div className='col-span-8 md:-my-24 my-10 max-md:col-span-1 works flex flex-col md:px-40'>
          {items} 
        </div>
      </div>
    </m.div>
  )
}

export default WorkContent;
