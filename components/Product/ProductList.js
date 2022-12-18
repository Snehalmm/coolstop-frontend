import Filters from "../Common/Filters";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../../stores/slices/filterSlice";
import { toIndianCurrency } from "../../utils/services";
import { serverUrl } from "../../utils/config";
import StarRating from "../Product/StarRating";
import { useRouter } from "next/router";
import { deleteFromStorage } from "../../utils/storage";
import Loader from "../Common/Loader";
// import Pagination from "../Common/Pagination";
// import { paginate } from "../../utils/paginate";
// import ReactPaginate from "react-paginate";

const Products = ({
  totalProductCount,
  data,
  defaultPriceData,
  filterData,
  setFilteredProductList,
  loading,
  setOffset,
  offset,
  setCount,
  count,
}) => {
  const router = useRouter();

  const dispatch = useDispatch();
  const sortFilter = useSelector((state) => state.filter.sortFilter);
  const PageCountDropDown = [10, 20, 30, 40];
  const productDropDownCount = (e) => {
    setOffset(0);
    setCount(Number(e.target.value));
    delete router.query.offset;

    let url = {
      pathname: router.pathname,
      query: { ...router.query, count: e.target.value },
    };

    router.push(url, undefined, {
      shallow: true,
    });
  };
  useEffect(() => {
    deleteFromStorage("orderDetails");
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    let url = {};

    if (value !== "") {
      dispatch(filterActions.addsort(value));
      url = {
        pathname: router.pathname,
        query: {
          ...router.query,
          sort: value,
        },
      };
    } else {
      delete router.query.sort;
      url = {
        pathname: router.pathname,
        query: {
          ...router.query,
        },
      };
      dispatch(filterActions.addsort(""));
    }
    router.push(url, undefined, {
      shallow: true,
    });
  };

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
    // router.push(`/products?count=${offset}&offset=${offset * newCount}`);
    // console.log(
    //   router,
    // );
    // if (offset >= 10) {
    //   // if (router.asPath === `/products`) {
    //   router.push(`/products?offset=${offset * (newCount - 1)}`);
    //   // }
    //   if (router.asPath === `/products?count=${offset}`) {
    //     router.push(
    //       `/products?count=${offset}&offset=${
    //         offset * (newCount - 1)
    //       }`
    //     );
    //   }
    // }
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
      // setCount(newCount);

      // router.push(`/products?count=${offset}&offset=${offset * newCount}`);
      // if (offset >= 10) {
      //   if (
      //     router.asPath === `/products` ||
      //   ) {
      //     router.push(`offset=${offset * (newCount - 1)}`);
      //   } else {
      //     router.push(
      //       `/products?count=${offset}&offset=${
      //         offset * (newCount - 1)
      //       }`
      //     );
      //   }
      // }
      // if (offset >= 10) {
      //   if (
      //     router.asPath !==
      //     "/products?start=0&limit=10&acType=split&brand=daikin"
      //   ) {
      //     router.push({
      //       href: "/products",
      //       query: `count=${offset}&offset=${
      //         offset * (newCount - 1)
      //       }`,
      //     });
      //   }
      // }
    }
  };

  useEffect(() => {
    // if (offset !== 10) {
    //   if (
    //     router.asPath !== "/products?start=0&limit=10&acType=split&brand=daikin"
    //   ) {
    //     router.push({
    //       href: "/products",
    //       query: `count=${offset}`,
    //     });
    //   }
    //   // setCount(1);
    // }
    // if (count !== 1) {
    //   if (
    //     router.asPath !== "/products?start=0&limit=10&acType=split&brand=daikin"
    //   ) {
    //     router.push({
    //       href: "/products",
    //       query: `offset=${count}`,
    //     });
    //   }
    // }
  }, [offset]);

  const totalPageCount = Math.ceil(Number(totalProductCount) / Number(count));
  const currentPage = offset / count + 1;
  const countList = PageCountDropDown.filter(
    (item) => Number(totalProductCount) > item
  );

  return (
    <>
      <section className="grid-container">
        <div className="prodlist-parent">
          <div className="prodlist-filter">
            <Filters
              data={defaultPriceData}
              filterData={filterData}
              setFilteredProductList={setFilteredProductList}
            />
          </div>

          <div className="prodlist-child">
            <div className="pagi-con">
              <div className="pagicon-1">
                <div className="pro-count">
                  <p>
                    <span>{data?.length}</span> Products
                  </p>
                </div>
              </div>
              <div className="pagicon-2"></div>
              <div className="pagicon-3">
                <div className="pagi-selec">
                  <select
                    name="sortByProducts"
                    // id="sortBy"
                    value={sortFilter[0]}
                    onChange={handleChange}
                  >
                    <option value="" selected={sortFilter[0] == ""}>
                      Sort By
                    </option>
                    <option
                      value="topSeller"
                      selected={sortFilter[0] == "topSeller"}
                    >
                      Top Seller
                    </option>
                    <option
                      value="csp%3Aasc"
                      selected={sortFilter[0] == "csp%3Aasc"}
                    >
                      Low To High
                    </option>
                    <option
                      value="csp%3Adesc"
                      selected={sortFilter[0] == "csp%3Adesc"}
                    >
                      High To Low
                    </option>
                  </select>
                  <div className="pagicon-3">
                    <div className="pagi-selec">
                      <select
                        name="sortByProducts"
                        onChange={productDropDownCount}
                      >
                        {PageCountDropDown.slice(0, countList.length + 1).map(
                          (data, i) => {
                            return <option key={i}>{data}</option>;
                          }
                        )}
                      </select>
                      {/* <span className="result-width"> */}
                      {"  "}{" "}
                      <b className="result-width">
                        Out of {totalProductCount} results
                      </b>
                      {/* </span> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="pagicon-4">
                <div className="pagi-selec">
                  <nav aria-label="Pagination">
                    <ul className="pagination">
                      {/* <li className="pagination-previous">
                        <div className="pagicon-3">
                          <div className="pagi-selec">
                            <select
                              name="sortByProducts"
                              onChange={productDropDownCount}
                            >
                              {PageCountDropDown.map((data, i) => {
                                return <option key={i}>{data}</option>;
                              })}
                            </select>{" "}
                            <b>{totalProductCount}</b>
                          </div>
                        </div>
                      </li> */}

                      {totalPageCount > 1 && (
                        <>
                          <li
                            className="pagination-previous disabled"
                            onClick={() => prevCount(currentPage - 1)}
                          >
                            <span className="show-for-sr">page</span>
                          </li>
                          <li className="current">
                            <span className="show-for-sr">You're on page</span>{" "}
                            {currentPage}
                          </li>
                          <li className="pagination-next">
                            <span
                              aria-label="Next page"
                              onClick={() => nextCount(currentPage + 1)}
                            >
                              <span className="show-for-sr">page</span>
                            </span>
                          </li>
                        </>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="pagicon-5">
                <span className="pag-num">
                  Page {currentPage} of {totalPageCount}
                </span>
              </div>
            </div>
            {loading ? (
              <div className="loading">
                <Loader height={100} width={100} />
              </div>
            ) : (
              <div className="pro-card-con">
                {data?.length > 0 ? (
                  data?.map((item, index) => {
                    let productImage =
                      item?.attributes?.productImages !== null &&
                      item.attributes?.productImages?.image?.data !== null
                        ? serverUrl +
                          item?.attributes?.productImages?.image.data[0]
                            .attributes.url
                        : null;

                    let brandImage =
                      item?.attributes?.brand?.data !== null
                        ? serverUrl +
                          item?.attributes?.brand?.data?.attributes.image.data
                            .attributes.url
                        : null;

                    return (
                      item.attributes.publishedAt !== null && (
                        <div className="prod-card" key={index}>
                          <Link
                            href={`/products/${item.attributes.slug}`}
                            as={`/products/${item.attributes.slug}`}
                          >
                            {productImage !== null && (
                              <figure>
                                <Image
                                  height="286"
                                  width="286"
                                  src={productImage}
                                  alt="Product Title"
                                />
                              </figure>
                            )}
                          </Link>

                          <div className="prod-details">
                            <div className="prod-details-1">
                              <a href="#">
                                {brandImage !== null && (
                                  <Image
                                    height="100"
                                    width="100"
                                    src={brandImage}
                                    alt="image"
                                  />
                                )}
                              </a>
                            </div>
                            <div className="prod-details-2">
                              <h2>
                                <a href="#">{item.attributes.name}</a>
                              </h2>
                            </div>
                            <div className="prod-details-3">
                              <span className="slp">
                                ₹{toIndianCurrency(item.attributes.csp)}
                              </span>
                              <span className="mrp">
                                <s>₹{toIndianCurrency(item.attributes.mrp)}</s>
                              </span>
                            </div>
                            <div className="prod-details-4">
                              <span className="b-rating">
                                <StarRating
                                  count={5}
                                  size={25}
                                  value={item.attributes.reviewStar}
                                  disabled={true}
                                  activeColor={"#FFA534"}
                                  inactiveColor={"#ddd"}
                                />
                              </span>
                            </div>
                            <div className="prod-details-5">
                              <span className="emi">
                                No Cost EMI | Standard EMI From ₹ 1,188
                              </span>
                            </div>
                          </div>
                        </div>
                      )
                    );
                  })
                ) : (
                  <h4
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      margin: "20px",
                    }}
                  >
                    Product Not Found
                  </h4>
                )}
              </div>
            )}

            {/* <Pagination
              items={data?.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            /> */}

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
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
