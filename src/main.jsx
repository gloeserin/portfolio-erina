import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; import App from './App.jsx'
import './index.css'
import React, { useRef, useEffect, useState } from 'react';
import About from './pages/About.jsx';
import Work from './pages/Work.jsx';
import Infaq from './pages/Infaq.jsx';
import Library from './pages/library.jsx';
import { AnimatePresence } from 'framer-motion';
import NavbarContent from './components/NavbarContent.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <AnimatePresence initial={false} mode={'wait'}>
        <App />
      </AnimatePresence>,
  },
  {
    path: "/About",
    element:
  
        <AnimatePresence>
          <About />
        </AnimatePresence>
  
  },
  {
    path: "/Work",
    element:
      <AnimatePresence initial={false} wait={'wait'}>
        <Work />,
      </AnimatePresence>
  },
  {
    path: "/Infaq",
    element:
      <AnimatePresence initial={false} wait={'wait'}>
        <Infaq />,
      </AnimatePresence>
  },
  {
    path: "/library",
    element:
      <AnimatePresence initial={false} wait={'wait'}>
        <Library />,
      </AnimatePresence>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

