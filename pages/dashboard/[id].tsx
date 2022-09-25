import { GetServerSideProps, NextPage } from "next";
import DnDTest from "../../components/DnDTest";
import MainLayout from "../../components/layout/MainLayout";
import { ISideBarItem } from "../../types/side-bar";

interface DashboardProps extends ISideBarItem {}

const Dashboard: NextPage<any> = ({ id, title }: DashboardProps) => {
  return (
    <MainLayout title={title} seoTitle={title}>
      {title}
      <DnDTest />
    </MainLayout>
  );
};

const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const data = await fetcher(
    `http://localhost:3000/api/dashboard/${ctx?.params?.id}`
  );
  return {
    props: data,
  };
};

export default Dashboard;
