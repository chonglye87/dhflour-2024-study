// @mui
import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles/createTheme";
import {Box, Card, Divider, Stack, Typography} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {fDateTime} from "../../../utils/format-time";
import Iconify from "../../../components/iconify";
import {useBoolean} from "../../../hooks/use-boolean";
import Label from "../../../components/label";
import TableViewBodyFooter from "../../../components/hyperx/table/table-view-body-footer";
import {BoardEntity} from "../../../generated/swagger/swagger.api";

// ----------------------------------------------------------------------

interface Props {
    data: BoardEntity;
    sx?: SxProps<Theme>;
}

export default function BoardViewBody({data, sx, ...other}: Props) {

    const {id, title, content, createdAt, updatedAt, categories} = data;

    const properties = useBoolean(true);

    return (
        <Stack spacing={3}>
            <Card sx={{p: 5}}>
                <Stack spacing={1}>
                    <Stack
                        spacing={3}
                        direction={{xs: 'column', sm: 'row'}}
                        alignItems={{xs: 'flex-end', sm: 'center'}}
                        sx={{mb: {xs: 3, md: 0}}}
                    >
                        <Stack flexGrow={1} sx={{width: 1}}>
                            {/* 날짜 */}
                            <Typography variant="caption" sx={{color: 'text.secondary', mb: 1}}>
                                {fDateTime(createdAt)}
                            </Typography>

                            {/* 카테고리 */}
                            {categories && categories.length > 0 && <Stack direction="row" spacing={1} sx={{mb: 1}}>
                                {categories.map((category) => <Label variant="soft" color="default">
                                    {category.name}
                                </Label>)}
                            </Stack>}

                            {/* 제목 */}
                            <Typography variant="h6" sx={{pt: 2}}>
                                {title}
                            </Typography>
                        </Stack>

                        {/* {top && */}
                        {/*    <Label variant="soft" color="secondary" */}
                        {/*           startIcon={<Iconify icon="majesticons:pin"/>}> */}
                        {/*        상단고정 */}
                        {/*    </Label> */}
                        {/* } */}
                    </Stack>

                    <Divider sx={{borderStyle: 'dashed'}}/>

                    <Stack spacing={1}>
                      {content && <Box sx={{mb: 1}} dangerouslySetInnerHTML={{__html: content}}/>}
                    </Stack>
                </Stack>
            </Card>

            <Stack spacing={1.5} sx={{p: 1}}>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{typography: 'subtitle2'}}
                >
                    메타 정보
                    <IconButton size="small" onClick={properties.onToggle}>
                        <Iconify
                            icon={properties.value ? 'eva:arrow-ios-upward-fill' : 'eva:arrow-ios-downward-fill'}
                        />
                    </IconButton>
                </Stack>
                {properties.value && (
                    <>
                        <Stack direction="row" sx={{typography: 'body2', textTransform: 'capitalize'}}>
                            <Box component="span" sx={{width: 100, color: 'text.secondary', mr: 2}}>
                                페이지 뷰
                            </Box>
                            {0} 회
                        </Stack>

                        {/* <TableViewBodyFooter */}
                        {/*    data={{ */}
                        {/*        createdAt, */}
                        {/*        0, */}
                        {/*        updatedAt, */}
                        {/*        updatedBy, */}
                        {/*    }} */}
                        {/* /> */}
                    </>
                )}
            </Stack>
        </Stack>
    );
}
