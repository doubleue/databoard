import { useRecoilState } from "recoil";
import { modalState } from "../../recoil/modal";
import AlertModal from "./AlertModal";

export const MODAL_TYPES = {
  AlertModal: "AlertModal",
} as const;

const MODAL_COMPONENTS: any = {
  [MODAL_TYPES.AlertModal]: AlertModal,
};

export default function Modal() {
  const { modalType, modalProps } = useRecoilState(modalState)[0] || {};
  const renderComponent = () => {
    if (!modalType) {
      return null;
    }
    const ModalComponent = MODAL_COMPONENTS[modalType];

    return <ModalComponent {...modalProps} />;
  };

  return <>{renderComponent()}</>;
}
