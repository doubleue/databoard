import { NextPage } from "next";
import MainLayout from "../../components/layout/MainLayout";

const Dashboard: NextPage<any> = ({}) => {
  return (
    <MainLayout title="Dashboard" seoTitle="Dashboard">
      Dashboard
    </MainLayout>
  );
};

export default Dashboard;
