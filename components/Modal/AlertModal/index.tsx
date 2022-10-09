import useModal from "../../../hooks/useModal";
import { Button, MessageWrapper, Wrapper } from "./style";

export interface AlertModalProps {
  message: string;
  confirmText?: string;
  handleClose?: (...arg: any[]) => any;
  handleConfirm?: (...arg: any[]) => any;
}

export default function AlertModal({
  message,
  confirmText = "확인",
  handleClose,
  handleConfirm,
}: AlertModalProps) {
  const { closeModal } = useModal();

  const onConfirm = async () => {
    if (handleConfirm) {
      await handleConfirm();
    }
    closeModal();
  };

  return (
    <Wrapper>
      <MessageWrapper>{message}</MessageWrapper>
      <Button onClick={onConfirm}>{confirmText}</Button>
    </Wrapper>
  );
}
