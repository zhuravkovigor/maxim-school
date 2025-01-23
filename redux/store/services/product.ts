import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Fruiet = string;

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "./db.json" }),
  endpoints: (builder) => ({
    getFruites: builder.query<Fruiet[], void>({
      query: () => "",
    }),
  }),
});

export const { useGetFruitesQuery } = productApi;
