import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../stores/slices/cartSlice";
import { userActions } from "../../stores/slices/userSlice";
import { getFromStorage, saveToStorage } from "../../utils/storage";
import { serverUrl } from "../../utils/config";
import Search from "../Search/index";
import { filterActions } from "../../stores/slices/filterSlice";
import useGetApi from "../../utils/useGetApi";

const Header = ({ categories, getGlobalData }) => {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const cartItemsCount = useSelector((state) => state.cart.items?.length);
  const userDetails = useSelector((state) => state.user.userDetails);
  const searchCatagory = useSelector((state) => state.filter.searchCatagory);

  let getPageName = router.pathname == "/payment-method";

  const dispatch = useDispatch();

  useEffect(() => {
    let getProducts = getFromStorage("products");
    dispatch(cartActions.updateProduct(getProducts));
    let getUserDetails = getFromStorage("userDetails");
    dispatch(userActions.adduser(getUserDetails));
    // let getSelectCatagory = getFromStorage('searchCatagory') || '';
    // dispatch(filterActions.addSearchCatagoryFilter(getSelectCatagory));
  }, []);

  useEffect(() => {
    if (
      Object.keys(router?.query).includes("search") &&
      router?.query?.search?.length > 0
    ) {
      let url = {
        pathname: "/products",
        query: { ...router.query, acType: getFromStorage("searchCatagory") },
      };
      router.push(url, undefined, {
        shallow: true,
      });
    }
  }, [router?.query]);

  const onSuccessHandler = (data) => {
    if (data) {
      setUserData(data);
      let userObject = { ...userDetails };
      userObject["user"] = data;
      saveToStorage("userDetails", userObject);
      dispatch(userActions.adduser(userObject));
      saveToStorage("billingaddress", userObject?.user);
      dispatch(userActions.addAddress(userObject?.user));
    }
  };
  // useEffect(() => {
  //   let userObject = { ...userDetails };
  //   userObject["user"] = userData;
  //   saveToStorage("userDetails", userObject);
  //   dispatch(userActions.adduser(userObject));
  // }, [userData]);

  const {
    isLoading: userDataLoading,
    error: userDataError,
    data: userDatadata,
    sendHTTPGetRequest: userDataApi,
  } = useGetApi();

  useEffect(() => {
    if (Object.keys(userDetails)?.length > 0) {
      userDataApi(
        `/api/users/${userDetails?.user?.id}?populate=*`,
        userDetails?.jwt,
        onSuccessHandler
      );
    }
  }, [userDetails?.user?.id, userDetails?.jwt, getPageName]);
  const searchSelectHandle = (e) => {
    const { value } = e.target;
    dispatch(filterActions.addSearchCatagoryFilter(value));
    saveToStorage("searchCatagory", value);
  };

  const [myCat, setMyCat] = useState("");
  useEffect(() => {
    setMyCat(getFromStorage("searchCatagory"));
  }, []);

  return (
    <>
      <div className="top-four-sec">
        <div className="top-four-1">
          <section className="purple-bg">
            <div className="grid-container">
              <div className="top_links">
                <div className="t-links">
                  <a href="">
                    <svg width="16px" height="16px">
                      <path d="M7.625,-0.000 C7.136,-0.000 6.788,0.250 6.492,0.450 C6.196,0.649 5.931,0.819 5.809,0.852 C5.687,0.885 5.376,0.866 5.020,0.842 C4.664,0.817 4.236,0.777 3.812,1.022 C3.389,1.266 3.212,1.659 3.055,1.980 C2.899,2.301 2.758,2.579 2.669,2.668 C2.579,2.758 2.296,2.899 1.975,3.055 C1.654,3.211 1.266,3.389 1.022,3.812 C0.777,4.235 0.822,4.664 0.847,5.020 C0.872,5.376 0.885,5.686 0.852,5.809 C0.820,5.931 0.650,6.196 0.450,6.491 C0.250,6.788 -0.000,7.136 -0.000,7.625 C-0.000,8.114 0.250,8.462 0.450,8.758 C0.650,9.054 0.820,9.319 0.852,9.441 C0.885,9.563 0.872,9.874 0.847,10.230 C0.822,10.586 0.777,11.014 1.022,11.437 C1.266,11.861 1.654,12.038 1.975,12.194 C2.296,12.351 2.579,12.491 2.669,12.581 C2.758,12.670 2.899,12.948 3.055,13.269 C3.212,13.590 3.389,13.983 3.812,14.228 C4.236,14.472 4.664,14.427 5.020,14.403 C5.376,14.377 5.687,14.364 5.809,14.397 C5.931,14.430 6.196,14.600 6.492,14.799 C6.788,14.999 7.136,15.250 7.625,15.250 C8.114,15.250 8.462,14.999 8.758,14.799 C9.054,14.600 9.319,14.430 9.441,14.397 C9.563,14.365 9.874,14.377 10.230,14.403 C10.586,14.427 11.014,14.472 11.437,14.228 C11.861,13.983 12.038,13.590 12.195,13.269 C12.351,12.948 12.492,12.670 12.581,12.581 C12.671,12.491 12.954,12.351 13.275,12.194 C13.596,12.038 13.984,11.861 14.228,11.437 C14.472,11.014 14.433,10.586 14.408,10.230 C14.383,9.874 14.365,9.563 14.397,9.441 C14.430,9.319 14.600,9.054 14.800,8.758 C15.000,8.462 15.250,8.114 15.250,7.625 C15.250,7.136 15.000,6.788 14.800,6.491 C14.600,6.196 14.430,5.931 14.397,5.809 C14.365,5.686 14.383,5.376 14.408,5.020 C14.433,4.664 14.472,4.236 14.228,3.812 C13.984,3.389 13.596,3.211 13.275,3.055 C12.954,2.899 12.671,2.758 12.581,2.668 C12.492,2.579 12.351,2.301 12.195,1.980 C12.038,1.659 11.861,1.266 11.437,1.022 C11.014,0.777 10.586,0.817 10.230,0.842 C9.874,0.866 9.563,0.885 9.441,0.852 C9.319,0.819 9.054,0.649 8.758,0.450 C8.462,0.250 8.114,-0.000 7.625,-0.000 L7.625,-0.000 ZM7.625,1.016 C7.700,1.016 7.918,1.110 8.186,1.292 C8.455,1.473 8.754,1.724 9.176,1.837 C9.599,1.950 9.976,1.881 10.299,1.858 C10.622,1.835 10.864,1.863 10.929,1.901 C10.994,1.938 11.137,2.133 11.279,2.425 C11.421,2.716 11.552,3.079 11.861,3.389 C12.170,3.698 12.533,3.829 12.825,3.971 C13.116,4.113 13.312,4.256 13.349,4.321 C13.386,4.385 13.414,4.627 13.391,4.951 C13.369,5.274 13.305,5.651 13.418,6.073 C13.531,6.496 13.777,6.795 13.958,7.063 C14.139,7.332 14.233,7.550 14.233,7.625 C14.233,7.699 14.139,7.923 13.958,8.191 C13.777,8.460 13.531,8.754 13.418,9.176 C13.305,9.598 13.369,9.981 13.391,10.304 C13.414,10.627 13.386,10.864 13.349,10.929 C13.312,10.993 13.116,11.136 12.825,11.278 C12.533,11.420 12.170,11.557 11.861,11.866 C11.552,12.175 11.421,12.539 11.279,12.830 C11.137,13.121 10.994,13.311 10.929,13.349 C10.864,13.386 10.622,13.414 10.299,13.391 C9.976,13.368 9.599,13.304 9.176,13.418 C8.754,13.531 8.455,13.776 8.186,13.958 C7.918,14.139 7.700,14.233 7.625,14.233 C7.550,14.233 7.327,14.139 7.058,13.958 C6.790,13.776 6.496,13.531 6.073,13.418 C5.651,13.304 5.269,13.368 4.946,13.391 C4.622,13.414 4.385,13.386 4.321,13.349 C4.256,13.311 4.113,13.121 3.971,12.830 C3.829,12.539 3.693,12.175 3.384,11.866 C3.074,11.557 2.711,11.420 2.420,11.278 C2.128,11.136 1.938,10.993 1.901,10.929 C1.864,10.864 1.836,10.627 1.859,10.304 C1.881,9.981 1.945,9.598 1.832,9.176 C1.719,8.754 1.473,8.460 1.292,8.191 C1.111,7.923 1.017,7.699 1.017,7.625 C1.017,7.550 1.111,7.332 1.292,7.063 C1.473,6.795 1.719,6.496 1.832,6.073 C1.945,5.651 1.881,5.274 1.859,4.951 C1.836,4.627 1.864,4.385 1.901,4.321 C1.938,4.256 2.128,4.113 2.420,3.971 C2.711,3.829 3.074,3.698 3.384,3.389 C3.693,3.079 3.829,2.716 3.971,2.425 C4.113,2.133 4.256,1.938 4.321,1.901 C4.385,1.863 4.622,1.835 4.946,1.858 C5.269,1.881 5.651,1.950 6.073,1.837 C6.496,1.724 6.790,1.473 7.058,1.292 C7.327,1.110 7.550,1.016 7.625,1.016 L7.625,1.016 ZM5.592,3.727 C4.568,3.727 3.728,4.568 3.728,5.592 C3.728,6.615 4.568,7.455 5.592,7.455 C6.615,7.455 7.456,6.615 7.456,5.592 C7.456,4.568 6.615,3.727 5.592,3.727 ZM10.278,4.400 C10.163,4.415 10.056,4.469 9.976,4.553 L4.554,9.976 C4.344,10.162 4.324,10.483 4.510,10.693 C4.697,10.904 5.018,10.923 5.228,10.737 C5.244,10.722 5.260,10.707 5.274,10.690 L10.696,5.268 C10.897,5.072 10.901,4.750 10.705,4.549 C10.594,4.435 10.436,4.380 10.278,4.400 L10.278,4.400 ZM5.592,4.744 C6.066,4.744 6.439,5.118 6.439,5.592 C6.439,6.065 6.066,6.439 5.592,6.439 C5.118,6.439 4.744,6.065 4.744,5.592 C4.744,5.118 5.118,4.744 5.592,4.744 ZM9.658,7.794 C8.635,7.794 7.794,8.635 7.794,9.658 C7.794,10.681 8.635,11.522 9.658,11.522 C10.682,11.522 11.522,10.681 11.522,9.658 C11.522,8.635 10.682,7.794 9.658,7.794 L9.658,7.794 ZM9.658,8.811 C10.132,8.811 10.505,9.184 10.505,9.658 C10.505,10.132 10.132,10.505 9.658,10.505 C9.184,10.505 8.811,10.132 8.811,9.658 C8.811,9.184 9.184,8.811 9.658,8.811 L9.658,8.811 Z" />
                    </svg>
                    Exclusive Deals
                  </a>
                </div>
                <div className="t-links">
                  <a href="">
                    <svg width="25px" height="15px">
                      <path d="M22.924,12.486 L22.826,12.486 C22.568,13.436 21.825,14.178 20.874,14.436 C19.393,14.838 17.866,13.965 17.464,12.486 L14.490,12.486 C14.232,13.436 13.489,14.178 12.538,14.436 C11.057,14.838 9.530,13.965 9.128,12.486 L9.030,12.486 C7.880,12.486 6.946,11.554 6.946,10.405 L6.946,9.017 C6.946,8.634 7.258,8.323 7.641,8.323 C8.025,8.323 8.336,8.634 8.336,9.017 L8.336,10.405 C8.336,10.788 8.647,11.098 9.030,11.098 L9.121,11.098 C9.379,10.149 10.122,9.407 11.073,9.148 C12.554,8.746 14.081,9.620 14.484,11.098 L15.282,11.098 L15.282,2.080 C15.282,1.697 14.971,1.387 14.588,1.387 L0.695,1.387 C0.311,1.387 -0.000,1.076 -0.000,0.693 C-0.000,0.310 0.311,-0.001 0.695,-0.001 L14.588,-0.001 C15.739,-0.001 16.672,0.931 16.672,2.080 L16.672,2.899 C16.894,2.818 17.129,2.776 17.366,2.774 L20.791,2.774 C21.485,2.775 22.134,3.121 22.521,3.697 L24.660,6.936 C24.880,7.268 25.001,7.655 25.008,8.053 L25.008,10.405 C25.008,11.554 24.074,12.486 22.924,12.486 ZM11.809,10.405 C11.042,10.405 10.420,11.026 10.420,11.792 C10.420,12.558 11.042,13.179 11.809,13.179 C12.576,13.179 13.198,12.558 13.198,11.792 C13.198,11.026 12.576,10.405 11.809,10.405 ZM20.145,13.179 C20.912,13.179 21.534,12.558 21.534,11.792 C21.534,11.026 20.912,10.405 20.145,10.405 C19.378,10.405 18.756,11.026 18.756,11.792 C18.756,12.558 19.378,13.179 20.145,13.179 ZM23.507,7.672 L21.368,4.467 C21.238,4.276 21.022,4.161 20.791,4.162 L17.366,4.162 C16.983,4.162 16.672,4.472 16.672,4.855 L16.672,11.098 L17.457,11.098 C17.715,10.149 18.458,9.407 19.409,9.148 C20.890,8.746 22.417,9.620 22.819,11.098 L22.924,11.098 C23.307,11.098 23.618,10.788 23.618,10.405 L23.625,8.046 C23.623,7.913 23.582,7.783 23.507,7.672 ZM2.779,2.774 L10.420,2.774 C10.803,2.774 11.114,3.085 11.114,3.468 C11.114,3.851 10.803,4.162 10.420,4.162 L2.779,4.162 C2.395,4.162 2.084,3.851 2.084,3.468 C2.084,3.085 2.395,2.774 2.779,2.774 ZM4.863,5.549 L10.420,5.549 C10.803,5.549 11.114,5.860 11.114,6.243 C11.114,6.626 10.803,6.936 10.420,6.936 L4.863,6.936 C4.479,6.936 4.168,6.626 4.168,6.243 C4.168,5.860 4.479,5.549 4.863,5.549 Z" />
                    </svg>
                    Track Order/Service
                  </a>
                </div>
                <div className="t-links">
                  <a href="">
                    <svg width="9px" height="14px">
                      <path d="M8.506,2.549 C7.389,0.264 4.682,-0.650 2.462,0.499 C0.242,1.649 -0.617,4.524 0.471,6.706 C1.560,8.887 3.894,13.619 3.894,13.619 C4.138,14.120 4.840,14.120 5.083,13.619 C5.083,13.619 7.876,8.018 8.521,6.706 C9.151,5.394 9.165,3.905 8.506,2.549 ZM4.496,7.060 C3.250,7.060 2.233,6.013 2.233,4.730 C2.233,3.448 3.250,2.401 4.496,2.401 C5.756,2.401 6.759,3.448 6.759,4.730 C6.759,6.013 5.756,7.060 4.496,7.060 Z" />
                    </svg>
                    Store Locator
                  </a>
                </div>
                <div className="t-links">
                  <a href="">
                    <svg width="16px" height="16px">
                      <path d="M7.917,15.833 C3.562,15.833 -0.000,12.270 -0.000,7.916 C-0.000,3.562 3.562,-0.000 7.917,-0.000 C12.271,-0.000 15.833,3.562 15.833,7.916 C15.833,12.270 12.271,15.833 7.917,15.833 ZM7.917,1.484 C4.354,1.484 1.484,4.354 1.484,7.916 C1.484,11.479 4.354,14.349 7.917,14.349 C11.479,14.349 14.349,11.479 14.349,7.916 C14.349,4.354 11.479,1.484 7.917,1.484 ZM6.927,6.927 L8.906,6.927 L8.906,11.875 L6.927,11.875 L6.927,6.927 ZM7.917,5.937 C7.370,5.937 6.927,5.494 6.927,4.948 C6.927,4.401 7.370,3.958 7.917,3.958 C8.463,3.958 8.906,4.401 8.906,4.948 C8.906,5.494 8.463,5.937 7.917,5.937 Z" />
                    </svg>
                    AC Buying Guide
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="top-four-2">
          <header className="header-container">
            <section className="grid-container top-logo-con">
              <div className="top-logo-1">
                {getGlobalData !== null && (
                  <Link href="/">
                    <Image
                      src={`${serverUrl}${getGlobalData?.data?.attributes?.logo?.data?.attributes?.url}`}
                      alt="img"
                      width="0"
                      height="0"
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Link>
                )}
              </div>

              <div className="top-logo-2">
                <div className="sel-search">
                  <select
                    name="cata"
                    id="all-cat"
                    onChange={searchSelectHandle}
                  >
                    <option defaultValue="all-cat">All Categories</option>
                    {categories?.data.map((item, i) => {
                      return (
                        <option
                          key={i}
                          defaultValue={item?.attributes?.slug}
                          selected={myCat == item?.attributes?.slug}
                        >
                          {item?.attributes?.name}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="inp-butt">
                  <Search />
                </div>
              </div>

              <ul className="top-logo-3">
                <li>
                  {/* <a className="emi-ima" href="#">
                    <Image
                      src="/images/emi-but.svg"
                      alt="img"
                      width={200}
                      height={200}
                    ></Image>
                  </a> */}
                </li>
                <li className="cart-item">
                  <Link className="mycar-but" href="/cart" as="/cart">
                    {cartItemsCount > 0 && (
                      <span className="item-count">{cartItemsCount}</span>
                    )}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 27">
                      <path d="M21.2 15.3H9.8c-.8 0-1.3.5-1.3 1.3s.5 1.3 1.3 1.3h12.7v2.6H9.8c-2.2 0-3.8-1.7-3.8-3.9 0-1.6.8-2.9 2.1-3.6l-3-9.5H.9V.9H6c.5 0 1 .4 1.1.9l1 3H25v2.6l-3.8 7.9zM9.8 21.8c1.4 0 2.5 1.2 2.5 2.6S11.2 27 9.8 27s-2.5-1.2-2.5-2.6 1.1-2.6 2.5-2.6zm10.1 0c1.4 0 2.5 1.2 2.5 2.6S21.3 27 19.9 27s-2.5-1.2-2.5-2.6 1.1-2.6 2.5-2.6z" />
                    </svg>
                    <span className="logo-title">Cart</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={
                      (userDetails !== null &&
                        Object?.keys(userDetails)?.length > 0) ||
                      (userDetails !== null &&
                        Object.keys(userDetails)?.length > 0 &&
                        cartItemsCount)
                        ? "/my-account"
                        : "/login"
                    }
                  >
                    {/* <Image src={AccountIcon}></Image> */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 27">
                      <path d="M13.1 26.6C5.9 26.6 0 20.7 0 13.3 0 6 5.9 0 13.1 0c7.2 0 13.1 6 13.1 13.3.1 7.4-5.8 13.3-13.1 13.3zm0-24C7.3 2.6 2.6 7.4 2.6 13.3c0 3.2 1.4 6.1 3.6 8 1.2-3.3 3.9-5.5 7-5.5s5.7 2.2 7 5.5c2.2-2 3.6-4.8 3.6-8C23.7 7.4 19 2.6 13.1 2.6zm0 12c-2.2 0-4-1.8-4-4.1s1.8-4.1 4-4.1 4 1.8 4 4.1c.1 2.3-1.7 4.1-4 4.1z" />
                    </svg>
                    <span className="logo-title">Account</span>
                  </Link>
                </li>
              </ul>
            </section>
          </header>
        </div>
      </div>
      <Navbar categories={categories} />
    </>
  );
};

export default Header;
