import React from 'react';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';

const LayOut = () => {
    return (
      <>
        <Header />
        <main className="">
          <Outlet />
        </main>
        <Footer></Footer>
      </>
    );
}

export default LayOut;
