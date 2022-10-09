import { atom } from "recoil";
import { MODAL_TYPES } from "../components/Modal";
import { AlertModalProps } from "../components/Modal/AlertModal";
import { TwoButtonProps } from "../components/Modal/TwoButtonModal";

export interface AlertModalType {
  modalType: typeof MODAL_TYPES.Alert;
  modalProps: AlertModalProps;
}

export interface TwoButtonModalType {
  modalType: typeof MODAL_TYPES.TwoButton;
  modalProps: TwoButtonProps;
}

export type ModalType = AlertModalType | TwoButtonModalType;

export const modalState = atom<ModalType | null>({
  key: "modalState",
  default: null,
});
