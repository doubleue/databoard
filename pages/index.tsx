import type { NextPage } from "next";
import MainLayout from "../components/layout/MainLayout";
import useModal from "../hooks/useModal";

const Home: NextPage = () => {
  const { openModal } = useModal();

  const handleClickAlertModal = () => {
    openModal({
      modalType: "AlertModal",
      modalProps: {
        message: "Success!",
      },
    });
  };
  return (
    <MainLayout title="Home" seoTitle="Home">
      Home
      <button onClick={handleClickAlertModal}>Alert Modal</button>
    </MainLayout>
  );
};

export default Home;
