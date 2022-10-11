import useModal from "../../../hooks/useModal";
import Button from "../../Button";
import { MessageWrapper, Wrapper } from "./style";

export interface AlertModalProps {
  message: string;
  confirmText?: string;
  handleConfirm?: (...arg: any[]) => any;
}

export default function AlertModal({
  message,
  confirmText = "확인",
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
