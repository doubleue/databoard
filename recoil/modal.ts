import { atom } from "recoil";
import { v1 } from "uuid";
import { MODAL_TYPES } from "../components/Modal";
import { AlertModalProps } from "../components/Modal/AlertModal";
import { TwoButtonProps } from "../components/Modal/TwoButtonModal";

interface IAlertModal {
  modalType: typeof MODAL_TYPES.Alert;
  modalProps: AlertModalProps;
}

interface ITwoButtonModal {
  modalType: typeof MODAL_TYPES.TwoButton;
  modalProps: TwoButtonProps;
}

export type ModalType = IAlertModal | ITwoButtonModal;

export const modalState = atom<ModalType | null>({
  key: `modalState/${v1()}`,
  default: null,
});
