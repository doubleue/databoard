import useModal from "../../../hooks/useModal";
import Button from "../../Button";
import { ButtonWrapper, MessageWrapper, Wrapper } from "./style";

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
        <Button onClick={onConfirm}>{confirmText}</Button>
        <Button onClick={onCancel} variant="text">
          {closeText}
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
}
