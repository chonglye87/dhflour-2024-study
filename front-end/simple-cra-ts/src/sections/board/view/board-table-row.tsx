// @mui
import {Checkbox, Divider, IconButton, MenuItem, Stack, TableCell, TableRow, Typography} from "@mui/material";
// utils
// @types
// components
import Chip from "@mui/material/Chip";
import Iconify from "src/components/iconify";
import {useSnackbar} from "src/components/snackbar";
import CustomPopover, {usePopover} from "../../../components/custom-popover";
import {BoardEntity} from "../../../generated/swagger/swagger.api";
import {fDateTime} from "../../../utils/format-time";

// ----------------------------------------------------------------------

type Props = {
  row: BoardEntity;
  selected: boolean;
  onSelectRow: VoidFunction;
  onViewRow: VoidFunction;
  onEditRow: VoidFunction;
  onRefreshData: VoidFunction;
};

export default function BoardTableRow({
                                        row,
                                        selected,
                                        onSelectRow,
                                        onViewRow,
                                        onEditRow,
                                        onRefreshData,
                                      }: Props) {
  const {enqueueSnackbar} = useSnackbar();
  const openPopover = usePopover();

  const {id, title, createdAt, categories} = row;

  return (
    <>
      <TableRow hover selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox checked={selected} onClick={onSelectRow}/>
        </TableCell>


        <TableCell>{id}</TableCell>

        <TableCell>
          <Typography
            variant="body2"
            sx={{cursor: "pointer"}}
            onClick={() => {
              onViewRow();
            }}
          >
            {title}
          </Typography>
        </TableCell>

        <TableCell align="center">

          {categories && <Stack direction="row" spacing={1}>
            {
              categories.map((category) =>
              <Chip variant="soft"
                    color="secondary"
                    size="small"
                    label={category.name || '-'} />)
            }
          </Stack>}
        </TableCell>

        <TableCell align="center">
          -
        </TableCell>

        <TableCell align="center">페이지뷰</TableCell>

        <TableCell align="center">{createdAt ? fDateTime(createdAt) : '-'}</TableCell>

        <TableCell align="right">
          <IconButton>
            <Iconify icon="eva:more-vertical-fill"/>
          </IconButton>
        </TableCell>
      </TableRow>

      <CustomPopover
        open={openPopover.open}
        onClose={openPopover.onClose}
        arrow="right-top"
        sx={{width: 160}}
      >
        <MenuItem
          onClick={() => {
            onViewRow();
            openPopover.onClose();
          }}
        >
          <Iconify icon="eva:eye-fill"/>
          상세
        </MenuItem>

        <MenuItem
          onClick={() => {
            onEditRow();
            openPopover.onClose();
          }}
        >
          <Iconify icon="mingcute:pencil-line"/>
          수정
        </MenuItem>

        <Divider sx={{borderStyle: "dashed"}}/>

        <MenuItem
          onClick={() => {
            alert('1');
          }}
          sx={{color: "error.main"}}
        >
          <Iconify icon="eva:trash-2-outline"/>
          삭제
        </MenuItem>
      </CustomPopover>
    </>
  );
}
