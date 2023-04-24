import MyAccountList from "./MyAccountList";
import Loader from "../Common/Loader";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";
import Moment from "moment";
import { useState } from "react";
import Invoice from "../home/InvoiceB";
import { toIndianCurrency } from "../../utils/services";

const PendingOrderTable = ({
  pendingData,
  pageName,
  isLoading,
  totalOrderCount,
  setCount,
  count,
  offset,
  setOffset,
}) => {
  const router = useRouter();
  const [openInvoice, setOpenInvoice] = useState(false);
  const totalPageCount = Math.ceil(Number(totalOrderCount) / Number(count));
  const currentPage = offset / count + 1;
  // const countList = PageCountDropDown.filter(
  //   (item) => Number(totalOrderCount) > item
  // );

  const nextCount = (pageNumber) => {
    let newCount = (pageNumber - 1) * count;
    // setCount(newCount);
    setOffset(newCount);
    let url = {
      pathname: router.pathname,
      query: { ...router.query, offset: newCount },
    };

    router.push(url, undefined, {
      shallow: true,
    });
  };

  const prevCount = (pageNumber) => {
    if (count >= 1) {
      let newCount = (pageNumber - 1) * count;

      setOffset(newCount);
      let url = {
        pathname: router.pathname,
        query: { ...router.query, offset: newCount },
      };

      router.push(url, undefined, {
        shallow: true,
      });
    }
  };

  const handlePageClick = (event) => {
    let newCount = event.selected * count;

    setOffset(newCount);
    let url = {
      pathname: router.pathname,
      query: { ...router.query, offset: newCount },
    };

    router.push(url, undefined, {
      shallow: true,
    });
  };
  const [saveData, setSaveData] = useState();

  const handleOpenInvoice = (item) => {
    setOpenInvoice(true);
    setSaveData(item);
  };

  return (
    <>
      <section className="grid-container">
        <div className="ac-page-lyt">
          <MyAccountList />
          <div className="ac-page-dash-tit">
            <h3 className="dash-tit">
              {" "}
              {pageName === "/pending-orders"
                ? "Pending / Delievery Orders "
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
                    {pageName !== "/pending-orders" && <th>Invoice</th>}
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
                          <td data-label="Order Date">
                            {Moment(item?.createdAt).format("MMM DD, YYYY")}
                          </td>
                          <td data-label="Amount" className="tabel_sty">
                            ₹ {toIndianCurrency(item?.amount)}
                          </td>

                          <td data-label="Status">
                            {pageName === "/pending-orders" &&
                            item?.orderStatus == "pending" ? (
                              <>
                                {item?.orderStatus}{" "}
                                {item?.paymentStatus !== "paid" && (
                                  <a className="ac-cont-butt" href="#">
                                    Pay Now
                                  </a>
                                )}
                              </>
                            ) : (
                              <>{item?.paymentStatus}</>
                            )}
                          </td>
                          {pageName !== "/pending-orders" && (
                            <td data-label="Invoice">
                              <button
                                href="#"
                                target="_blank"
                                className="ac-cont-butt"
                                onClick={() => handleOpenInvoice(item)}
                              >
                                View Invoice
                              </button>
                            </td>
                          )}
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          )}
        </div>
        {totalPageCount > 1 && (
          <div className="prod-bott-pagi pending-order-bott-pagi">
            {/* <nav aria-label="Pagination"> */}
            <ReactPaginate
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              pageCount={totalPageCount}
              previousLabel="< "
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
              renderOnZeroPageCount={null}
            />
            {/* <ul className="pagination">
              <li
                className={`pagination-previous disabled ${
                  currentPage == "1" && "disabled-button"
                }`}
                onClick={() => nextCount(currentPage - 1)}
              >
                <span className="show-for-sr">page</span>
              </li>
              {Array(totalPageCount)
                .fill(1)
                .map((item, index) => {
                  return (
                    <>
                      {" "}
                      {currentPage == index + 1 ? (
                        <li className={`${currentPage}current`}>
                          <span className="show-for-sr">You're on page</span>{" "}
                          {currentPage}
                        </li>
                      ) : (
                        <li>
                          <a href="#" aria-label="Page 2">
                            {index + 1}
                          </a>
                        </li>
                      )}
                    </>
                  );
                })}

              <li
                className={`pagination-next ${
                  totalPageCount == currentPage && "disabled-button"
                } `}
                onClick={() => nextCount(currentPage + 1)}
              >
                <span href="#" aria-label="Next page">
                  <span className="show-for-sr">page</span>
                </span>
              </li>
            </ul> */}
            {/* </nav> */}
          </div>
        )}
        {/* <ReactPaginate
          nextLabel=" >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          pageCount={totalPageCount}
          previousLabel="< "
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        /> */}

        {openInvoice && (
          <Invoice
            openInvoice={openInvoice}
            setOpenInvoice={setOpenInvoice}
            data={saveData}
          />
        )}
      </section>
    </>
  );
};

export default PendingOrderTable;
