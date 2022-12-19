import Features from "../components/Home/Features";
import PaymentDetails from "../components/Product/PaymentDetails";
import { paymentMethodBreadcrums } from "../utils/data/breadcrumbs";
import Breadcrumbs from "../components/Common/Breadcrumbs";
import ProgressBar from "../components/Common/ProgressBar";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { NextSeo } from "next-seo";

const PaymentMethod = () => {
  const router = useRouter();
  const progressBarData = [
    {
      id: 1,
      title: "Delvery",
      status: "done",
    },
    {
      id: 2,
      title: "Payment",
      status: "active",
    },
    {
      id: 3,
      title: "Confirmation",
      status: "todo",
    },
  ];

  useEffect(() => {
    router.beforePopState(({ as }) => {
      if (as !== router.asPath) {
        router.push("/products");
        return false;
      }
      return true;
    });

    return () => {
      router.beforePopState(() => true);
    };
  }, [router]);

  return (
    <>
      <NextSeo title="Payment Method" description="Some content " />
      <Breadcrumbs data={paymentMethodBreadcrums} />
      <ProgressBar data={progressBarData} />
      <PaymentDetails />
      <Features />
    </>
  );
};

export default PaymentMethod;
