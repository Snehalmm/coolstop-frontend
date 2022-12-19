import React, { useState, useEffect } from "react";
import useGetApi from "../utils/useGetApi";
import { useSelector } from "react-redux";
import Breadcrumbs from "../components/Common/Breadcrumbs";
import Features from "../components/Home/Features";
import AccountInfo from "../components/Product/AccountInfo";
import { myAccountBreadcrums } from "../utils/data/breadcrumbs";
import { newsLetterEndpoint } from "../utils/apiService";
import { NextSeo } from "next-seo";
import { token } from "../utils/config";

const Myaccount = () => {
  const [subscribeSucess, setSubscribeSucess] = useState(null);
  const [unSubscribeSucess, setUnSubscribeSucess] = useState(null);
  const userDetails = useSelector((state) => state.user.userDetails);
  const emailId = userDetails?.user?.email;

  const {
    isLoading: newsLettersLoading,
    data: newsLettersData,
    sendHTTPGetRequest: newsLettersApi,
  } = useGetApi();

  useEffect(() => {
    if (emailId != undefined) {
      newsLettersApi(newsLetterEndpoint(emailId), token);
    }
  }, [emailId, subscribeSucess, unSubscribeSucess]);

  return (
    <>
      <NextSeo title="My Account" description="Some content " />
      <div>
        <Breadcrumbs data={myAccountBreadcrums} />
        {/* <AccountInfo /> */}
        <AccountInfo
          newsLettersData={newsLettersData}
          newsLettersLoading={newsLettersLoading}
          setSubscribeSucess={setSubscribeSucess}
          setUnSubscribeSucess={setUnSubscribeSucess}
        />
        <Features />
      </div>
    </>
  );
};

export default Myaccount;

// export async function getServerSideProps(context) {
//   const res = await axios.get(
//     'https://coolstop.digitalsalt.in/api/news-letters?filters[emailId][$eq]=sraees@gmail.com',
//     // `https://coolstop.digitalsalt.in/api/news-letters?filters[emailId][$eq]=${userEmailid}`,
//     {
//       headers: { Authorization: `Bearer ${token}` },
//     }
//   );
//   // const data = await res.json();

//   return {
//     props: { data: res.data },
//   };
// }
