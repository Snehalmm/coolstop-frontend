import React, { useEffect } from "react";
import "../assets/css/app.css";
import "../assets/css/my-account.css";
import "../assets/css/my-cart.css";
import "../assets/css/fresco.css";
import Layout from "../layouts/main";
import { Provider } from "react-redux";
import store from "../stores/store";
import { useRouter } from "next/router";
import { getFromStorage } from "../utils/storage";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const loggedIn = getFromStorage("userDetails");
    if (
      (router.pathname === "/register" || router.pathname === "/login") &&
      loggedIn
    ) {
      router.push("/");
    }
    if (router.pathname === "/my-account" && !loggedIn) {
      router.push("/login");
    }
    if (router.pathname === "/pending-orders" && !loggedIn) {
      router.push("/login");
    }
    if (router.pathname === "/paid-orders" && !loggedIn) {
      router.push("/login");
    }
    if (router.pathname === "/faq" && !loggedIn) {
      router.push("/login");
    }
    if (router.pathname === "/track-orders" && !loggedIn) {
      router.push("/login");
    }
  }, []);

  return (
    <Provider store={store}>
      <Layout>
        <Script src="https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/build-integration#12-integrate-with-checkout-on-client-side"></Script>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
