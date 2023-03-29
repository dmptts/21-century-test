import { RootState } from '.';

export const selectSearchQuery = (state: RootState) => state.search.searchQuery;
