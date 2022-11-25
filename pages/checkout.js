import React from 'react';
import ProgressBar from '../components/common/ProgressBar';
import DeliveryAddressTable from '../components/Product/DeliveryAddressTable';
import Features from '../components/Home/Features';
import Breadcrumbs from '../components/common/Breadcrumbs';
import { checkoutBreadcrums } from '../utils/data/breadcrumbs';
import CheckoutForm from '../components/Product/CheckoutForm';

const checkout = () => {
  const progressBarData = [
    {
      id: 1,
      title: 'Delvery',
      status: 'active',
    },
    {
      id: 2,
      title: 'Payment',
      status: 'todo',
    },
    {
      id: 3,
      title: 'Confirmation',
      status: 'todo',
    },
  ];

  return (
    <>
      <Breadcrumbs data={checkoutBreadcrums} />
      <ProgressBar data={progressBarData} />
      <CheckoutForm />
      <DeliveryAddressTable />
      <Features />
    </>
  );
};

export default checkout;
