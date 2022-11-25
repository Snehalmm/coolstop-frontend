/**
 */

import { useState } from "react";
import { token, serverUrl } from "./config";
import axios from "axios";

const requestHeaders = () => {
  return {
    Authorization: `Bearer ${token}`,
  };
};

/**
  * GET API hook that manages the state for loading, error, data and exposes sendHTTPGetRequest to execute API call.
  * This hooks acts as a Facade layer on top of axios and manages appending of headers and exception handling.
  * @example
  * // Initialising states with alias
    const {
     isLoading: balanceSheetLoading,
     error: balanceSheetError,
     data: balanceSheetData,
     sendHTTPGetRequest: balanceSheetAPI,
   } = useWDGetApi();
 
   // Function that invokes API call
   const getBalanceSheet = () => {
     balanceSheetAPI(
       apiService.balanceSheetEndpoint(symbol),
       balanceSheetSuccessHandler,
       balanceSheetErrorHandler
     );
   };
 
   const balanceSheetSuccessHandler = (data) => {
     // add what needs to be done when data successfully received
   };
 
   const balanceSheetErrorHandler = (data) => {
     // add what needs to be done when API throws error
   };
 
   React.useEffect(() => {
     // invoking API call
     getBalanceSheet();
   }, []);
  * 
  * @return {Object} { isLoading, error, data, sendHTTPGetRequest }
  */
const usePostApi = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const sendHTTPPostRequest = async (
    url,
    data,
    onSuccessHandler,
    onErrorHandler
  ) => {
    setIsLoading(true);
    return await axios({
      method: "POST",
      url: serverUrl + url,
      data: data,
      headers: requestHeaders(),
    })
      .then((response) => {
        setIsLoading(false);
        if (response.status === 200) {
          if (onSuccessHandler) {
            onSuccessHandler(response.data);
          }
          setData(response.data);
        } else {
          setError(response.data);
          onErrorHandler(response.data);
        }
      })
      .catch((err) => {
        if (onErrorHandler) {
          onErrorHandler(err);
        }

        setIsLoading(false);
        setError(err);
      });
  };

  return { isLoading, error, data, sendHTTPPostRequest };
};

export default usePostApi;
