import Breadcrumbs from "../components/common/Breadcrumbs";
import Features from "../components/home/Features";
import PendingOrderTable from "../components/Product/PendingOrderTable";
import { pendingOrderBreadcrums } from "../utils/data/breadcrumbs";
import { NextSeo } from "next-seo";
import { Path } from "../utils/apiService";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../stores/slices/userSlice";
import { useEffect } from "react";
import useGetApi from "../utils/useGetApi";
import { getFromStorage } from "../utils/storage";

const PendingOrders = () => {
  const router = useRouter();

  const dispatch = useDispatch();
  useEffect(() => {
    let getUserDetails = getFromStorage("userDetails");
    dispatch(userActions.adduser(getUserDetails));

    router.push({
      href: "/pending-orders",
      query: `start=0&limit=${5}`,
    });
  }, []);
  const {
    isLoading: getpendingOrderLoading,
    error: getpendingOrderError,
    data: getpendingOrderData,
    sendHTTPGetRequest: getpendingOrderApi,
  } = useGetApi();
  const userDetails = useSelector((state) => state.user.userDetails);
  const emailId = userDetails?.user?.email;
  useEffect(() => {
    if (userDetails !== null && Object.keys(userDetails)?.length > 0) {
      getpendingOrderApi(
        `${
          Path.order
        }?filters[emailId][$eq]=${emailId}&filters[orderStatus][$eq]=pending&start=0&limit=${5}`,
        userDetails.jwt
      );
    }
  }, [userDetails]);

  return (
    <>
      <NextSeo title="Pending Orders" description="Some content " />
      <Breadcrumbs data={pendingOrderBreadcrums} />

      <PendingOrderTable
        isLoading={getpendingOrderLoading}
        pendingData={getpendingOrderData?.data}
        pageName={router.pathname}
      />
      <Features />
    </>
  );
};

export default PendingOrders;

// export async function getServerSideProps() {

//   // let userDetails = JSON.parse(localStorage.getItem("userDetails"));
//   const res = await fetch(
//     `${serverUrl}${Path.order}?filters[emailId][$eq]=bavcter@gmail.com`,
//     {
//       headers: {
//         Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzQsImlhdCI6MTY3MTAwNTk4MCwiZXhwIjoxNjczNTk3OTgwfQ.XdxLPi_LRddNeOXPPWhOverjPuCUvub_elRtiyCgBWM`,
//       },
//     }
//   );
//   const pendingOrder = await res.json();

//   return {
//     props: { pendingOrderData: pendingOrder },
//   };
// }
