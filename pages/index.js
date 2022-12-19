import Features from "../components/Home/Features";

import Brand from "../components/Home/Brand";
import Banner from "../components/Common/Banner";
import TopSeller from "../components/Home/TopSeller";
import Reviews from "../components/Home/Reviews";
import Blogs from "../components/Common/Blogs";
import { useEffect } from "react";
import { Path } from "../utils/apiService";
import { userActions } from "../stores/slices/userSlice";
import { useDispatch } from "react-redux";
import { serverUrl, token } from "../utils/config";
import { NextSeo } from "next-seo";
import { getFromStorage } from "../utils/storage";

export default function Home(props) {
  const { home, review } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    const getUserDetails = getFromStorage("userDetails");
    if (getUserDetails) {
      dispatch(userActions.adduser(getUserDetails));
    }
  }, []);

  return (
    <>
      <NextSeo
        title={home.data.attributes.seo.metaTitle}
        description={home.data.attributes.seo.metaDescription}
        openGraph={{
          type: home.data.attributes.seo.metaImage.data.attributes
            .alternativeText,
          url: "https://www.example.com/page",
          title: "Open Graph Title",
          description: "Open Graph Description",
          images: [
            {
              url:
                serverUrl +
                home.data.attributes.seo.metaImage.data.attributes.url,
              width: home.data.attributes.seo.metaImage.data.attributes.height,
              height: home.data.attributes.seo.metaImage.data.attributes.width,
              alt: "Og Image Alt",
            },
          ],
        }}
      />
      {/* <div> */}
      {home !== null && (
        <>
          <Banner data={home.data.attributes.homeBanner} />
          <TopSeller
            data={home.data.attributes.topSellersProducts.data}
            item={home.data}
          />
          <Blogs data={home.data.attributes.blogs} />
          <Brand data={home.data.attributes.brands_we_offers.data} />
          <Features />
          <Reviews reviews={review} />
        </>
      )}
      {/* </div> */}
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(serverUrl + Path.home, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const home = await res.json();

  const reviewData = await fetch(serverUrl + Path.reviews, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const review = await reviewData.json();

  return {
    props: { home: home, review: review },
  };
}
