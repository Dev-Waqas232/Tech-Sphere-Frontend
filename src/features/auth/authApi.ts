import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../utils/fetchBaseQuery";
import { ApiResponse, LoginResponse } from "../../types";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery,
  endpoints: (builder) => ({
    signup: builder.mutation<
      ApiResponse<LoginResponse>,
      { username: string; email: string; password: string }
    >({
      query: (credentials) => ({
        url: "/auth/signup",
        method: "POST",
        body: credentials,
      }),
    }),
    signin: builder.mutation<
      ApiResponse<LoginResponse>,
      { email: string; password: string }
    >({
      query: (credentials) => ({
        url: "/auth/signin",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useSignupMutation, useSigninMutation } = authApi;
