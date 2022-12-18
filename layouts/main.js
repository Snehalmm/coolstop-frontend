import { useEffect } from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import useGetApi from "../utils/useGetApi";
import { Path } from "../utils/apiService";
import { token } from "../utils/config";

const Main = ({ children, title, data }) => {
  const {
    isLoading: getCategoriesLoding,
    error: getCategorieserror,
    data: getCategoriesData,
    sendHTTPGetRequest: getCategoriesApi,
  } = useGetApi();

  const {
    isLoading: getHeaderLoding,
    error: getHeaderError,
    data: getHeaderData,
    sendHTTPGetRequest: getHeaderApi,
  } = useGetApi();

  useEffect(() => {
    getCategoriesApi(`${Path.getProductcategories}`, token);
    getHeaderApi(`${Path.global}`, token);
  }, []);

  return (
    <div className="layout-container">
      <Header
        seoData={data}
        categories={getCategoriesData}
        getGlobalData={getHeaderData}
      />
      <main>{children}</main>
      <Footer getGlobalData={getHeaderData} />
    </div>
  );
};

export default Main;
