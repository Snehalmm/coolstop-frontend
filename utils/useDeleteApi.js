/**
 * @module hooks/useWDGetApi
 */

import { useState } from "react";

import { token, serverUrl } from "./config";
import axios from "axios";
import { Path } from "./apiService";

const requestHeaders = () => {
  return {
    Authorization: `Bearer ${token}`,
  };
};

const useDeleteApi = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const sendHTTPDeleteRequest = async (
    url,
    onSuccessHandler,
    onErrorHandler
  ) => {
    setIsLoading(true);
    return await axios({
      method: "DELETE",
      url: serverUrl + url,
      headers: requestHeaders(),
    })
      .then((response) => {
        setIsLoading(false);

        if (response.status === 200) {
          setData(response.data);

          if (onSuccessHandler) {
            onSuccessHandler(response.data);
          }
        } else {
          setError(response.data);
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
  return { isLoading, error, data, sendHTTPDeleteRequest };
};

export default useDeleteApi;
