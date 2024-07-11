// import { IMeta } from "@/types";
// import type { BaseQueryFn } from "@reduxjs/toolkit/query";
// import axios from "axios";
// import type { AxiosRequestConfig, AxiosError } from "axios";
// import { instance as axiosInstance } from "./axiosInstance";

// export const axiosBaseQuery =
//   (
//     { baseUrl }: { baseUrl: string } = { baseUrl: "" }
//   ): BaseQueryFn<
//     {
//       url: string;
//       method?: AxiosRequestConfig["method"];
//       data?: AxiosRequestConfig["data"];
//       params?: AxiosRequestConfig["params"];
//       headers?: AxiosRequestConfig["headers"];
//       meta?: IMeta;
//       contentType?: string;
//     },
//     unknown,
//     unknown
//   > =>
//   async ({ url, method, data, params, headers, contentType }) => {
//     try {
//       const result = await axiosInstance({
//         url: baseUrl + url,
//         method,
//         data,
//         params,
//         headers: {
//           ...headers,
//           "Content-Type": contentType || "application/json",
//         },
//       });
//       return { data: result.data };
//     } catch (axiosError) {
//       const err = axiosError as AxiosError;
//       return {
//         error: {
//           status: err.response?.status,
//           data: err.response?.data || err.message,
//         },
//       };
//     }
//   };

import { IMeta } from "@/types";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import axios, { AxiosRequestConfig, AxiosError } from "axios";

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<
    {
      url: string;
      method?: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      headers?: AxiosRequestConfig["headers"];
      meta?: IMeta;
      contentType?: string;
    },
    unknown,
    unknown
  > =>
  async ({ url, method = "GET", data, params, headers, contentType }) => {
    try {
      const response = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers: {
          ...headers,
          "Content-Type": contentType || "application/json",
        },
      });

      // Log the full response for debugging
      // console.log("Full Response:", response);

      if (response.data) {
        return { data: response.data };
      } else {
        console.error("No data received:", response);
        return { error: { status: response.status, data: "No data received" } };
      }
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      console.error("Axios error:", err);
      return {
        error: {
          status: err.response?.status || 500,
          data: err.response?.data || err.message,
        },
      };
    }
  };
