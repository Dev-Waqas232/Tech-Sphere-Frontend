import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../utils/fetchBaseQuery";
import { ApiResponse } from "../../types";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery,
  endpoints: (builder) => ({
    addProduct: builder.mutation<ApiResponse, FormData>({
      query: (data) => ({
        url: "/products/create",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAddProductMutation } = productApi;
