import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../utils/fetchBaseQuery";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery,
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (credentials) => ({
        url: "/auth/sigup",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useSignupMutation } = authApi;
