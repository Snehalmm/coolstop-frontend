import React from "react";
import MyAccountList from "./MyAccountList";

const PendingOrderTable = () => {
  return (
    <>
      <section className="grid-container">
        <div className="ac-page-lyt">
          <MyAccountList />
          <div className="ac-page-dash-tit">
            <h3 className="dash-tit">Pending Orders</h3>
          </div>

          <div className="prev-ord-lis">
            <table className="responsive-card-table unstriped">
              <thead>
                <tr>
                  <th>Order Nos.</th>
                  <th className="tabel_sty">Order Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Invoice</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Order Nos." className="tabel_sty">
                    <a href="#">CS-45674</a>
                  </td>
                  <td data-label="Order Date">October 8, 2021</td>
                  <td data-label="Amount" className="tabel_sty">
                    ₹ 9.65
                  </td>
                  <td data-label="Status">
                    Pending{" "}
                    <a
                      className="ac-cont-butt"
                      href="https://www.buildworld.co.uk/user/payment_process/29966"
                    >
                      Pay Now
                    </a>
                  </td>
                  <td data-label="Invoice">
                    <a href="#" target="_blank" className="ac-cont-butt">
                      View Invoice
                    </a>
                  </td>
                </tr>
                <tr>
                  <td data-label="Order Nos." className="tabel_sty">
                    <a href="#">CS-45604</a>
                  </td>
                  <td data-label="Order Date">October 8, 2021</td>
                  <td data-label="Amount" className="tabel_sty">
                    ₹ 7.17
                  </td>
                  <td data-label="Status">
                    Pending{" "}
                    <a
                      className="ac-cont-butt"
                      href="https://www.buildworld.co.uk/user/payment_process/29966"
                    >
                      Pay Now
                    </a>
                  </td>
                  <td data-label="Invoice">
                    <a href="#" target="_blank" className="ac-cont-butt">
                      View Invoice
                    </a>
                  </td>
                </tr>

                <tr>
                  <td data-label="Order Nos." className="tabel_sty">
                    <a href="#">CS-92</a>
                  </td>
                  <td data-label="Order Date">August 18, 2017</td>
                  <td data-label="Amount" className="tabel_sty">
                    ₹ 7.03
                  </td>
                  <td data-label="Status">
                    Pending{" "}
                    <a
                      className="ac-cont-butt"
                      href="https://www.buildworld.co.uk/user/payment_process/29966"
                    >
                      Pay Now
                    </a>
                  </td>
                  <td data-label="Invoice">
                    <a href="#" target="_blank" className="ac-cont-butt">
                      View Invoice
                    </a>
                  </td>
                </tr>
                <tr>
                  <td data-label="Order Nos." className="tabel_sty">
                    <a href="#">CS-45674</a>
                  </td>
                  <td data-label="Order Date">October 8, 2021</td>
                  <td data-label="Amount" className="tabel_sty">
                    ₹ 9.65
                  </td>
                  <td data-label="Status">
                    Pending{" "}
                    <a
                      className="ac-cont-butt"
                      href="https://www.buildworld.co.uk/user/payment_process/29966"
                    >
                      Pay Now
                    </a>
                  </td>
                  <td data-label="Invoice">
                    <a href="#" target="_blank" className="ac-cont-butt">
                      View Invoice
                    </a>
                  </td>
                </tr>
                <tr>
                  <td data-label="Order Nos." className="tabel_sty">
                    <a href="#">CS-45604</a>
                  </td>
                  <td data-label="Order Date">October 8, 2021</td>
                  <td data-label="Amount" className="tabel_sty">
                    ₹ 7.17
                  </td>
                  <td data-label="Status">
                    Pending{" "}
                    <a
                      className="ac-cont-butt"
                      href="https://www.buildworld.co.uk/user/payment_process/29966"
                    >
                      Pay Now
                    </a>
                  </td>
                  <td data-label="Invoice">
                    <a href="#" target="_blank" className="ac-cont-butt">
                      View Invoice
                    </a>
                  </td>
                </tr>

                <tr>
                  <td data-label="Order Nos." className="tabel_sty">
                    <a href="#">CS-92</a>
                  </td>
                  <td data-label="Order Date">August 18, 2017</td>
                  <td data-label="Amount" className="tabel_sty">
                    ₹ 7.03
                  </td>
                  <td data-label="Status">
                    Pending{" "}
                    <a
                      className="ac-cont-butt"
                      href="https://www.buildworld.co.uk/user/payment_process/29966"
                    >
                      Pay Now
                    </a>
                  </td>
                  <td data-label="Invoice">
                    <a href="#" target="_blank" className="ac-cont-butt">
                      View Invoice
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default PendingOrderTable;
