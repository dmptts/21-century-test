import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../config';
import { IContact } from '../types/contact';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  tagTypes: ['Contacts'],
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getContactList: builder.query<
      IContact[],
      { pageIndex?: number; pageSize?: number; searchQuery?: string } | void
    >({
      query: (params) =>
        `contacts?_sort=first_name,last_name${
          params?.searchQuery && `&q=${params.searchQuery}`
        }${params?.pageSize && `&_limit=${params.pageSize}`}${
          params?.pageIndex &&
          `&_page=${params.searchQuery ? '1' : params.pageIndex}`
        }`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Contacts' as const, id })),
              { type: 'Contacts', id: 'LIST' },
            ]
          : [{ type: 'Contacts', id: 'LIST' }],
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newItems, queryArgs) => {
        if (
          queryArgs.arg?.pageIndex &&
          queryArgs.arg?.pageIndex > 1 &&
          !queryArgs.arg?.searchQuery
        ) {
          currentCache.push(...newItems);
        } else {
          return newItems;
        }
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    addContact: builder.mutation({
      query: (body) => ({
        url: 'contacts',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: [{ type: 'Contacts', id: 'LIST' }],
    }),
    updateContact: builder.mutation<
      IContact,
      Partial<IContact> & Pick<IContact, 'id'>
    >({
      query: ({ id, ...patch }) => ({
        url: `contacts/${id}`,
        method: 'PATCH',
        body: patch,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactListQuery,
  useAddContactMutation,
  useUpdateContactMutation,
} = contactApi;
