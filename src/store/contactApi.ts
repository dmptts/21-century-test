import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../config';
import { IContact } from '../types/contact';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getContactList: builder.query<
      IContact[],
      { pageIndex: number; searchQuery?: string }
    >({
      query: ({ pageIndex = 1, searchQuery = '' }) =>
        `contacts?&_sort=first_name,last_name&_limit=10&_page=${pageIndex}`,
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
  }),
});

export const { useGetContactListQuery } = contactApi;