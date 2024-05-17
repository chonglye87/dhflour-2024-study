// @mui
// 비어있는 테이블 처리 컴포넌트
import {TableCell, TableRow} from '@mui/material';

// ----------------------------------------------------------------------

type Props = {
  height?: number;
  emptyRows: number;
};

export default function TableEmptyRows({ emptyRows, height }: Props) {
  if (!emptyRows) {
    return null;
  }

  return (
    <TableRow
      sx={{
        ...(height && {
          height: height * emptyRows,
        }),
      }}
    >
      <TableCell colSpan={9} />
    </TableRow>
  );
}
