import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../utils/fetchBaseQuery";
import { ApiResponse, GetProductsResponse } from "../../types";

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
    getProducts: builder.query<
      ApiResponse<GetProductsResponse>,
      {
        category?: string;
        limit?: number;
        page?: number;
      }
    >({
      query: ({ category = "", page = 1, limit = 4 }) => ({
        url: `/products?category=${category}&page=${page}&limit=${limit}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useAddProductMutation, useGetProductsQuery } = productApi;
