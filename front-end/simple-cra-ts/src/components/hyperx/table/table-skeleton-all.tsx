// @mui
// 전체 로딩시 스켈레톤 컴포넌트
import {TableRowProps} from "@mui/material";
import TableSkeleton from "./table-skeleton";

// ----------------------------------------------------------------------
interface Props extends TableRowProps {
  size: number;
  denseHeight: number;
}

export default function TableSkeletonAll({
  size,
  denseHeight,
  ...other
}: Props) {
  return (
    <>
      {Array.from({ length: size }, (_, i) => i + 1).map((index) => <TableSkeleton key={index} sx={{ height: denseHeight }} />)}
    </>
  );
}
