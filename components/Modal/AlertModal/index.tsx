import useModal from "../../../hooks/useModal";

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
  const { hideModal } = useModal();

  // const onClose = () => {
  //   if (handleClose) {
  //     handleClose();
  //   }
  //   hideModal();
  // };

  const onConfirm = async () => {
    if (handleConfirm) {
      await handleConfirm();
    }
    hideModal();
  };

  return (
    <>
      <p>{message}</p>
      <button onClick={onConfirm}>{confirmText}</button>
    </>
  );
}
