import React, { useState, useEffect } from "react";
import AdressModal from "../Modal/AdressModal";
const AddressBook = () => {
  const [adressModal, setAdressModal] = useState();

  const [userDetails, setUserDetails] = useState();
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("userDetails"));
    if (items) {
      setUserDetails(items);
    }
  }, []);

  const handleOpen = () => {
    setAdressModal(true);
  };
  return (
    <>
      <div className="ac-page-addinfo">
        <h3 className="accinfo">Address Book</h3>

        <div className="cont-news-con">
          {userDetails?.data?.user.address !== null &&
          userDetails?.data?.user.address ? (
            <>
              <div className="ac-newsl">
                <svg
                  fill="#000000"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                >
                  <path d="M 2.84375 13 C 1.285156 13 0 14.285156 0 15.84375 L 0 42 C 0 43.660156 1.339844 45 3 45 L 7.09375 45 C 7.570313 47.835938 10.035156 50 13 50 C 15.964844 50 18.429688 47.835938 18.90625 45 L 28.15625 45 C 28.894531 45 29.554688 44.6875 30.0625 44.21875 C 30.582031 44.675781 31.246094 44.992188 32 45 L 33.09375 45 C 33.570313 47.835938 36.035156 50 39 50 C 42.300781 50 45 47.300781 45 44 C 45 40.699219 42.300781 38 39 38 C 36.035156 38 33.570313 40.164063 33.09375 43 L 32 43 C 31.8125 43 31.527344 42.871094 31.3125 42.65625 C 31.097656 42.441406 31 42.183594 31 42 L 31 23 C 31 22.625 31.625 22 32 22 L 40 22 C 40.785156 22 41.890625 22.839844 42.65625 23.75 C 42.664063 23.761719 42.679688 23.769531 42.6875 23.78125 L 42.84375 24 L 38 24 C 36.40625 24 35 25.289063 35 27 L 35 31 C 35 31.832031 35.375 32.5625 35.90625 33.09375 C 36.4375 33.625 37.167969 34 38 34 L 48 34 L 48 42 C 48 42.375 47.375 43 47 43 L 45 43 L 45 45 L 47 45 C 48.660156 45 50 43.660156 50 42 L 50 32.375 C 50 30.085938 48.40625 28.0625 48.40625 28.0625 L 48.375 28.0625 L 44.25 22.5625 L 44.25 22.53125 L 44.21875 22.5 C 43.296875 21.386719 41.914063 20 40 20 L 32 20 C 31.644531 20 31.316406 20.074219 31 20.1875 L 31 15.90625 C 31 14.371094 29.789063 13 28.1875 13 Z M 2.84375 15 L 28.1875 15 C 28.617188 15 29 15.414063 29 15.90625 L 29 42.15625 C 29 42.625 28.628906 43 28.15625 43 L 18.90625 43 C 18.429688 40.164063 15.964844 38 13 38 C 10.035156 38 7.570313 40.164063 7.09375 43 L 3 43 C 2.625 43 2 42.371094 2 42 L 2 15.84375 C 2 15.375 2.367188 15 2.84375 15 Z M 38 26 L 44.34375 26 L 46.78125 29.25 C 46.78125 29.25 47.6875 30.800781 47.875 32 L 38 32 C 37.832031 32 37.5625 31.875 37.34375 31.65625 C 37.125 31.4375 37 31.167969 37 31 L 37 27 C 37 26.496094 37.59375 26 38 26 Z M 13 40 C 15.222656 40 17 41.777344 17 44 C 17 46.222656 15.222656 48 13 48 C 10.777344 48 9 46.222656 9 44 C 9 41.777344 10.777344 40 13 40 Z M 39 40 C 41.222656 40 43 41.777344 43 44 C 43 46.222656 41.222656 48 39 48 C 36.777344 48 35 46.222656 35 44 C 35 41.777344 36.777344 40 39 40 Z" />
                </svg>

                <div className="ac-det-wrap">
                  <h3 className="ac-cont-infotit">Billing Address</h3>
                  <p className="ac-newsl-det">
                    Flat{" "}
                    <span className="cm-line-break"> 179 Evington Road</span>
                    LEICESTER
                    <span className="cm-line-break"> Leicestershire</span>
                    <span className="cm-line-break"> LE2 1QN</span>
                    <span className="cm-line-break">United Kingdom</span>
                    <span className="cm-line-break">Tel: 07917724187</span>
                  </p>
                  <a
                    className="ac-cont-butt"
                    href="#"
                    data-toggle="chg_ship_add"
                  >
                    Change Address
                  </a>
                </div>
              </div>

              <div className="ac-newsl">
                <svg
                  fill="#000000"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                >
                  <path d="M 2.84375 13 C 1.285156 13 0 14.285156 0 15.84375 L 0 42 C 0 43.660156 1.339844 45 3 45 L 7.09375 45 C 7.570313 47.835938 10.035156 50 13 50 C 15.964844 50 18.429688 47.835938 18.90625 45 L 28.15625 45 C 28.894531 45 29.554688 44.6875 30.0625 44.21875 C 30.582031 44.675781 31.246094 44.992188 32 45 L 33.09375 45 C 33.570313 47.835938 36.035156 50 39 50 C 42.300781 50 45 47.300781 45 44 C 45 40.699219 42.300781 38 39 38 C 36.035156 38 33.570313 40.164063 33.09375 43 L 32 43 C 31.8125 43 31.527344 42.871094 31.3125 42.65625 C 31.097656 42.441406 31 42.183594 31 42 L 31 23 C 31 22.625 31.625 22 32 22 L 40 22 C 40.785156 22 41.890625 22.839844 42.65625 23.75 C 42.664063 23.761719 42.679688 23.769531 42.6875 23.78125 L 42.84375 24 L 38 24 C 36.40625 24 35 25.289063 35 27 L 35 31 C 35 31.832031 35.375 32.5625 35.90625 33.09375 C 36.4375 33.625 37.167969 34 38 34 L 48 34 L 48 42 C 48 42.375 47.375 43 47 43 L 45 43 L 45 45 L 47 45 C 48.660156 45 50 43.660156 50 42 L 50 32.375 C 50 30.085938 48.40625 28.0625 48.40625 28.0625 L 48.375 28.0625 L 44.25 22.5625 L 44.25 22.53125 L 44.21875 22.5 C 43.296875 21.386719 41.914063 20 40 20 L 32 20 C 31.644531 20 31.316406 20.074219 31 20.1875 L 31 15.90625 C 31 14.371094 29.789063 13 28.1875 13 Z M 2.84375 15 L 28.1875 15 C 28.617188 15 29 15.414063 29 15.90625 L 29 42.15625 C 29 42.625 28.628906 43 28.15625 43 L 18.90625 43 C 18.429688 40.164063 15.964844 38 13 38 C 10.035156 38 7.570313 40.164063 7.09375 43 L 3 43 C 2.625 43 2 42.371094 2 42 L 2 15.84375 C 2 15.375 2.367188 15 2.84375 15 Z M 38 26 L 44.34375 26 L 46.78125 29.25 C 46.78125 29.25 47.6875 30.800781 47.875 32 L 38 32 C 37.832031 32 37.5625 31.875 37.34375 31.65625 C 37.125 31.4375 37 31.167969 37 31 L 37 27 C 37 26.496094 37.59375 26 38 26 Z M 13 40 C 15.222656 40 17 41.777344 17 44 C 17 46.222656 15.222656 48 13 48 C 10.777344 48 9 46.222656 9 44 C 9 41.777344 10.777344 40 13 40 Z M 39 40 C 41.222656 40 43 41.777344 43 44 C 43 46.222656 41.222656 48 39 48 C 36.777344 48 35 46.222656 35 44 C 35 41.777344 36.777344 40 39 40 Z" />
                </svg>

                <div className="ac-det-wrap">
                  <h3 className="ac-cont-infotit">Shipping Address</h3>
                  <p className="ac-newsl-det">
                    Flat{" "}
                    <span className="cm-line-break"> 179 Evington Road</span>
                    LEICESTER
                    <span className="cm-line-break"> Leicestershire</span>
                    <span className="cm-line-break"> LE2 1QN</span>
                    <span className="cm-line-break">United Kingdom</span>
                    <span className="cm-line-break">Tel: 07917724187</span>
                  </p>
                  <a
                    className="ac-cont-butt"
                    href="#"
                    data-toggle="chg_ship_add"
                  >
                    Change Address
                  </a>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="ac-cont-butt">
                <button onClick={handleOpen}>Add Billing Address</button>
              </div>
              <div className="ac-cont-butt">
                <button onClick={handleOpen}>Add Shipping Address</button>
              </div>
            </>
          )}
        </div>
      </div>

      {adressModal ? (
        <AdressModal
          adressModal={adressModal}
          setAdressModal={setAdressModal}
        />
      ) : null}
    </>
  );
};

export default AddressBook;
