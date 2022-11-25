import Filters from "../Common/Filters";
import Image from "next/image";
import Link from "next/link";
import { toIndianCurrency } from "../../utils/services";
const Products = ({ data }) => {
  return (
    <>
      <section className="grid-container">
        <div className="prodlist-parent">
          <div className="prodlist-filter">
            <Filters />
          </div>

          <div className="prodlist-child">
            <div className="pagi-con">
              <div className="pagicon-1">
                <div className="pro-count">
                  <p>
                    <span>253</span> Products
                  </p>
                </div>
              </div>
              <div className="pagicon-2"></div>
              <div className="pagicon-3">
                <div className="pagi-selec">
                  <select name="" id="">
                    <option value="sort-by">Sort By</option>
                    <option value="top-seller">Top Seller</option>
                    <option value="low-high">Low To High</option>
                    <option value="high-low">High To Low</option>
                  </select>
                </div>
              </div>
              <div className="pagicon-4">
                <div className="pagi-selec">
                  <nav aria-label="Pagination">
                    <ul className="pagination">
                      <li className="pagination-previous disabled">
                        <span className="show-for-sr">page</span>
                      </li>
                      <li className="current">
                        <span className="show-for-sr">You're on page</span> 1
                      </li>
                      <li className="pagination-next">
                        <a href="#" aria-label="Next page">
                          <span className="show-for-sr">page</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="pagicon-5">
                <span className="pag-num">Page 1 of 2</span>
              </div>
            </div>

            <div className="pro-card-con">
              {data &&
                data.map((item, index) => (
                  <div className="prod-card" key={index}>
                    <Link
                      href={`/products/${item.id}`}
                      as={`/products/${item.id}`}
                    >
                      <figure>
                        <Image
                          height="286"
                          width="286"
                          src="/images/prod-image.jpg"
                          alt="Product Title"
                        />
                      </figure>
                    </Link>

                    <div className="prod-details">
                      <div className="prod-details-1">
                        <a href="#">
                          <Image
                            height="100"
                            width="100"
                            src="/images/brand-small-logo.jpg"
                            alt="image"
                          />
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
                          <Image
                            height="100"
                            width="100"
                            src="/images/star-rating.jpg"
                            alt="Rating"
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
                ))}
            </div>

            <div className="prod-bott-pagi">
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
                    <a href="#" aria-label="Next page">
                      <span className="show-for-sr">page</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
