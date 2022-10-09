import { useRecoilState } from "recoil";
import useModal from "../../hooks/useModal";
import { modalState } from "../../recoil/modal";
import AlertModal from "./AlertModal";
import { Body, Fade } from "./style";

export const MODAL_TYPES = {
  AlertModal: "AlertModal",
} as const;

const MODAL_COMPONENTS: any = {
  [MODAL_TYPES.AlertModal]: AlertModal,
};

export default function Modal() {
  const { modalType, modalProps } = useRecoilState(modalState)[0] || {};
  const { closeModal } = useModal();

  const renderComponent = () => {
    if (!modalType) {
      return null;
    }
    const ModalComponent = MODAL_COMPONENTS[modalType];

    return (
      <>
        <Fade onClick={closeModal}>
          <Body onClick={(e) => e.stopPropagation()}>
            <ModalComponent {...modalProps} />
          </Body>
        </Fade>
      </>
    );
  };

  return <>{renderComponent()}</>;
}
