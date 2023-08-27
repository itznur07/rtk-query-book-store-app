import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000/",
  }),
  tagTypes: ["Books", "Book"],
  endpoints: (builder) => ({
    /** Get Books Endpoints */
    getBooks: builder.query({
      query: () => ({
        url: "books",
      }),
      keepUnusedDataFor: 200,
      providesTags: ["Books"],
    }),
    /** Get Book EndPoint */
    getBook: builder.query({
      query: (id) => ({
        url: `books/${id}`,
      }),
      providesTags: (result, error, arg) => [{ type: "Book", id: arg }],
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
    /** Edit Book EndPoint */
    editBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `books/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Books", "Book"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useAddBookMutation,
  useGetBookQuery,
  useEditBookMutation,
} = apiSlice;
