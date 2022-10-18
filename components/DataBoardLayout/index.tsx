import "react-grid-layout/css/styles.css";
import { Responsive, WidthProvider } from "react-grid-layout";
import { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
// interface IGridItem {
//   i: string;
//   x: number;
//   y: number;
//   w: number;
//   h: number;
//   minW?: number;
//   maxW?: number;
//   minH?: number;
//   maxH?: number;
//   static?: boolean;
//   isDraggable?: boolean;
//   isResizable?: boolean;
//   resizeHandles?: Array<"s" | "w" | "e" | "n" | "sw" | "nw" | "se" | "ne">;
//   isBounded?: boolean;
// }
const layouts: ReactGridLayout.Layouts = {
  lg: [
    { i: "l1", x: 0, y: 0, w: 2, h: 2 },
    { i: "m1", x: 2, y: 0, w: 2, h: 2 },
    { i: "r1", x: 4, y: 0, w: 2, h: 2 },
    { i: "l2", x: 0, y: 2, w: 3, h: 3 },
    { i: "r2", x: 3, y: 2, w: 3, h: 3 },
  ],
};

interface DataBoardLayoutProps {
  children?: ReactNode;
}

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function DataBoardLayout(props: DataBoardLayoutProps) {
  const defaultProps = {
    // className: "dev-helper",
    // isDraggable: true,
    // isResizable: true,
    breakpoints: { lg: 992, md: 768, sm: 576, xs: 480 },
    // cols: { xxl: 12, xl: 10, lg: 8, md: 6, sm: 4, xs: 2 },
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    rowHeight: 100,
  };
  const [layout, setLayout] = useState<ReactGridLayout.Layouts>(layouts);

  const OnLayoutChangeCallback = (
    currentLayout: ReactGridLayout.Layout[],
    allLayouts: ReactGridLayout.Layouts
  ) => {
    setLayout(allLayouts);
    console.log(currentLayout);
  };

  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setIsEdit(!isEdit);
        }}
      >
        {isEdit ? "Edit" : "save"}
      </button>
      <Layout
        {...defaultProps}
        layouts={layout}
        onLayoutChange={OnLayoutChangeCallback}
        isResizable={!isEdit}
        isDraggable={!isEdit}
        // verticalCompact={true}
        compactType={"horizontal"}
      >
        {layout.lg.map((item) => (
          <Item key={item.i}>{item.i}</Item>
        ))}
      </Layout>
    </>
  );
}

const Layout = styled(ResponsiveGridLayout)`
  .react-grid-placeholder {
    background-color: transparent;
    background-color: ${({ theme }) => theme.color.border.main};
    border-radius: ${({ theme }) => theme.borderRadius.card.sm};
    /* background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='14' ry='14' stroke='black' stroke-width='3' stroke-dasharray='10' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e"); */
  }
  background-color: ${({ theme }) => theme.color.background.card1};
  border-radius: ${({ theme }) => theme.borderRadius.card.base};
  margin-bottom: 20px;
`;

const Item = styled.div`
  background-color: ${({ theme }) => theme.color.background.card2};
  color: ${({ theme }) => theme.color.font.sub};
  border-radius: ${({ theme }) => theme.borderRadius.card.sm};
  padding: 20px 20px;
  user-select: none;
  cursor: grab;

  .react-resizable-handle::after {
    right: 10px;
    bottom: 10px;
    width: 10px;
    height: 10px;
    border-right: 2px solid red;
    border-bottom: 2px solid red;
  }
`;
