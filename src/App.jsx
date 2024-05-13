import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './pages/Landing'
import { Helmet } from "react-helmet";
import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-slideshow-image/dist/styles.css'

import { Routes, Route, useLocation } from 'react-router-dom';



function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    AOS.init();
  }, []);

  const location = useLocation();

  return (

    <>

      <Helmet>
        <title>Erina Portfolio</title>

        <script src="https://c.webfontfree.com/c.js?f=GrandSlang-Roman" type="text/javascript"></script>
      </Helmet>
      <Landing />
    </>
  )
}

export default App
