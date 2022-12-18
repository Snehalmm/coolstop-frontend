import MyAccountList from "./MyAccountList";
import Loader from "../Common/Loader";

const PendingOrderTable = ({ pendingData, pageName, isLoading }) => {
  return (
    <>
      <section className="grid-container">
        <div className="ac-page-lyt">
          <MyAccountList />
          <div className="ac-page-dash-tit">
            <h3 className="dash-tit">
              {" "}
              {pageName === "/pending-orders"
                ? "Pending Orders "
                : "Paid Orders "}
            </h3>
          </div>

          {isLoading ? (
            <div className="loading">
              <Loader height={110} width={110} />
            </div>
          ) : pendingData?.attributes?.orders?.length == 0 ? (
            <>
              <table>
                <thead>
                  <tr>
                    <th className="text-center">No Order No. Found</th>
                  </tr>
                </thead>
              </table>
            </>
          ) : (
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
                  {pendingData?.attributes?.orders !== null &&
                    pendingData?.attributes?.orders?.length > 0 &&
                    pendingData?.attributes?.orders.map((item, i) => {
                      return (
                        <tr key={i}>
                          <td data-label="Order Nos." className="tabel_sty">
                            <a href="#">CS-{item.id}</a>
                          </td>
                          <td data-label="Order Date">October 8, 2021</td>
                          <td data-label="Amount" className="tabel_sty">
                            ₹ {item?.amount}
                          </td>

                          <td data-label="Status">
                            {pageName === "/pending-orders" &&
                            item?.orderStatus == "pending" ? (
                              <>
                                {item?.orderStatus}{" "}
                                <a
                                  className="ac-cont-butt"
                                  href="https://www.buildworld.co.uk/user/payment_process/29966"
                                >
                                  Pay Now
                                </a>
                              </>
                            ) : (
                              <>{item?.paymentStatus}</>
                            )}
                          </td>
                          <td data-label="Invoice">
                            <a
                              href="#"
                              target="_blank"
                              className="ac-cont-butt"
                            >
                              View Invoice
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          )}
        </div>
        {/* <div className="prod-bott-pagi">
          <nav aria-label="Pagination">
            <ul className="pagination">
              <li className="pagination-previous disabled">
                <span className="show-for-sr">page</span>
              </li>
              <li className="current">
                <span className="show-for-sr">You're on page</span> 1
              </li>
              <li>
                <a href="#" aria-label="Page 2">
                  2
                </a>
              </li>
              <li>
                <a href="#" aria-label="Page 3">
                  3
                </a>
              </li>
              <li>
                <a href="#" aria-label="Page 4">
                  4
                </a>
              </li>
              <li className="pagination-next">
                <span href="#" aria-label="Next page">
                  <span className="show-for-sr">page</span>
                </span>
              </li>
            </ul>
          </nav>
        </div> */}
      </section>
    </>
  );
};

export default PendingOrderTable;
