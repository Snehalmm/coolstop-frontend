// import Image from "next/image";
// import React from "react";
// import { useRef } from "react";
// import ReactToPrint from "react-to-print";
// import Moment from "moment";
// import { toIndianCurrency } from "../../utils/services";

// const Invoice = (props) => {
//   // const componentRef = useRef();
//   const invoiceData = props.data;

//   return (
//     <>
//       {/* <div className="print-btn">
//         <button className="button">Print/Download</button> */}
//       {/* <ReactToPrint
//           trigger={() => <button className="button">Print/Download</button>}
//           content={() => componentRef.current}
//         /> */}
//       {/* </div> */}

//       {/* <div ref={componentRef}>
//         <div className="offset-xl-2 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 "></div>
//       </div> */}
//       <div className="card">
//         <div className="card-header p-2">
//           <Image
//             src="/images/coolstop-logo.svg"
//             height={200}
//             width={200}
//             alt="logo"
//           />
//           <div className="float-right">
//             {" "}
//             <h4 className="mb-0">Invoice No. {invoiceData.id}</h4>
//             Date: {Moment(invoiceData?.createdAt).format("MMM DD, YYYY")}
//           </div>
//         </div>
//         <div className="card-body">
//           <div className="address-info">
//             <div className="col-sm-6">
//               <h5 className="text-dark mb-1">Billing Address</h5>
//               <div className="cbaddress-wrapp">
//                 <span className="cbaddress">
//                   {invoiceData.billingAddress.address1}
//                 </span>
//                 {","}
//                 <span className="cbaddress cm-line-break">
//                   {invoiceData.billingAddress.address2}
//                 </span>
//                 <span className="cbaddress ">
//                   {invoiceData.billingAddress.townOrCity}
//                 </span>
//                 {","}
//                 <span className="cbaddress">
//                   {invoiceData.billingAddress.state}
//                 </span>
//                 {","}
//                 <span className="cbaddress">
//                   {invoiceData.billingAddress.postcode}
//                 </span>
//                 <div className="cm-line-break">
//                   {/* <span className="cbaddress">
//                       {invoiceData.users_permissions_user.email}
//                     </span> */}
//                   <span className="cbaddress cm-line-break">
//                     {invoiceData.users_permissions_user.contactNo}
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div className="col-sm-6 ">
//               <h5 className="text-dark mb-1">Shipping Address</h5>
//               <div className="cbaddress-wrapp">
//                 <span className="cbaddress">
//                   {invoiceData.shippingAddress.address1}
//                 </span>
//                 {","}
//                 <span className="cbaddress cm-line-break">
//                   {invoiceData.shippingAddress.address2}
//                 </span>
//                 <span className="cbaddress ">
//                   {invoiceData.shippingAddress.townOrCity}
//                 </span>
//                 {","}
//                 <span className="cbaddress">
//                   {invoiceData.shippingAddress.state}
//                 </span>
//                 {","}
//                 <span className="cbaddress">
//                   {invoiceData.shippingAddress.postcode}
//                 </span>
//                 <div className="cm-line-break">
//                   {/* <span className="cbaddress">
//                       {invoiceData.users_permissions_user.email}
//                     </span> */}
//                   <span className="cbaddress">
//                     {invoiceData.users_permissions_user.contactNo}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="table-responsive-sm">
//             <table className="table table-striped">
//               <thead>
//                 <tr>
//                   <th className="center">Sr.No</th>
//                   <th>Item</th>
//                   <th>Description</th>
//                   <th className="right">Price</th>
//                   <th className="center">Qty</th>
//                   <th className="right">Total</th>
//                 </tr>
//               </thead>
//               {invoiceData?.itemDetails?.length > 0 &&
//                 invoiceData?.itemDetails.map((ele, index) => {
//                   return (
//                     <tbody key={index}>
//                       <tr>
//                         <td className="center">{index + 1}</td>
//                         <td className="left strong">{ele.product.name}</td>
//                         <td className="left">{ele.product.description}</td>
//                         <td className="right">{ele.product.csp}</td>
//                         <td className="center">{ele.quantity}</td>
//                         <td className="right">{ele.itemAmt}</td>
//                       </tr>
//                     </tbody>
//                   );
//                 })}
//             </table>
//           </div>
//           <div className="row mt-3">
//             <div className="invoice-text">
//               Extra note such as company or payment information...
//             </div>

//             <div style={{ display: "flex", gap: "60px", margin: "0 80%" }}>
//               <div className="bw-right-tot-pri">
//                 <span className="itmname">
//                   Subtotal<sub>(Inclusive of all Taxes)</sub>
//                 </span>
//                 <span className="itmprice">₹ {toIndianCurrency("2,250")}</span>
//                 <span className="itmname">Discount(20%)</span>
//                 <span className="itmprice">₹ {toIndianCurrency("2,250")}</span>
//                 <span className="itmname">Gst (10%)</span>
//                 <span className="itmprice">₹ {toIndianCurrency("2,250")}</span>
//                 <span className="itmname">Total</span>
//                 <span className="itmprice">₹ {toIndianCurrency("2,250")}</span>
//               </div>
//             </div>
//             {/* <div style={{ fontWeight: "bold" }}>
//                 <span>Subtotal</span>
//               </div>
//               <div>
//                 <span>$2,250</span>
//               </div>
//             <div style={{ display: "flex", gap: "50px", margin: "0 80%" }}>
//               <div style={{ fontWeight: "bold" }}>
//                 <span>Discount(20%)</span>
//               </div>
//               <div>
//                 <span>$2,250</span>
//               </div>
//             </div>

//             <div style={{ display: "flex", gap: "60px", margin: "0 80%" }}>
//               <div style={{ fontWeight: "bold" }}>
//                 {" "}
//                 <span>Gst (10%)</span>
//               </div>
//               <div>
//                 <span>$225</span>
//               </div>
//             </div>

//             <div style={{ display: "flex", gap: "60px", margin: "0 80%" }}>
//               <div style={{ fontWeight: "bold" }}>
//                 <span>Total</span>
//               </div>
//               <div>
//                 <span>$2,475</span>
//               </div>
//             </div> */}
//           </div>
//           <hr />
//           <div>
//             <span class="text-secondary-d1 text-105">
//               Thank you for your business Coolstop
//             </span>
//           </div>
//         </div>
//         {/* <div className="card-footer bg-white">
//           <p className="mb-0">Coolstop</p>
//         </div> */}
//       </div>
//     </>
//   );
// };

// export default Invoice;
