import React, { useState, useEffect } from 'react'
import { motion as m } from 'framer-motion'
import NavbarContent from '../components/NavbarContent'
import AboutContent from '../components/AboutContent'

export default function About() {
  return (
    <>
      <NavbarContent />
      <m.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 1 }}
        className=' bg-bg-cream absolute top-0 left-0 min-h-screen'>
        <AboutContent />

      </m.div>
    </>

  )
}
