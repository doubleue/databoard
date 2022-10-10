import useModal from "../../../hooks/useModal";
import {
  ButtonWrapper,
  CancelButton,
  ConfirmButton,
  MessageWrapper,
  Wrapper,
} from "./style";

export interface TwoButtonProps {
  message: string;
  confirmText?: string;
  closeText?: string;
  handleConfirm?: (...arg: any[]) => any;
  handleClose?: (...arg: any[]) => any;
}

export default function TwoButtonModal({
  message,
  confirmText = "확인",
  closeText = "닫기",
  handleConfirm,
  handleClose,
}: TwoButtonProps) {
  const { closeModal } = useModal();

  const onConfirm = async () => {
    if (handleConfirm) {
      await handleConfirm();
    }
    closeModal();
  };

  const onCancel = async () => {
    if (handleClose) {
      await handleClose();
    }
    closeModal();
  };

  return (
    <Wrapper>
      <MessageWrapper>{message}</MessageWrapper>
      <ButtonWrapper>
        <ConfirmButton onClick={onConfirm}>{confirmText}</ConfirmButton>
        <CancelButton onClick={onCancel}>{closeText}</CancelButton>
      </ButtonWrapper>
    </Wrapper>
  );
}
