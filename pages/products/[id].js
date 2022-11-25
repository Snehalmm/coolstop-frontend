import React, { useState, useEffect } from "react";
import Features from "../../components/Home/Features";
import { productDetailBreadcrumb } from "../../utils/data/breadcrumbs";
import Breadcrumbs from "../../components/Common/Breadcrumbs";
import ProductSlide from "../../components/Product/Details/ProductSlide";
import SpecificationTable from "../../components/Product/SpecificationTable";
import RelatedProducts from "../../components/Product/Details/RelatedProducts";
import { useRouter } from "next/router";
import useGetApi from "../../utils/useGetApi";
import { productDetailsEndpoint } from "../../utils/apiService";

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const {
    isLoading: productDetailsLoading,
    error: productDetailsError,
    data: productDetailsData,
    sendHTTPGetRequest: productDetailsApi,
  } = useGetApi();

  useEffect(() => {
    productDetailsApi(productDetailsEndpoint(id));
  }, [id]);

  return (
    <>
      {productDetailsData !== null && (
        <>
          <Breadcrumbs data={productDetailBreadcrumb} />
          <ProductSlide
            data={productDetailsData.data.attributes}
            item={productDetailsData.data}
          />
          <SpecificationTable data={productDetailsData.data.attributes} />
          <RelatedProducts />
          <Features />
        </>
      )}
    </>
  );
};

export default ProductDetails;
