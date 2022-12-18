import { useEffect } from "react";
import Features from "../components/home/Features";
import PendingOrderTable from "../components/Product/PendingOrderTable";
import Breadcrumbs from "../components/common/Breadcrumbs";
import { paidOrderBreadcrums } from "../utils/data/breadcrumbs";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { Path } from "../utils/apiService";
import { userActions } from "../stores/slices/userSlice";
import { useSelector, useDispatch } from "react-redux";
import useGetApi from "../utils/useGetApi";
import { getFromStorage } from "../utils/storage";

const PaidOrders = () => {
  const router = useRouter();

  const dispatch = useDispatch();
  useEffect(() => {
    let getUserDetails = getFromStorage("userDetails");
    dispatch(userActions.adduser(getUserDetails));
    router.push({
      href: "/paid-orders",
      query: `start=0&limit=${10}`,
    });
  }, []);
  const userDetails = useSelector((state) => state.user.userDetails);
  const emailId = userDetails?.user?.email;

  const {
    isLoading: getPaidOrderLoading,
    error: getPaidOrderError,
    data: getPaidOrderData,
    sendHTTPGetRequest: getPaidOrderApi,
  } = useGetApi();

  useEffect(() => {
    if (userDetails !== null && Object.keys(userDetails)?.length > 0) {
      getPaidOrderApi(
        `${Path.order}?filters[emailId][$eq]=${emailId}&filters[paymentStatus][$eq]=paid`,
        userDetails.jwt
      );
    }
  }, [userDetails]);

  return (
    <>
      <NextSeo title="Paid Orders" description="Some content " />
      <Breadcrumbs data={paidOrderBreadcrums} />
      <PendingOrderTable
        isLoading={getPaidOrderLoading}
        pendingData={getPaidOrderData?.data}
        pageName={router.pathname}
      />
      <Features />
    </>
  );
};

export default PaidOrders;

// export async function getServerSideProps() {
//   const res = await fetch(
//     `${serverUrl}${Path.order}?filters[emailId][$eq]=bavcter@gmail.com`,
//     {
//       headers: {
//         Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzQsImlhdCI6MTY3MTAwNTk4MCwiZXhwIjoxNjczNTk3OTgwfQ.XdxLPi_LRddNeOXPPWhOverjPuCUvub_elRtiyCgBWM`,
//       },
//     }
//   );
//   const paidOrders = await res.json();

//   return {
//     props: { paidOrdersData: paidOrders },
//   };
// }
