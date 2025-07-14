import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/Sharad/Navbar/Navbar';
import Footer from '../pages/Sharad/Footer/Footer';

const RootLayout = () => {
    return (
        <div>

            <Navbar></Navbar>
          <Outlet></Outlet>  
          <Footer></Footer>
        </div>
    );
};

export default RootLayout;