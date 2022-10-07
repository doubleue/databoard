import { atom } from "recoil";
import { MODAL_TYPES } from "../components/Modal";
import { AlertModalProps } from "../components/Modal/AlertModal";

export interface AlertModalType {
  modalType: typeof MODAL_TYPES.AlertModal;
  modalProps: AlertModalProps;
}

export type ModalType = AlertModalType;

export const modalState = atom<ModalType | null>({
  key: "modalState",
  default: null,
});
