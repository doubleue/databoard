import { useRecoilState } from "recoil";
import useModal from "../../hooks/useModal";
import { modalState } from "../../recoil/modal";

import { Body, Fade } from "./style";

import AlertModal from "./AlertModal";
import TwoButtonModal from "./TwoButtonModal";

export const MODAL_TYPES = {
  Alert: "Alert",
  TwoButton: "TwoButton",
} as const;

const MODAL_COMPONENTS: any = {
  [MODAL_TYPES.Alert]: AlertModal,
  [MODAL_TYPES.TwoButton]: TwoButtonModal,
};

export default function Modal() {
  const { modalType, modalProps } = useRecoilState(modalState)[0] || {};
  const { closeModal } = useModal();

  const renderComponent = () => {
    if (!modalType) {
      return null;
    }
    const Component = MODAL_COMPONENTS[modalType];

    return (
      <Fade onClick={closeModal}>
        <Body onClick={(e) => e.stopPropagation()}>
          <Component {...modalProps} />
        </Body>
      </Fade>
    );
  };

  return <>{renderComponent()}</>;
}
