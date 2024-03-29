import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Path } from "../../utils/config";

const Navbar = ({ categories }) => {
  const [hoverMenu, setHoverMenu] = useState(null);
  const router = useRouter();
  const showMenu = (value) => {
    setHoverMenu(value);
  };
  const hideMenu = (value) => {
    setHoverMenu(value);
  };

  // const getBrandName = (name) => {
  //   router.push(`/products/${name}`);
  // };

  return (
    <>
      <div className="top-four-sec">
        <div className="top-four-3">
          <section className="top-third">
            <nav className="csmenu-container">
              <div className="grid-container">
                <div className="csmenu">
                  <a href="#" className="csmenu-mobile"></a>
                  <ul>
                    {categories?.data.map((item, i) => {
                      return (
                        <li
                          key={i}
                          className={`csmenu-dropdown-icon ${
                            hoverMenu === item?.attributes?.name
                              ? "hovered"
                              : ""
                          }`}
                          onMouseEnter={() => showMenu(item?.attributes?.name)}
                          onMouseLeave={() => hideMenu(null)}
                        >
                          <a href="#">{item?.attributes?.name}</a>
                          <ul
                            id="cs-menu-bar"
                            style={{
                              display:
                                hoverMenu === item?.attributes?.name
                                  ? "block"
                                  : "none",
                            }}
                          >
                            <li>
                              <span>Brands</span>
                              <ul>
                                {item?.attributes?.brands.data.map(
                                  (brand, el) => {
                                    return (
                                      <li key={el}>
                                        <Link
                                          href={`/products?acType=${item?.attributes?.slug}&brand=${brand?.attributes.value}`}
                                        >
                                          {brand?.attributes.name}
                                        </Link>
                                      </li>
                                    );
                                  }
                                )}
                              </ul>
                            </li>

                            <li>
                              <span>tonnage</span>
                              <ul>
                                {item?.attributes?.tonnages.data.map(
                                  (tonnage, elm) => {
                                    return (
                                      <li key={elm}>
                                        <Link
                                          href={`products?acType=${item?.attributes?.slug}&tonnage=${tonnage?.attributes.value}`}
                                        >
                                          {tonnage?.attributes.name}
                                        </Link>
                                      </li>
                                    );
                                  }
                                )}
                              </ul>
                            </li>

                            <li>
                              <span>ideal Room Size</span>
                              <ul>
                                {item?.attributes?.room_sizes.data.map(
                                  (idealRoomSize, ele) => {
                                    return (
                                      <li key={ele}>
                                        <Link
                                          href={`products?acType=${item?.attributes?.slug}&roomSize=${idealRoomSize?.attributes.value}`}
                                        >
                                          {idealRoomSize?.attributes.size}
                                        </Link>
                                      </li>
                                    );
                                  }
                                )}
                              </ul>
                            </li>
                          </ul>
                        </li>
                      );
                    })}
                    <li>
                      <a href="#"> AC Servicing </a>
                    </li>{" "}
                    {/* <li style={{ margin: '0 10px' }}>
                      <Link href="/products"> All Products </Link>
                    </li> */}
                  </ul>
                </div>
                <a className="wha-app-con" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                      d="M256.064 0h-.128C114.784 0 0 114.816 0 256c0 56 18.048 107.904 48.736 150.048l-31.904 95.104 98.4-31.456C155.712 496.512 204 512 256.064 512 397.216 512 512 397.152 512 256S397.216 0 256.064 0z"
                      fill="#4caf50"
                    />
                    <path
                      d="M405.024 361.504c-6.176 17.44-30.688 31.904-50.24 36.128-13.376 2.848-30.848 5.12-89.664-19.264-75.232-31.168-123.68-107.616-127.456-112.576-3.616-4.96-30.4-40.48-30.4-77.216s18.656-54.624 26.176-62.304c6.176-6.304 16.384-9.184 26.176-9.184 3.168 0 6.016.16 8.576.288 7.52.32 11.296.768 16.256 12.64 6.176 14.88 21.216 51.616 23.008 55.392 1.824 3.776 3.648 8.896 1.088 13.856-2.4 5.12-4.512 7.392-8.288 11.744-3.776 4.352-7.36 7.68-11.136 12.352-3.456 4.064-7.36 8.416-3.008 15.936 4.352 7.36 19.392 31.904 41.536 51.616 28.576 25.44 51.744 33.568 60.032 37.024 6.176 2.56 13.536 1.952 18.048-2.848 5.728-6.176 12.8-16.416 20-26.496 5.12-7.232 11.584-8.128 18.368-5.568 6.912 2.4 43.488 20.48 51.008 24.224 7.52 3.776 12.48 5.568 14.304 8.736 1.792 3.168 1.792 18.048-4.384 35.52z"
                      fill="#fafafa"
                    />
                  </svg>{" "}
                  Support: +91-7977011911
                </a>
              </div>
            </nav>
          </section>
        </div>
      </div>
    </>
  );
};

export default Navbar;
