import { baseApi } from "./baseApi";

const courseApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createCourse: build.mutation({
      query: (data) => ({
        url: "/courses",
        method: "POST",
        contentType: "application/json",
        data,
      }),
    }),
    getAllCourse: build.query({
      query: () => ({
        url: "/courses",
        method: "GET",
      }),
      providesTags: ["courses"],
    }),
  }),
  overrideExisting: false,
});
export const { useCreateCourseMutation, useGetAllCourseQuery } = courseApi;
