import Image from "next/image";
import Moment from "moment";
import { toIndianCurrency } from "../../utils/services";
import { useRef } from "react";
import ReactToPrint from "react-to-print";
const Invoice = ({ data, setOpenInvoice }) => {
  const invoiceData = data;
  const componentRef = useRef();

  return (
    <>
      <div ref={componentRef}>
        <div className="invoice-card">
          <div className="card">
            <div className="buttons">
              <ReactToPrint
                trigger={() => (
                  <button className="button">Print/Download</button>
                )}
                content={() => componentRef.current}
              />{" "}
              <button onClick={() => setOpenInvoice(false)}>
                <Image
                  src="/images/crosssignimg.jpeg"
                  width="25"
                  height="25"
                ></Image>
              </button>
            </div>
            <div className="card-header">
              <div>
                <Image
                  src="/images/coolstop-logo.svg"
                  height={200}
                  width={200}
                  alt="logo"
                />
              </div>
              <div className="invoice-num">
                {" "}
                <span className="mb-0">Invoice No. {invoiceData.id}</span>
                <span>
                  Date: {Moment(invoiceData?.createdAt).format("MMM DD, YYYY")}
                </span>
              </div>
            </div>
            <div className="card-body">
              <div className="address-info">
                <div className="col-sm-6">
                  <h5 className="text-dark mb-1">Billing Address</h5>
                  <div className="cbaddress-wrapp">
                    <span className="cbaddress">
                      {invoiceData.billingAddress.address1}
                    </span>
                    {","}
                    <span className="cbaddress cm-line-break">
                      {invoiceData.billingAddress.address2}
                    </span>
                    <span className="cbaddress ">
                      {invoiceData.billingAddress.townOrCity}
                    </span>
                    {","}
                    <span className="cbaddress">
                      {invoiceData.billingAddress.state}
                    </span>
                    {","}
                    <span className="cbaddress">
                      {invoiceData.billingAddress.postcode}
                    </span>
                    <div className="cm-line-break">
                      <span className="cbaddress cm-line-break">
                        {invoiceData.users_permissions_user.contactNo}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 ">
                  <h5 className="text-dark mb-1">Shipping Address</h5>
                  <div className="cbaddress-wrapp">
                    <span className="cbaddress">
                      {invoiceData.shippingAddress.address1}
                    </span>
                    {","}
                    <span className="cbaddress cm-line-break">
                      {invoiceData.shippingAddress.address2}
                    </span>
                    <span className="cbaddress ">
                      {invoiceData.shippingAddress.townOrCity}
                    </span>
                    {","}
                    <span className="cbaddress">
                      {invoiceData.shippingAddress.state}
                    </span>
                    {","}
                    <span className="cbaddress">
                      {invoiceData.shippingAddress.postcode}
                    </span>
                    <div className="cm-line-break">
                      <span className="cbaddress">
                        {invoiceData.users_permissions_user.contactNo}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="table-responsive-sm">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th className="center">Sr.No</th>
                      <th>Item</th>
                      <th>Description</th>
                      <th className="right">Price</th>
                      <th className="center">Qty</th>
                      <th className="right">Total</th>
                    </tr>
                  </thead>
                  {invoiceData?.itemDetails?.length > 0 &&
                    invoiceData?.itemDetails.map((ele, index) => {
                      return (
                        <tbody key={index}>
                          <tr>
                            <td className="center">{index + 1}</td>
                            <td className="left strong">{ele?.itemName}</td>
                            <td className="left">{ele.product.description}</td>
                            <td className="right">
                              {toIndianCurrency(ele.product.csp)}
                            </td>
                            <td className="center">{ele.quantity}</td>
                            <td className="right">
                              {toIndianCurrency(ele.itemAmt * ele.quantity)}
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                </table>
              </div>
              <div className="row mt-3">
                <div className="invoice-text">
                  Extra note such as company or payment information...
                </div>

                <div className="total-amt-wrap">
                  <div className="bw-right-tot-pri">
                    <span className="itmname">
                      Subtotal<sub>(Inclusive of all Taxes)</sub>
                    </span>
                    <span className="itmprice">
                      ₹ {toIndianCurrency(data?.subtotal)}
                    </span>
                    {data.discountAmount !== null && (
                      <>
                        <span className="itmname">
                          Discount({data?.discount}%)
                        </span>
                        <span className="itmprice">
                          {"-"} ₹ {toIndianCurrency(data?.discountAmount)}
                        </span>
                      </>
                    )}
                    {/* <span className="itmname">Gst (10%)</span>
                    <span className="itmprice">₹ {toIndianCurrency(2250)}</span> */}
                    <span className="itmname">Total</span>
                    <span className="itmprice">
                      ₹ {toIndianCurrency(data?.amount)}
                    </span>
                  </div>
                </div>
              </div>
              <hr />
              <div>
                <span class="text-secondary-d1 text-105">
                  Thank you for your business Coolstop
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invoice;
