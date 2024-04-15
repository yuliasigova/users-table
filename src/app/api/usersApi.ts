import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {API_URL} from "../types";

export const usersApi = createApi({
    reducerPath: 'userAPI',
    tagTypes: ['Users', 'Foods'],
    baseQuery: fetchBaseQuery({
        baseUrl: `${API_URL}`,
    }),
    endpoints: builder => ({
        getUsers: builder.query({
            query: (param) => {
                const {sort, UserSearch} = param
                return {
                    url: `index`,
                    params: {sort, ...UserSearch}
                }
            },
            providesTags: (result, error, arg) => ['Users']
        }),

        getProfile: builder.query({
            query: (id) =>({
                url: `/view?id=${id}`
            }),
            // providesTags: (result, error, arg) => [{ type: 'Users', id:arg}]
            providesTags: ['Users']
        }),

        addProfile: builder.mutation({
            query: (body) => ({
                url: 'create',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Users']
        }),

        deleteProfile: builder.mutation({
            query: (id) => ({
                url: `delete?id=${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Users']
        }),

        updateUser: builder.mutation({
            query: (body) => {
                const {id, formData} = body
                return {
                    url: `update?id=${id}`,
                    method: 'PUT',
                    body: formData,
                }
            },
            invalidatesTags: (result, error, arg) => [{ type: 'Users', id: arg }]
        }),
        getFoodList: builder.query({
            query: () =>`get-food-list`,
            providesTags: ['Foods']
        }),

    })
})

export const { useGetUsersQuery,
    useGetProfileQuery,
    useDeleteProfileMutation,
    useGetFoodListQuery,
    useAddProfileMutation,
    useUpdateUserMutation} = usersApi
