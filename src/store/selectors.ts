import { RootState } from '.';

export const selectContactSearchQuery = (state: RootState) =>
  state.search.contactSearchQuery;
export const selectActiveModal = (state: RootState) => state.modal.activeModal;
