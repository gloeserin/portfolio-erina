import React, { useState, useEffect } from 'react'
import { motion as m } from 'framer-motion'
import NavbarWork from '../components/NavbarWork'
import WorkContent from '../components/WorkContent'

export default function Work() {
    return (
        <>
            <NavbarWork />
            <m.div
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.75, ease: "easeOut" }}
                exit={{ opacity: 1 }}
                className=' bg-bg-black  absolute top-0 left-0 w-full h-full '>
                <WorkContent />
            </m.div>
        </>
    )
}
