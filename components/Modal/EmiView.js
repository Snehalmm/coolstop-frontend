import React, { useState } from "react";
import Image from "next/image";

const EmiView = (props) => {
  const [opendropDown, setOpendropDown] = useState(null);

  const closeHandle = () => {
    props.setShowMe(false);
  };

  const onOpenHandle = (id) => {
    if (id == opendropDown) {
      setOpendropDown(null);
    } else {
      setOpendropDown(id);
    }
  };

  return (
    <>
      <div
        className={`reveal-overlay ${
          props.showMe ? "scale-in-up mui-enter mui-enter-active" : ""
        }`}
        style={{ display: props.showMe ? "block" : "none", top: "39px" }}
      >
        <div
          className={`small reveal rev-modal-style bounce-in-out ${
            props.showMe ? "scale-in-up mui-enter mui-enter-active" : ""
          }`}
          id="emi-modal"
          data-reveal
          data-close-on-click="true"
          data-animation-in="scale-in-up"
          data-animation-out="scale-out-down"
          style={{ display: props.showMe ? "block" : "none" }}
        >
          <h4>EMI PAYMENT OPTION</h4>
          <span className="retrive-password-text">
            Bank will convert the payment into EMI in 3-4 working days.
          </span>

          <ul
            className="accordion"
            data-accordion
            data-multi-expand="true"
            data-allow-all-closed="true"
          >
            <li
              id="bajaj"
              className={`accordion-item ${
                opendropDown === "bajaj" ? "is-active" : ""
              }`}
              data-accordion-item
              onClick={() => onOpenHandle("bajaj")}
            >
              <a href="#" className="accordion-title">
                <Image
                  src="/images/bajaj-finance.png"
                  alt="Bajaj Finance"
                  width={10}
                  height={10}
                />{" "}
                Bajaj Finance
              </a>

              <div
                className="accordion-content"
                data-tab-content
                style={{ display: opendropDown === "bajaj" ? "block" : null }}
              >
                <table className="responsive-card-table striped">
                  <thead>
                    <tr>
                      <th>EMI Plan</th>
                      <th>Interest(pa)</th>
                      <th>Total cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-label="EMI Plan">₹7,783 x 3m</td>
                      <td data-label="Interest(pa)">NoCost</td>
                      <td data-label="Total cost">₹23,350</td>
                    </tr>
                    <tr>
                      <td data-label="EMI Plan">₹3,892 x 6m</td>
                      <td data-label="Interest(pa)">NoCost</td>
                      <td data-label="Total cost">₹23,350</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>

            <li
              id="hdfc"
              className={`accordion-item ${
                opendropDown === "hdfc" ? "is-active" : ""
              }`}
              data-accordion-item
              onClick={() => onOpenHandle("hdfc")}
            >
              <a href="#" className="accordion-title">
                <Image
                  src="/images/hdfc-bank.png"
                  alt="HDFC Bank"
                  width={10}
                  height={10}
                />{" "}
                HDFC Bank
              </a>

              <div
                className="accordion-content"
                data-tab-content
                style={{ display: opendropDown === "hdfc" ? "block" : null }}
              >
                <table className="responsive-card-table striped">
                  <thead>
                    <tr>
                      <th>EMI Plan</th>
                      <th>Interest(pa)</th>
                      <th>Total cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-label="EMI Plan">₹7,783 x 3m</td>
                      <td data-label="Interest(pa)">NoCost</td>
                      <td data-label="Total cost">₹23,350</td>
                    </tr>
                    <tr>
                      <td data-label="EMI Plan">₹3,892 x 6m</td>
                      <td data-label="Interest(pa)">NoCost</td>
                      <td data-label="Total cost">₹23,350</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>

            <li
              id="icici"
              className={`accordion-item ${
                opendropDown === "icici" ? "is-active" : ""
              }`}
              data-accordion-item
              onClick={() => onOpenHandle("icici")}
            >
              <a className="accordion-title">
                <Image
                  src="/images/icici-bank.png"
                  alt="ICICI Bank"
                  width={10}
                  height={10}
                />{" "}
                ICICI Bank
              </a>

              <div
                className="accordion-content"
                data-tab-content
                style={{ display: opendropDown === "icici" ? "block" : null }}
              >
                <table className="responsive-card-table striped">
                  <thead>
                    <tr>
                      <th>EMI Plan</th>
                      <th>Interest(pa)</th>
                      <th>Total cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-label="EMI Plan">₹7,783 x 3m</td>
                      <td data-label="Interest(pa)">NoCost</td>
                      <td data-label="Total cost">₹23,350</td>
                    </tr>
                    <tr>
                      <td data-label="EMI Plan">₹3,892 x 6m</td>
                      <td data-label="Interest(pa)">NoCost</td>
                      <td data-label="Total cost">₹23,350</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
          </ul>

          <button
            className="close-button"
            data-close
            aria-label="Close reveal"
            type="button"
            onClick={closeHandle}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default EmiView;
