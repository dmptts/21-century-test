import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';
import {
  closeModal as closeModalAction,
  openModal as openModalAction,
} from './../store/modalSlice';
import { selectActiveModal } from '../store/selectors';

export const useModal = () => {
  const dispatch = useAppDispatch();
  const activeModal = useAppSelector(selectActiveModal);

  const handleEscPress = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      dispatch(closeModalAction());
    }
  };

  const openModal = (name: string, data?: unknown) => {
    dispatch(openModalAction({ name, data }));
    window.addEventListener('keydown', handleEscPress);
    return;
  };

  const closeModal = () => {
    dispatch(closeModalAction());
    window.removeEventListener('keydown', handleEscPress);
    return;
  };

  return { activeModal, openModal, closeModal };
};
