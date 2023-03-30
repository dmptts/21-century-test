import { RootState } from '.';

export const selectContactSearchQuery = (state: RootState) =>
  state.search.contactSearchQuery;
