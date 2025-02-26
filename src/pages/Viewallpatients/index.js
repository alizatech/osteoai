import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Heading, Text } from "../../components";
import Header from "../../components/Header";
import { ReactTable } from "../../components/ReactTable";
import Sidebar1 from "../../components/Sidebar1";
import { createColumnHelper } from "@tanstack/react-table";

const tableData = [
  {
    icons: "images/ing_ellipse_121.png",
    rowid: "1",
    stage: "II",
    dAte: "1/24",
    modify: "images/img_edit.svg",
    muhammadahmed: "Muhammad Ahmed",
  },
  {
    icons: "images/img_ellipse_121.png",
    rowid: "2",
    stage: "III",
    dAte: "9/24",
    modify: "images/img_edit.svg",
    muhammadahmed: "Hassan Abdullah",
  },
  {
    icons: "images/img_ellipse_121.png",
    rowid: "3",
    stage: "IV",
    dAte: "11/24",
    modify: "images/img_edit.svg",
    muhammadahmed: "Siraj Munir",
  },
  {
    icons: "images/ing_ellipse_121.png",
    rowid: "4",
    stage: "V",
    dAte: "7/24",
    modify: "images/img_edit.svg",
    muhammadahmed: "Ayesha Ali",
  },
  {
    icons: "images/ing_ellipse_121.png",
    rowid: "5",
    stage: "I",
    dAte: "5/24",
    modify: "images/img_edit.svg",
    muhammadahmed: "Fatima Sheikh",
  },
  {
    icons: "images/img_ellipse_121.png",
    rowid: "6",
    stage: "III",
    dAte: "3/24",
    modify: "images/img_edit.svg",
    muhammadahmed: "Asifa Ali",
  },
  {
    icons: "images/ing_ellipse_121.png",
    rowid: "7",
    stage: "II",
    dAte: "3/24",
    modify: "images/img_edit.svg",
    muhammadahmed: "Rafay Hassan",
  },
  {
    icons: "images/ing_ellipse_121.png",
    rowid: "8",
    stage: "V",
    dAte: "3/24",
    modify: "images/img_edit.svg",
    muhammadahmed: "Falak Ansar",
  },
];

export default function ViewallpatientsPage() {
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();

    return [
      tableColumnHelper.accessor("icons", {
        cell: (info) => (
          <div className="flex px-5">
            <img
              src={info.getValue()}
              alt="Icon"
              className="mt-2 h-[40px] rounded-[20px] object-cover"
            />
          </div>
        ),
        header: () => (
          <Text
            size="textmd"
            as="p"
            className="pb-2.5 pl-6 pt-1 text-left text-[12px] font-normal uppercase text-black-900 sm:pl-4"
          >
            ICONS
          </Text>
        ),
        meta: { width: "148px" },
      }),
      tableColumnHelper.accessor("rowid", {
        cell: (info) => (
          <div className="flex flex-1 flex-wrap items-end justify-between gap-5 px-2.5">
            <Heading
              size="textx1"
              as="h3"
              className="mb-1.5 text-[14.04px] font-medium tracking-[-0.28px] text-deep_purple-a700"
            >
              {info.getValue()}
            </Heading>
            <Heading
              size="textx1"
              as="h4"
              className="text-[14.04px] font-medium tracking-[-0.28px] text-deep_purple-a700"
            >
              {info.row.original.muhammadahmed}
            </Heading>
          </div>
        ),
        header: () => (
          <div className="flex flex-1 flex-wrap items-start justify-between gap-5 py-1">
            <Text
              size="textmd"
              as="p"
              className="text-[12px] font-normal uppercase text-black-900"
            >
              ID
            </Text>
            <Text
              size="textmd"
              as="p"
              className="text-[12px] font-normal uppercase text-black-900"
            >
              Patient Name
            </Text>
          </div>
        ),
        meta: { width: "306px" },
      }),
      tableColumnHelper.accessor("stage", {
        cell: (info) => (
          <Heading
            size="textx1"
            as="h5"
            className="text-[14.04px] font-medium tracking-[-0.28px] text-deep_purple-a700"
          >
            {info.getValue()}
          </Heading>
        ),
        header: () => (
          <Text
            size="textmd"
            as="p"
            className="py-1.5 text-left text-[12px] font-normal uppercase text-black-900"
          >
            Stage
          </Text>
        ),
        meta: { width: "148px" },
      }),
      tableColumnHelper.accessor("dAte", {
        cell: (info) => (
          <Heading
            size="textx1"
            as="h6"
            className="text-[14.04px] font-medium leading-7 tracking-[-0.28px] text-deep_purple-a700"
          >
            {info.getValue()}
          </Heading>
        ),
        header: () => (
          <Text
            size="textmd"
            as="p"
            className="py-1.5 text-left text-[12px] font-normal uppercase text-black-900"
          >
            DATE
          </Text>
        ),
        meta: { width: "222px" },
      }),
      tableColumnHelper.accessor("modify", {
        cell: (info) => (
          <div className="flex gap-[18px] px-2">
            <Button
              color="blue_gray_50"
              size="sm"
              className="w-[40px] rounded-[5px] px-1"
            >
              <img src={info.getValue()} alt="Edit" />
            </Button>
            <Button
              color="blue_gray_50"
              size="sm"
              className="w-[40px] rounded-[5px] px-1"
            >
              <Img src="images/img_thumbs_up.svg" alt="Approve" />
            </Button>
          </div>
        ),
        header: () => (
          <Text
            size="textmd"
            as="p"
            className="pb-1 pt-2.5 text-left text-[12px] font-normal uppercase text-black-900"
          >
            MODIFY
          </Text>
        ),
        meta: { width: "164px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>Aliza's Application</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="relative h-[1248px] w-full bg-indigo-200_49 py-[22px]">
        <Sidebar1 />
        <div className="container-xs relative flex flex-col gap-[22px] px-5">
          <Heading
            size="heading2x1"
            as="h1"
            className="mt-[90px] text-[32px] font-semibold text-deep_purple-a700"
          >
            Osteo-AI
          </Heading>
          <div className="relative mx-6 rounded-[10px] border border-black-900 bg-gray-200 p-4">
            <ReactTable columns={tableColumns} data={tableData} />
          </div>
        </div>
      </div>
    </>
  );
}
