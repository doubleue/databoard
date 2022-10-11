import type { NextPage } from "next";
import Button from "../components/Button";
import MainLayout from "../components/layout/MainLayout";
import useModal from "../hooks/useModal";

const Home: NextPage = () => {
  const { openModal } = useModal();

  const handleClickAlertModal = () => {
    openModal({
      modalType: "Alert",
      modalProps: {
        message: "Success!",
      },
    });
  };

  const handleClickTwoButtonModal = () => {
    openModal({
      modalType: "TwoButton",
      modalProps: {
        message: "Success!",
      },
    });
  };

  return (
    <MainLayout title="Home" seoTitle="Home">
      <div>
        <Button onClick={handleClickAlertModal}>Alert Modal</Button>
        <br />
        <br />
        <Button onClick={handleClickTwoButtonModal}>TwoButton Modal</Button>
      </div>
    </MainLayout>
  );
};

export default Home;
