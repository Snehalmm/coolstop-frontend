import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../../stores/slices/filterSlice";
import { useRouter } from "next/router";

const Filters = ({ data, filterData, setFilteredProductList }) => {
  const router = useRouter();

  const dispatch = useDispatch();
  const brandFilter = useSelector((state) => state.filter.brandFilter);
  const priceFilter = useSelector((state) => state.filter.priceFilter);
  const acTechnologyFilter = useSelector(
    (state) => state.filter.acTechnologyFilter
  );
  const acTypeFilter = useSelector((state) => state.filter.acTypeFilter);
  const acFeatureFilter = useSelector((state) => state.filter.acFeatureFilter);
  const powerCunsumptionFilter = useSelector(
    (state) => state.filter.powerCunsumptionFilter
  );
  const starRatingFilter = useSelector(
    (state) => state.filter.starRatingFilter
  );
  const tonnageFilter = useSelector((state) => state.filter.tonnageFilter);
  const roomSizeFilter = useSelector((state) => state.filter.roomSizeFilter);
  const sortFilter = useSelector((state) => state.filter.sortFilter);
  const {
    brands,
    roomSizes,
    powerCunsumption,
    tonnages,
    productCategories,
    acTechnologies,
    acFeatures,
    starRatings,
    price,
  } = filterData;

  //this handle for brand filter
  const handleChange = (e) => {
    const { value, checked } = e.target;
    let url = {};
    if (checked) {
      url = {
        pathname: router.pathname,
        query: { ...router.query, brand: [...brandFilter, value].join("+") },
      };
      dispatch(filterActions.addBrandFilter(value));
      dispatch(filterActions.createCommonFilter());
    } else {
      let brandFilterArray = router?.query?.brand
        ?.split("+")
        .filter(function (item) {
          return item !== value;
        });
      if (brandFilterArray.length === 0) {
        setFilteredProductList(null);

        delete router.query.brand;
        url = {
          pathname: router.pathname,
          query: { ...router.query },
        };
      } else {
        url = {
          pathname: router.pathname,
          query: { ...router.query, brand: brandFilterArray.join("+") },
        };
      }
      dispatch(filterActions.removeBrandFilter(value));
      dispatch(filterActions.createCommonFilter());
    }

    router.push(url, undefined, {
      shallow: true,
    });
  };

  //  this handle for roomsize filter
  const handleRoomSizeFilter = (e) => {
    const { value, checked } = e.target;
    let url = {};
    if (checked) {
      url = {
        pathname: router.pathname,
        query: {
          ...router.query,
          roomSize: [...roomSizeFilter, value].join("+"),
        },
      };
      dispatch(filterActions.addRoomSizeFilter(value));
      dispatch(filterActions.createCommonFilter());
    } else {
      let roomSizeFilterArray = router?.query?.roomSize
        ?.split("+")
        .filter(function (item) {
          return item !== value;
        });
      if (roomSizeFilterArray.length === 0) {
        setFilteredProductList(null);
        delete router.query.roomSize;
        url = {
          pathname: router.pathname,
          query: { ...router.query },
        };
      } else {
        url = {
          pathname: router.pathname,
          query: { ...router.query, roomSize: roomSizeFilterArray.join("+") },
        };
      }
      dispatch(filterActions.removeRoomSizeFilter(value));
      dispatch(filterActions.createCommonFilter());
    }

    router.push(url, undefined, {
      shallow: true,
    });
  };

  // this handle for tonnage filter
  const handleTonnageFilter = (e) => {
    const { value, checked } = e.target;
    let url = {};
    if (checked) {
      url = {
        pathname: router.pathname,
        query: {
          ...router.query,
          tonnage: [...tonnageFilter, value].join("+"),
        },
      };
      dispatch(filterActions.addTonnageFilter(value));
      dispatch(filterActions.createCommonFilter());
    } else {
      let tonnageFilterArray = router?.query?.tonnage
        ?.split("+")
        .filter(function (item) {
          return item !== value;
        });
      if (tonnageFilterArray.length === 0) {
        setFilteredProductList(null);

        delete router.query.tonnage;
        url = {
          pathname: router.pathname,
          query: { ...router.query },
        };
      } else {
        url = {
          pathname: router.pathname,
          query: { ...router.query, tonnage: tonnageFilterArray.join("+") },
        };
      }
      dispatch(filterActions.removeTonnageFilter(value));
      dispatch(filterActions.createCommonFilter());
    }

    router.push(url, undefined, {
      shallow: true,
    });
  };

  // this handle for star rating filter
  const handleStarRatingFilter = (e) => {
    const { value, checked } = e.target;
    let url = {};
    if (checked) {
      url = {
        pathname: router.pathname,
        query: {
          ...router.query,
          starRating: [...starRatingFilter, value].join("+"),
        },
      };
      dispatch(filterActions.addStarRatingFilter(value));
      dispatch(filterActions.createCommonFilter());
    } else {
      let starRatingFilterArray = router?.query?.starRating
        ?.split("+")
        .filter(function (item) {
          return item !== value;
        });
      if (starRatingFilterArray.length === 0) {
        setFilteredProductList(null);

        delete router.query.starRating;
        url = {
          pathname: router.pathname,
          query: { ...router.query },
        };
      } else {
        url = {
          pathname: router.pathname,
          query: {
            ...router.query,
            starRating: starRatingFilterArray.join("+"),
          },
        };
      }
      dispatch(filterActions.removeStarRatingFilter(value));
      dispatch(filterActions.createCommonFilter());
    }

    router.push(url, undefined, {
      shallow: true,
    });
  };

  // this handle for Power Cunsumption Filter
  const handlePowerCunFilter = (e) => {
    const { value, checked } = e.target;
    let url = {};
    if (checked) {
      url = {
        pathname: router.pathname,
        query: {
          ...router.query,
          powerCunsumption: [...powerCunsumptionFilter, value].join("+"),
        },
      };
      dispatch(filterActions.addPowerCunFilter(value));
      dispatch(filterActions.createCommonFilter());
    } else {
      let powerCunsumptionFilterArray = router?.query?.powerCunsumption
        ?.split("+")
        .filter(function (item) {
          return item !== value;
        });
      if (powerCunsumptionFilterArray.length === 0) {
        setFilteredProductList(null);

        delete router.query.powerCunsumption;
        url = {
          pathname: router.pathname,
          query: { ...router.query },
        };
      } else {
        url = {
          pathname: router.pathname,
          query: {
            ...router.query,
            powerCunsumption: powerCunsumptionFilterArray.join("+"),
          },
        };
      }
      dispatch(filterActions.removePowerCunFilter(value));
      dispatch(filterActions.createCommonFilter());
    }

    router.push(url, undefined, {
      shallow: true,
    });
  };

  // this handle for Ac Feature Filter
  const handleAcFeatureFilter = (e) => {
    const { value, checked } = e.target;
    let url = {};
    if (checked) {
      url = {
        pathname: router.pathname,
        query: {
          ...router.query,
          acFeatures: [...acFeatureFilter, value].join("+"),
        },
      };
      dispatch(filterActions.addAcFeatureFilter(value));
      dispatch(filterActions.createCommonFilter());
    } else {
      let acFeaturesFilterArray = router?.query?.acFeatures
        ?.split("+")
        .filter(function (item) {
          return item !== value;
        });
      if (acFeaturesFilterArray.length === 0) {
        setFilteredProductList(null);

        delete router.query.acFeatures;
        url = {
          pathname: router.pathname,
          query: { ...router.query },
        };
      } else {
        url = {
          pathname: router.pathname,
          query: { ...router.query, acFeatures: acFeatureFilter.join("+") },
        };
      }
      dispatch(filterActions.removeAcFeatureFilter(value));
      dispatch(filterActions.createCommonFilter());
    }

    router.push(url, undefined, {
      shallow: true,
    });
  };

  // this handle for AC Type filter
  const handleAcType = (e) => {
    const { value, checked } = e.target;
    let url = {};
    if (checked) {
      url = {
        pathname: router.pathname,
        query: { ...router.query, acType: [...acTypeFilter, value].join("+") },
      };
      dispatch(filterActions.addAcTypeFilter(value));
      dispatch(filterActions.createCommonFilter());
    } else {
      let acTypeFilterArray = router?.query?.acType
        ?.split("+")
        .filter(function (item) {
          return item !== value;
        });
      if (acTypeFilterArray.length === 0) {
        setFilteredProductList(null);

        delete router.query.acType;
        url = {
          pathname: router.pathname,
          query: { ...router.query },
        };
      } else {
        url = {
          pathname: router.pathname,
          query: { ...router.query, acType: acTypeFilterArray.join("+") },
        };
      }
      dispatch(filterActions.removeAcTypeFilter(value));
      dispatch(filterActions.createCommonFilter());
    }

    router.push(url, undefined, {
      shallow: true,
    });
  };

  // this handle for AC Technology
  const handleAcTechnology = (e) => {
    const { value, checked } = e.target;
    let url = {};
    if (checked) {
      url = {
        pathname: router.pathname,
        query: {
          ...router.query,
          acTechnology: [...acTechnologyFilter, value].join("+"),
        },
      };
      dispatch(filterActions.addAcTechnologiesFilter(value));
      dispatch(filterActions.createCommonFilter());
    } else {
      let actechnoFilterArray = router?.query?.acTechnology
        ?.split("+")
        .filter(function (item) {
          return item !== value;
        });

      if (actechnoFilterArray.length === 0) {
        setFilteredProductList(null);

        delete router.query.acTechnology;
        url = {
          pathname: router.pathname,
          query: { ...router.query },
        };
      } else {
        url = {
          pathname: router.pathname,
          query: {
            ...router.query,
            acTechnology: actechnoFilterArray.join("+"),
          },
        };
      }
      dispatch(filterActions.removeAcTechnologiesFilter(value));
      dispatch(filterActions.createCommonFilter());
    }

    router.push(url, undefined, {
      shallow: true,
    });
  };

  const onchangeHandle = (id) => {
    const elem = document.getElementById(id);
    let elements = elem?.classList.contains("is-active");
    var targetDiv = document
      .getElementById(id)
      .getElementsByClassName("accordion-content")[0];

    if (elements) {
      elements = elem?.classList.remove("is-active");
      targetDiv.style.display = "none";
    } else {
      elements = elem?.classList.add("is-active");
      targetDiv.style.display = "block";
    }
  };

  const getPrice = () => {
    return data?.map((item) => Number(item.attributes.csp));
  };

  let getMinValue = Math.min.apply(Math, getPrice());
  let getMaxValue = Math.max.apply(Math, getPrice());

  let getDifferance = (getMaxValue - getMinValue) / 3;

  let fistRange =
    getMinValue + " - " + "₹ " + Math.floor(getMinValue + getDifferance);
  let secondRange =
    Math.floor(getMinValue + getDifferance) +
    " - " +
    ("₹ " + Math.floor(getMinValue + getDifferance + getDifferance));
  let thirdRange =
    Math.floor(getMinValue + getDifferance + getDifferance) +
    " - " +
    ("₹ " +
      Math.floor(getMinValue + getDifferance + getDifferance + getDifferance));

  // const priceRange = [fistRange, secondRange, thirdRange];
  const rangeData = [
    {
      name: fistRange,
      minValue: getMinValue,
      maxValue: getMinValue + getDifferance,
    },
    {
      name: secondRange,
      minValue: getMinValue + getDifferance,
      maxValue: getMinValue + getDifferance + getDifferance,
    },
    {
      name: thirdRange,
      minValue: getMinValue + getDifferance + getDifferance,
      maxValue: getMinValue + getDifferance + getDifferance + getDifferance,
    },
  ];

  const [storepriceData, setStorepriceData] = useState(null);

  const handlePriceRange = (e, min, max) => {
    const { checked } = e.target;

    let url = {};
    if (checked) {
      url = {
        pathname: router.pathname,
        query: {
          ...router.query,
          price: min + "-" + max,
        },
      };
      dispatch(filterActions.addPriceRangeFilter({ min, max }));
      dispatch(filterActions.createCommonFilter());
    } else {
      dispatch(filterActions.removePriceRangeFilter({ min, max }));
      dispatch(filterActions.createCommonFilter());
    }

    router.push(url, undefined, {
      shallow: true,
    });
  };

  // useEffect(() => {

  //   if (JSON.stringify(storepriceData) === JSON.stringify(priceFilter)) {
  //     // dispatch(filterActions.removePriceRangeFilter());
  //   }
  // }, [storepriceData, priceFilter]);

  const handleClearFilter = (e) => {
    router.push("/products");
    setFilteredProductList(null);
    dispatch(filterActions.clearFilter());
  };

  return (
    <>
      <section>
        <div className="filt-con">
          <div className="filt-clall">
            <span className="filt-tit">Filters</span>
            <a className="cl-all" onClick={handleClearFilter}>
              Clear All
            </a>
          </div>

          <ul
            className="accordion boxes"
            data-accordion
            data-multi-expand="true"
            data-allow-all-closed="true"
          >
            <li
              className="accordion-item  is-active"
              data-accordion-item
              id="brands"
            >
              {" "}
              <a
                className="accordion-title "
                onClick={() => onchangeHandle("brands")}
              >
                Brand
              </a>
              <div
                className="accordion-content"
                data-tab-content
                style={{ display: "block" }}
              >
                <ul>
                  {brands.map((item, i) => {
                    return (
                      <li key={item.id}>
                        <div>
                          <input
                            type="checkbox"
                            value={item.value}
                            id={`fil_brand-${i + 1}`}
                            // checked={
                            //   brandFilter
                            //     .map((item) => item.toLowerCase())
                            //     ?.includes(`${item.value}`)
                            //     ? true
                            //     : false
                            // }
                            checked={
                              brandFilter.filter((ele) => ele === item.value)
                                .length > 0
                                ? true
                                : false
                            }
                            onChange={handleChange}
                          />
                          <label htmlFor={`fil_brand-${i + 1}`}>
                            {item.name}
                          </label>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
            <li
              className="accordion-item is-active"
              data-accordion-item
              id="pricerange"
            >
              <a
                className="accordion-title"
                name="tools"
                onClick={() => onchangeHandle("pricerange")}
              >
                Price Range
              </a>
              <div
                className="accordion-content"
                data-tab-content
                style={{ display: "block" }}
              >
                <ul>
                  {rangeData.map((item, index) => {
                    return (
                      <li key={index}>
                        <input
                          type="radio"
                          id={`pri_range-${index + 1}`}
                          name="price-name"
                          value={`${item.minValue} , ${item.maxValue}`}
                          checked={
                            priceFilter.min == item.minValue &&
                            priceFilter.max == item.maxValue
                          }
                          onChange={(e) =>
                            handlePriceRange(e, item.minValue, item.maxValue)
                          }
                        />
                        <label htmlFor={`pri_range-${index + 1}`}>
                          {" "}
                          {item.name}
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
            <li
              className="accordion-item is-active"
              data-accordion-item
              id="roomsize"
            >
              {" "}
              <a
                className="accordion-title"
                onClick={() => onchangeHandle("roomsize")}
              >
                Room Size
              </a>
              <div
                className="accordion-content"
                data-tab-content
                style={{ display: "block" }}
              >
                <ul>
                  {roomSizes.map((item, i) => {
                    return (
                      <li key={i}>
                        <input
                          type="checkbox"
                          value={item.value}
                          id={`rum_siz-${i + 1}`}
                          onClick={handleRoomSizeFilter}
                          checked={
                            roomSizeFilter.filter((ele) => ele === item.value)
                              .length > 0
                              ? true
                              : false
                          }
                        />
                        <label htmlFor={`rum_siz-${i + 1}`}>{item.size}</label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
            <li
              className="accordion-item is-active"
              data-accordion-item
              id="actechnology"
            >
              {" "}
              <a
                name="actechnology"
                className="accordion-title"
                onClick={() => onchangeHandle("actechnology")}
              >
                AC Technology
              </a>
              <div
                className="accordion-content"
                data-tab-content
                style={{ display: "block" }}
              >
                <ul>
                  {acTechnologies.map((item, i) => {
                    return (
                      <li key={i}>
                        <input
                          type="checkbox"
                          value={item.value}
                          id={`ac-tec-${i + 1}`}
                          onClick={handleAcTechnology}
                          checked={
                            acTechnologyFilter.filter(
                              (ele) => ele === item.value
                            ).length > 0
                              ? true
                              : false
                          }
                        />
                        <label htmlFor={`ac-tec-${i + 1}`}>{item.name}</label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
            <li
              className="accordion-item is-active"
              data-accordion-item
              id="actype"
            >
              {" "}
              <a
                name="actype"
                className="accordion-title"
                onClick={() => onchangeHandle("actype")}
              >
                AC Type
              </a>
              <div
                className="accordion-content"
                data-tab-content
                style={{ display: "block" }}
              >
                <ul>
                  {productCategories.map((item, i) => {
                    return (
                      <li key={i}>
                        <input
                          type="checkbox"
                          value={item.slug}
                          id={`ac-typ-${i + 1}`}
                          onClick={handleAcType}
                          checked={
                            acTypeFilter.filter((ele) => ele === item.slug)
                              .length > 0
                              ? true
                              : false
                          }
                        />
                        <label htmlFor={`ac-typ-${i + 1}`}>{item.name}</label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
            <li
              className="accordion-item is-active"
              data-accordion-item
              id="starrating"
            >
              {" "}
              <a
                name="starrating"
                className="accordion-title"
                onClick={() => onchangeHandle("starrating")}
              >
                Star Rating
              </a>
              <div
                className="accordion-content"
                data-tab-content
                style={{ display: "block" }}
              >
                <ul>
                  {starRatings.map((item, i) => (
                    <li key={i}>
                      <input
                        type="checkbox"
                        value={item.value}
                        id={`sta-rat-${i + 1}`}
                        onClick={handleStarRatingFilter}
                        checked={
                          starRatingFilter.filter((ele) => ele === item.value)
                            .length > 0
                            ? true
                            : false
                        }
                      />
                      <label htmlFor={`sta-rat-${i + 1}`}>{item.name}</label>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li
              className="accordion-item  is-active"
              data-accordion-item
              id="tonnage"
            >
              {" "}
              <a
                name="tonnage"
                className="accordion-title"
                onClick={() => onchangeHandle("tonnage")}
              >
                Tonnage
              </a>
              <div
                className="accordion-content"
                data-tab-content
                style={{ display: "block" }}
              >
                <ul>
                  {tonnages.map((item, i) => (
                    <li key={i}>
                      <input
                        type="checkbox"
                        value={item.value}
                        id={`ton-spe-${i + 1}`}
                        onClick={handleTonnageFilter}
                        checked={
                          tonnageFilter.filter((ele) => ele === item.value)
                            .length > 0
                            ? true
                            : false
                        }
                      />
                      <label htmlFor={`ton-spe-${i + 1}`}>{item.name}</label>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li
              className=" accordion-item  is-active"
              data-accordion-item
              id="acfeatures"
            >
              {" "}
              <a
                name="acfeatures"
                className="accordion-title"
                onClick={() => onchangeHandle("acfeatures")}
              >
                AC Features
              </a>
              <div
                className="accordion-content"
                data-tab-content
                style={{ display: "block" }}
              >
                <ul>
                  {acFeatures.map((item, i) => (
                    <li key={i}>
                      <input
                        type="checkbox"
                        value={item.value}
                        id={`volts-${i + 1}`}
                        onClick={handleAcFeatureFilter}
                        checked={
                          acFeatureFilter.filter((ele) => ele === item.value)
                            .length > 0
                            ? true
                            : false
                        }
                      />
                      <label htmlFor={`volts-${i + 1}`}>{item.name}</label>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li
              className="accordion-item is-active "
              data-accordion-item
              id="power"
            >
              {" "}
              <a
                className="accordion-title"
                onClick={() => onchangeHandle("power")}
              >
                Power Cunsumption
              </a>
              <div
                className="accordion-content"
                data-tab-content
                style={{ display: "block" }}
              >
                <ul>
                  {powerCunsumption.map((item, i) => (
                    <li key={i}>
                      <input
                        type="checkbox"
                        value={item.value}
                        id={`pow-con-${i + 1}`}
                        onClick={handlePowerCunFilter}
                        checked={
                          powerCunsumptionFilter.filter(
                            (ele) => ele === item.value
                          ).length > 0
                            ? true
                            : false
                        }
                      />
                      <label htmlFor={`pow-con-${i + 1}`}>{item.name}</label>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Filters;
