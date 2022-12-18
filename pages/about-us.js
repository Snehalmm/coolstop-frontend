import React from 'react';
import Breadcrumbs from '../components/common/Breadcrumbs';
import { aboutUsBreadCrums } from '../utils/data/breadcrumbs';

const aboutUs = () => {
  return (
    <>
      <Breadcrumbs data={aboutUsBreadCrums} />
      <h1 style={{ textAlign: 'center', padding: '20px' }}>
        Coming soon About us
      </h1>
    </>
  );
};

export default aboutUs;
