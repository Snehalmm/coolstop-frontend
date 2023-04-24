import Features from "../components/Home/Features";
import Brand from "../components/Home/Brand";
import Banner from "../components/Common/Banner";
import TopSeller from "../components/Home/TopSeller";
import Reviews from "../components/Home/Reviews";
import Blogs from "../components/Common/Blogs";
import React, { useEffect } from "react";
import { Path } from "../utils/apiService";
import { userActions } from "../stores/slices/userSlice";
import { useDispatch } from "react-redux";
import { serverUrl, token } from "../utils/config";
import { NextSeo } from "next-seo";
import { getFromStorage } from "../utils/storage";
import { useRouter } from "next/router";
import ProductsList from "../components/Home/ProductsList";

export default function Home(props) {
  const router = useRouter();
  const { home, review, products } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    const getUserDetails = getFromStorage("userDetails");
    if (getUserDetails) {
      dispatch(userActions.adduser(getUserDetails));
    }

    window.__be = window.__be || {};
    window.__be.id = "64413750c306720006c2db7d";
    (function () {
      var be = document.createElement("script");
      be.type = "text/javascript";
      be.async = true;
      be.src =
        ("https:" == document.location.protocol ? "https://" : "http://") +
        "cdn.chatbot.com/widget/plugin.js";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(be, s);
    })();
  }, []);

  return (
    <>
      <NextSeo
        title={home.data.attributes.seo.metaTitle}
        description={home.data.attributes.seo.metaDescription}
        openGraph={{
          type: home.data.attributes.seo.metaImage.data.attributes
            .alternativeText,
          url: home.data.attributes.seo.metaImage.data.attributes.url,
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

      {home !== null && (
        <>
          <Banner data={home.data.attributes.homeBanner} />
          <Brand data={home.data.attributes.brands_we_offers.data} />
          <TopSeller
            data={home.data.attributes.topSellersProducts.data}
            item={home.data}
          />
          <ProductsList data={products.data.attributes.products.data} />
          <Blogs data={home.data.attributes.blogs} />

          <Features />
          <Reviews reviews={review} />
        </>
      )}
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

  const productsData = await fetch(`${serverUrl}${Path.products}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const products = await productsData.json();

  return {
    props: { home: home, review: review, products: products },
  };
}
