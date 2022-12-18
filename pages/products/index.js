import { useState, useEffect } from "react";
import Features from "../../components/Home/Features";
import ProductList from "../../components/Product/ProductList";
import { productsBreadcrumb } from "../../utils/data/breadcrumbs";
import Breadcrumbs from "../../components/common/Breadcrumbs";
import { Path } from "../../utils/apiService";
import { serverUrl, token } from "../../utils/config";
import { NextSeo } from "next-seo";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { filterActions } from "../../stores/slices/filterSlice";

const Index = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(null);
  const [filteredProductList, setFilteredProductList] = useState(null);
  const [count, setCount] = useState(10);
  const [serverSideFlag, setServerSideFlag] = useState(false);
  const [productList, setProductList] = useState(
    props?.productList?.data?.attributes?.products?.data
  );
  const commonFilter = useSelector((state) => state.filter.commonFilter);
  const brandFilter = useSelector((state) => state.filter.brandFilter);
  const priceFilter = useSelector((state) => state.filter.priceFilter);
  const sortFilter = useSelector((state) => state.filter.sortFilter);

  const [offset, setOffset] = useState(0);

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
  const handleApiQuery = () => {
    const brand = `filters[brand][value][$eq]=${brandFilter.join(
      "&filters[brand][value][$eq]="
    )}`;

    const priceRange = `filters[csp][$between]=${priceFilter.min}&filters[csp][$between]=${priceFilter.max}`;
    const roomSize = `filters[room_sizes][value][$eq]=${roomSizeFilter.join(
      "&filters[room_sizes][value][$eq]="
    )}`;
    const acTechno = `filters[ac_technologies][value][$eq]=${acTechnologyFilter.join(
      "&filters[ac_technologies][value][$eq]="
    )}`;
    const acFeatures = `filters[ac_features][value][$eq]=${acFeatureFilter.join(
      "&filters[ac_features][value][$eq]="
    )}`;
    const acType = `filters[product_category][slug][$eq]=${acTypeFilter.join(
      "&filters[product_category][slug][$eq]="
    )}`;
    const powerCunsum = `filters[power_cunsumption][value][$eq]=${powerCunsumptionFilter.join(
      "&filters[power_cunsumption][value][$eq]="
    )}`;
    const starRating = `filters[star_rating][value][$eq]=${starRatingFilter.join(
      "&filters[star_rating][value][$eq]="
    )}`;
    const tonnage = `filters[tonnage][value][$eq]=${tonnageFilter.join(
      "&filters[tonnage][value][$eq]="
    )}`;

    const sort = `sort=${sortFilter}`;
    const topSeller = `filters[${sortFilter}]=true`;

    let newFinal = `?${brandFilter.length > 0 ? brand : ""}${
      roomSizeFilter.length > 0 ? `&${roomSize}` : ""
    }${acTechnologyFilter.length > 0 ? `&${acTechno}` : ""}${
      acTypeFilter.length > 0 ? `&${acType}` : ""
    }${acFeatureFilter.length > 0 ? `&${acFeatures}` : ""}${
      powerCunsumptionFilter.length > 0 ? `&${powerCunsum}` : ""
    }${starRatingFilter.length > 0 ? `&${starRating}` : ""}${
      tonnageFilter.length > 0 ? `&${tonnage}` : ""
    }${Object.keys(priceFilter).length > 0 ? `&${priceRange}` : ""}${
      sortFilter.length > 0 && sortFilter[0].length > 0
        ? sortFilter[0] === "topSeller"
          ? `${topSeller}`
          : `${sort}`
        : ""
    }`;

    return newFinal;
  };

  const handleStoreApi = async () => {
    setLoading(true);
    await fetch(serverUrl + Path.products + handleApiQuery(), {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((resp) => {
        setServerSideFlag(true);
        setLoading(false);
        const productList = resp;

        setFilteredProductList(productList?.data?.attributes?.products?.data);
      });
  };

  useEffect(() => {
    if (
      roomSizeFilter.length > 0 ||
      tonnageFilter.length > 0 ||
      starRatingFilter.length > 0 ||
      powerCunsumptionFilter.length > 0 ||
      acFeatureFilter.length > 0 ||
      acTypeFilter.length > 0 ||
      acTechnologyFilter.length > 0 ||
      brandFilter.length > 0 ||
      Object.keys(priceFilter).length > 0 ||
      sortFilter.length > 0
    ) {
      handleStoreApi();
      // } else {
      // handlePush();
    }
  }, [
    roomSizeFilter,
    tonnageFilter,
    starRatingFilter,
    powerCunsumptionFilter,
    acFeatureFilter,
    acTypeFilter,
    acTechnologyFilter,
    brandFilter,
    priceFilter,
    sortFilter,
  ]);

  useEffect(() => {
    localStorage.removeItem("relatedProducts");
    localStorage.removeItem("orderDetails");
    setLoading(true);
    fetch(serverUrl + `${Path.products}?start=${offset}&limit=${count}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((resp) => {
        setLoading(false);
        const productList = resp;
        const filterData = productList?.data?.attributes?.products?.data.filter(
          (item) => {
            return item.attributes.publishedAt !== null;
          }
        );
        setProductList(filterData);
      });

    // if (
    //   router.asPath !== "/products?start=0&limit=10&acType=split&brand=daikin"
    // ) {
    //   router.push({
    //     href: "/products",
    //     query: `start=0&limit=${10}`,
    //   });
    // }
  }, [offset, count]);
  useEffect(() => {
    if (props?.brandArray.length > 0) {
      dispatch(filterActions.replaceBrandFilter(props?.brandArray));
    } else {
      dispatch(filterActions.deleteBrandFilter());
    }
  }, [props?.brandArray]);

  useEffect(() => {
    if (props?.roomSizeArray.length > 0) {
      dispatch(filterActions.replaceRoomSizeFilter(props?.roomSizeArray));
    } else {
      dispatch(filterActions.deleteRoomSizeFilter());
    }
  }, [props?.roomSizeArray]);

  useEffect(() => {
    if (props?.actechnologyArray.length > 0) {
      dispatch(filterActions.replaceactechnoFilter(props?.actechnologyArray));
    } else {
      dispatch(filterActions.deleteactechnoFilter());
    }
  }, [props?.actechnologyArray]);
  useEffect(() => {
    if (props?.actypeArray.length > 0) {
      dispatch(filterActions.replaceactypeFilter(props?.actypeArray));
    } else {
      dispatch(filterActions.deleteactypeFilter());
    }
  }, [props?.actypeArray]);

  useEffect(() => {
    if (props?.starRatingArray.length > 0) {
      dispatch(filterActions.replaceStarRatingFilter(props?.starRatingArray));
    } else {
      dispatch(filterActions.deleteStarRatingFilter());
    }
  }, [props?.starRatingArray]);

  useEffect(() => {
    if (props?.tonnageArray.length > 0) {
      dispatch(filterActions.replacetonnageFilter(props?.tonnageArray));
    } else {
      dispatch(filterActions.deletetonnageFilter());
    }
  }, [props?.tonnageArray]);
  useEffect(() => {
    if (props?.acFeaturesArray.length > 0) {
      dispatch(filterActions.replaceacFeatureFilter(props?.acFeaturesArray));
    } else {
      dispatch(filterActions.deleteacFeatureFilter());
    }
  }, [props?.acFeaturesArray]);
  useEffect(() => {
    if (props?.powerCunsumptionArray.length > 0) {
      dispatch(filterActions.replacepowerFilter(props?.powerCunsumptionArray));
    } else {
      dispatch(filterActions.deletepowerFilter());
    }
  }, [props?.powerCunsumptionArray]);
  useEffect(() => {
    if (props?.priceArray?.length > 0) {
      let min = props?.priceArray[0];
      let max = props?.priceArray[1];
      dispatch(filterActions.addPriceRangeFilter({ min, max }));
    } else {
      dispatch(filterActions.deletepriceFilter());
    }
  }, [props?.priceArray]);
  useEffect(() => {
    if (props?.productList) {
      setFilteredProductList(
        props?.productList?.data?.attributes?.products?.data
      );
    }

    setServerSideFlag(true);
  }, [props]);

  useEffect(() => {
    if (props?.sortArray?.length > 0) {
      dispatch(filterActions.replaceSortFilter(props?.sortArray[0]));
      // } else {
      //   dispatch(filterActions.deleteSort());
    }
  }, [props?.sortArray]);

  return (
    <>
      <NextSeo title="Products" description="A short description goes here." />
      {productList !== null && (
        <>
          <Breadcrumbs data={productsBreadcrumb} />
          <ProductList
            data={
              filteredProductList !== null && serverSideFlag
                ? filteredProductList
                : productList
            }
            totalProductCount={props?.mainList?.data?.attributes?.count}
            loading={loading}
            setFilteredProductList={setFilteredProductList}
            defaultPriceData={props?.mainList?.data?.attributes?.products?.data}
            filterData={props?.mainList?.data?.attributes?.filter}
            setOffset={setOffset}
            offset={offset}
            setCount={setCount}
            count={count}
          />
          <Features />
        </>
      )}
    </>
  );
};
export default Index;
export async function getServerSideProps({ req, res, query }) {
  const {
    brand,
    roomSize,
    acTechnology,
    acType,
    starRating,
    tonnage,
    acFeatures,
    powerCunsumption,
    price,
    sort,
  } = query;

  let brandArray = brand?.split("+");
  let roomSizeArray = roomSize?.split("+");
  let actechnologyArray = acTechnology?.split("+");
  let actypeArray = acType?.split("+");
  let starRatingArray = starRating?.split("+");
  let tonnageArray = tonnage?.split("+");
  let acFeaturesArray = acFeatures?.split("+");
  let powerCunsumptionArray = powerCunsumption?.split("+");
  let priceArray = price?.split("-");
  let sortArray = sort?.split(" ");

  const defaultApiCall = await fetch(`${serverUrl + Path.products}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const mainList = await defaultApiCall.json();

  return {
    props: {
      mainList,
      // productList,
      brandArray: brandArray || [],
      roomSizeArray: roomSizeArray || [],
      actechnologyArray: actechnologyArray || [],
      actypeArray: actypeArray || [],
      starRatingArray: starRatingArray || [],
      tonnageArray: tonnageArray || [],
      acFeaturesArray: acFeaturesArray || [],
      powerCunsumptionArray: powerCunsumptionArray || [],
      priceArray: priceArray || [],
      sortArray: sortArray || [],

      query,
    },
  };
}
