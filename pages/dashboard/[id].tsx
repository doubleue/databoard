import { GetServerSideProps, NextPage } from "next";
import dynamic from "next/dynamic";
import useSWR from "swr";
import DataBoardLayout from "../../components/DataBoardLayout";
import MainLayout from "../../components/layout/MainLayout";
import { ISideMenuItem } from "../../types/side-menu";

const DataBoard = dynamic(() => import("../../components/DataBoard"), {
  ssr: false,
});

interface DashboardProps {
  id: string;
}

const Dashboard: NextPage<any> = ({ id }: DashboardProps) => {
  const { data, error } = useSWR<ISideMenuItem>(
    `/api/dashboard/${id}`,
    fetcher
  );
  return (
    <MainLayout title={data?.title} seoTitle={data?.title}>
      {data?.databoard ? (
        <DataBoard elements={data?.databoard.elements} />
      ) : null}
      <DataBoardLayout />
    </MainLayout>
  );
};

const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // const data = await fetcher(
  //   `http://localhost:3000/api/dashboard/${ctx?.params?.id}`
  // );
  return {
    props: {
      id: ctx?.params?.id,
    },
  };
};

export default Dashboard;
