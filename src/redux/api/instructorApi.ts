import { baseApi } from "./baseApi";

const instructorsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createInstructor: build.mutation({
      query: (data) => ({
        url: "/instructors",
        method: "POST",
        contentType: "application/json",
        data,
      }),
      invalidatesTags: ["instructors"],
    }),
    getInstructor: build.query({
      query: () => ({
        url: "/instructors",
        method: "GET",
      }),
      providesTags: ["instructors"],
    }),
    updateInstructor: build.mutation({
      query: ({ id, data }) => ({
        url: `/instructors/${id}`,
        method: "PUT",
        contentType: "application/json",
        body: data,
      }),
      invalidatesTags: ["instructors"],
    }),
    deleteInstructor: build.mutation({
      query: (id) => ({
        url: `/instructors/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["instructors"],
    }),
  }),
  overrideExisting: true,
});
export const {
  useCreateInstructorMutation,
  useGetInstructorQuery,
  useUpdateInstructorMutation,
  useDeleteInstructorMutation,
} = instructorsApi;
