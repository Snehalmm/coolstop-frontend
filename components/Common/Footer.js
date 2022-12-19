import Link from "next/link";
import { useForm } from "react-hook-form";
import usePostApi from "../../utils/usePostApi";
import { Path } from "../../utils/apiService";
import { useState } from "react";
import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../stores/slices/userSlice";
import { useEffect } from "react";
import { token, serverUrl } from "../../utils/config";
import { getFromStorage } from "../../utils/storage";
import Image from "next/image";
const Footer = ({ getGlobalData }) => {
  const dispatch = useDispatch();
  const [showUpdate, setShowUpdate] = useState(false);

  const [successMessage, setSuccessMessage] = useState("");
  const {
    register,
    resetField,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const {
    isLoading: newsLetterLoading,
    error: newsLetterError,
    data: newsLetterData,
    sendHTTPPostRequest: newsLetterApi,
  } = usePostApi();

  const checkNewsletterHandler = (e) => {
    if (e.target.checked) {
      setShowUpdate(true);
    } else {
      setShowUpdate(false);
    }
  };
  useEffect(() => {
    let getUserDetails = getFromStorage("userDetails");
    dispatch(userActions.adduser(getUserDetails));
  }, []);

  const userDetails = useSelector((state) => state.user.userDetails);

  const successHandler = () => {
    setSuccessMessage(" You have successfully subscribed to our newsletter.");
    setTimeout(function () {
      setSuccessMessage("");
    }, 3000);
  };

  const submitnewsLetter = (email) => {
    let data = {
      data: {
        emailId: Object.values(email).toString(),
        sendMeUpdate: showUpdate,
      },
    };
    newsLetterApi(Path.newsLetter, data, token, successHandler);
    resetField("email");
  };

  return (
    <>
      <div className="footer-bg">
        <footer>
          <div className="grid-container">
            <div className="foot-area">
              <div className="foot1">
                <ul>
                  <span className="bot-link-tit">Shop</span>
                  {getGlobalData !== null &&
                    getGlobalData?.data?.attributes?.footerLinks.map(
                      (item, i) => {
                        return (
                          <li key={i}>
                           {item.link !== null ? (
                              <Link href={item.link}>{item.name}</Link>
                            ) : (
                              item.name
                            )}
                          </li>
                        );
                      }
                    )}
                  {/* <li>
                    <a href="#">Split AC</a>
                  </li>
                  <li>
                    <a href="#">Window AC</a>
                  </li>
                  <li>
                    <a href="#">Ductables</a>
                  </li>
                  <li>
                    <a href="#">VRV</a>
                  </li>
                  <li>
                    <Link href="/book-service" as="/book-service">
                      Book A Service
                    </Link>
                  </li> */}
                </ul>
                <ul>
                  <span className="bot-link-tit">About</span>
                  <li>
                    <Link href="/about-us">Our Story</Link>
                  </li>
                  <li>
                    <Link href="/about-us">Refer A Friend</Link>
                  </li>
                  <li>
                    <Link href="/about-us">Press</Link>
                  </li>
                  <li>
                    <Link href="/about-us">Careers</Link>
                  </li>
                </ul>
                <ul>
                  <span className="bot-link-tit">Help</span>
                  <li>
                    <Link href="/faq">FAQs</Link>
                  </li>
                  <li>
                    <Link href="/contact-us" as="/contact-us">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              {getGlobalData?.data?.attributes?.showNewsLetter && (
                <div className="foot2">
                  <h4 className="signup-tit">Sign Up For Newsletter</h4>
                  <label htmlFor="newsletchk">
                    <input
                      type="checkbox"
                      id="newsletchk"
                      defaultValue="0"
                      onChange={checkNewsletterHandler}
                    />{" "}
                    Yes, send me updates on everything new.
                  </label>
                  <span className="inpnewlet">
                    <form onSubmit={handleSubmit(submitnewsLetter)}>
                      <input
                        type="text"
                        id="emailValue"
                        {...register("email", {
                          required: true,
                          pattern:
                            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        })}
                      />

                      <button>
                        {newsLetterLoading ? (
                          <Loader height={50} width={30} />
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 34.2 34.2"
                          >
                            <path d="M31.1 0H3C1.4 0 0 1.3 0 3v28.2c0 1.7 1.3 3 3 3h28.2c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3.1-3zm-7.4 17.3l-6.6 6.6c-.1.1-.3.1-.4 0l-1.1-1.1c-.1-.1-.1-.3 0-.4l4.3-4.3h-8.5c-.2 0-.3-.1-.3-.3v-1.5c0-.2.1-.3.3-.3h8.5l-4.3-4.3c-.1-.1-.1-.3 0-.4l1.1-1.1c.1-.1.3-.1.4 0l6.6 6.6c.1.2.1.4 0 .5z" />
                          </svg>
                        )}
                      </button>
                    </form>
                  </span>
                  {errors.email && errors.email.type === "required" && (
                    <p className="error-message">This field is required</p>
                  )}

                  {errors.email && errors.email.type === "pattern" && (
                    <p className="error-message">Please write a valid email</p>
                  )}
                  {newsLetterData !== null ? (
                    <p className="subscribed-message">{successMessage}</p>
                  ) : (
                    <p className="error-message">
                      {newsLetterError?.response.data.error.message}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="fot-bg-border">
            <div className="grid-container">
              <div className="botend">
                <div className="botins-1">
                  {getGlobalData !== null && (
                    <Image
                      src={
                        serverUrl +
                        getGlobalData?.data?.attributes?.footerLogo?.data
                          ?.attributes?.url
                      }
                      height={200}
                      width={200}
                      alt={
                        getGlobalData?.data?.attributes?.footerLogo?.data
                          ?.attributes?.alternativeText
                      }
                    />
                  )}
                  {/* <svg
                    // xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 169.7 43.1"
                  ></svg> */}
                  <p>
                    {
                      getGlobalData?.data?.attributes?.footerLogo?.data
                        ?.attributes?.related?.data[0].attributes.address
                    }
                  </p>
                </div>
                <div className="botins-2">
                  <Link href="/privacy-policy" as="/privacy-policy">
                    {" "}
                    Privacy Policy{" "}
                  </Link>
                  <Link href="/terms-condition" as="/terms-condition">
                    Terms & Condition <p>&#x000A9 Coolstop 2021</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
