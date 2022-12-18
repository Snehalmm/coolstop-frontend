import { useEffect } from "react";
import ProgressBar from "../components/common/ProgressBar";
import DeliveryAddressTable from "../components/Product/DeliveryAddressTable";
import Features from "../components/home/Features";
import Breadcrumbs from "../components/common/Breadcrumbs";
import { checkoutBreadcrums } from "../utils/data/breadcrumbs";
import CheckoutForm from "../components/Product/CheckoutForm";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { getFromStorage } from "../utils/storage";

const checkout = () => {
  const router = useRouter;
  const progressBarData = [
    {
      id: 1,
      title: "Delvery",
      status: "active",
    },
    {
      id: 2,
      title: "Payment",
      status: "todo",
    },
    {
      id: 3,
      title: "Confirmation",
      status: "todo",
    },
  ];
  let getAddress;
  useEffect(() => {
    getAddress = getFromStorage("billingaddress");
  }, []);

  if (getAddress) {
    router.push("/cart");
  }
  return (
    <>
      <NextSeo title="Checkout" description="Some content " />
      <Breadcrumbs data={checkoutBreadcrums} />
      <ProgressBar data={progressBarData} />
      <CheckoutForm />
      <DeliveryAddressTable />
      <Features />
    </>
  );
};

export default checkout;
