import Features from "../../components/Home/Features";
import ProductList from "../../components/Product/ProductList";
import { productsBreadcrumb } from "../../utils/data/breadcrumbs";
import Breadcrumbs from "../../components/Common/Breadcrumbs";
import useGetApi from "../../utils/useGetApi";
import { useEffect } from "react";
import { Path } from "../../utils/apiService";

const Index = () => {
  const {
    isLoading: productListLoading,
    error: productListError,
    data: productListData,
    sendHTTPGetRequest: productListApi,
  } = useGetApi();

  useEffect(() => {
    productListApi(Path.products, productListData);
  }, []);

  return (
    <>
      {productListData !== null && (
        <>
          <Breadcrumbs data={productsBreadcrumb} />
          <ProductList data={productListData.data} />
          <Features />
        </>
      )}
    </>
  );
};

export default Index;
