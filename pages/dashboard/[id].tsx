import { GetServerSideProps, NextPage } from "next";
import dynamic from "next/dynamic";
import DataBoardLayout from "../../components/DataBoardLayout";
import MainLayout from "../../components/layout/MainLayout";
import { ISideBarItem } from "../../types/side-bar";

const DataBoard = dynamic(() => import("../../components/DataBoard"), {
  ssr: false,
});

interface DashboardProps extends ISideBarItem {}

const Dashboard: NextPage<any> = ({ id, title, databoard }: DashboardProps) => {
  return (
    <MainLayout title={title} seoTitle={title}>
      {databoard ? <DataBoard elements={databoard.elements} /> : null}
      <DataBoardLayout />
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
