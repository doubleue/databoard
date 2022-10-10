import type { NextPage } from "next";
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
      Home
      <div>
        <button onClick={handleClickAlertModal}>Alert Modal</button>
        <button onClick={handleClickTwoButtonModal}>TwoButton Modal</button>
      </div>
    </MainLayout>
  );
};

export default Home;
