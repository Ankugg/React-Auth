import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userAuthApi = createApi({
  reducerPath: "userAuthApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8800/api" }),
  endpoints: (buildlder) => ({
    registerUser: buildlder.mutation({
      query: (user) => {
        return {
          url: "register",
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),

    loginUser: buildlder.mutation({
      query: (user) => {
        return {
          url: "login",
          method: "POST",
          body: user,
          headers: {
            "content-type": "application/json",
          },
        };
      },
    }),
    sendPasswordResetEmail: buildlder.mutation({
      query: (user) => {
        return {
          url: "sendmail",
          method: "POST",
          body: user,
          headers: {
            "content-type": "application/json",
          },
        };
      },
    }),

    resetPassword: buildlder.mutation({
      query: (actualData, id, token) => {
        return {
          url: `resetpassword/:${id}/:${token}`,
          method: "POST",
          body: actualData,
          headers: {
            "content-type": "application/json",
          },
        };
      },
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useSendPasswordResetEmailMutation,
  useResetPasswordMutation
} = userAuthApi;
