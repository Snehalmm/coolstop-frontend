import React from "react";
import Features from "../components/Home/Features";
import PendingOrderTable from "../components/Product/PendingOrderTable";
import Breadcrumbs from "../components/Common/Breadcrumbs";
import { paidOrderBreadcrums } from "../utils/data/breadcrumbs";

const paid_orders = () => {
  return (
    <>
      <Breadcrumbs data={paidOrderBreadcrums} />
      <PendingOrderTable />
      <Features />
    </>
  );
};

export default paid_orders;
