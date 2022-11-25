import React from 'react';
import Head from 'next/head';
import Footer from '../components/Common/Footer';
import Header from '../components/Common/Header';

const Main = ({ children, title = 'Cool Stop' }) => {
  return (
    <div className="layout-container">
      <Head>
        <title>{title}</title>
      </Head>

      <Header />
      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default Main;
