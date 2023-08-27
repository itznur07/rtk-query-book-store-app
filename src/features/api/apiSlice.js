import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000/",
  }),
  tagTypes: ["Books"],
  endpoints: (builder) => ({
    /** Get Books Endpoints */
    getBooks: builder.query({
      query: () => ({
        url: "books",
      }),
      providesTags: ["Books"],
    }),
    /** Add Book Endpoints */
    addBook: builder.mutation({
      query: (data) => ({
        url: "books",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Books"],
    }),
  }),
});

export const { useGetBooksQuery, useAddBookMutation } = apiSlice;
