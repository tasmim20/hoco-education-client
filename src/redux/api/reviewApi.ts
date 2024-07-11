import { baseApi } from "./baseApi";

const reviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createReview: build.mutation({
      query: (data) => ({
        url: "/reviews",
        method: "POST",
        contentType: "application/json",
        data,
      }),
    }),
    getAllReview: build.query({
      query: () => ({
        url: "/reviews",
        method: "GET",
      }),
      providesTags: ["reviews"],
    }),
  }),
  overrideExisting: false,
});
export const { useGetAllReviewQuery, useCreateReviewMutation } = reviewApi;
