import React from 'react';
import Breadcrumbs from '../components/Common/Breadcrumbs';
import Features from '../components/Home/Features';
import PendingOrderTable from '../components/Product/PendingOrderTable';
import { pendingOrderBreadcrums } from '../utils/data/breadcrumbs';

const PendingOrders = () => {
  return (
    <>
      <Breadcrumbs data={pendingOrderBreadcrums} />
      <PendingOrderTable />
      <Features />
    </>
  );
};

export default PendingOrders;
