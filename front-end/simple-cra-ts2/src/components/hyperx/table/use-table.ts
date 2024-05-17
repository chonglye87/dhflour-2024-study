import {useCallback, useState} from 'react';
// 데이블의 리액트 훅
import {PaginationMetadata, TableProps} from './types';

// ----------------------------------------------------------------------

type ReturnType = TableProps;

export type UseTableProps = {
    defaultDense?: boolean;
    defaultOrder?: 'asc' | 'desc';
    defaultOrderBy?: string;
    defaultSelected?: number[];
    defaultRowsPerPage?: number;
    defaultCurrentPage?: number;
};

interface SortObject {
    [key: string]: 'asc' | 'desc' | SortObject;
}

export const DEFAULT_HEIGHT = 76;
export const LOW_HEIGHT = 56;

export const ROW_COUNT = 7;

export function transformSortJSON(sortJSON: string): string {
    const sortString = JSON.parse(sortJSON);
    const [fullPath, direction] = Object.entries(sortString)[0] as [string, 'asc' | 'desc'];
    const pathParts = fullPath.split('.');
    const sortObject: SortObject = {};
    let currentObject: SortObject = sortObject;

    pathParts.forEach((part, index) => {
        if (index === pathParts.length - 1) { // Last part
            currentObject[part] = direction;
        } else {
            currentObject[part] = {};
            currentObject = currentObject[part] as SortObject;
        }
    });

    return JSON.stringify(sortObject);
}

export default function useTable(props?: UseTableProps): ReturnType {

    const [dense, setDense] = useState(!!props?.defaultDense);
    const [page, setPage] = useState(props?.defaultCurrentPage || 0);
    const [orderBy, setOrderBy] = useState(props?.defaultOrderBy || 'name');
    const [rowsPerPage, setRowsPerPage] = useState(props?.defaultRowsPerPage || 5);
    const [order, setOrder] = useState<'asc' | 'desc'>(props?.defaultOrder || 'asc');
    const [selected, setSelected] = useState<number[]>(props?.defaultSelected || []);
    const [metadata, setMetadata] = useState<PaginationMetadata>({ total: 0, itemCount: 0, size: 10, currentPage: 1, totalPages: 0 });

    const onSort = useCallback(
        (id: string) => {
            const isAsc = orderBy === id && order === 'asc';
            if (id !== '') {
                setOrder(isAsc ? 'desc' : 'asc');
                setOrderBy(id);
            }
        },
        [order, orderBy]
    );

    const onSelectRow = useCallback(
        (inputValue: number) => {
            const newSelected = selected.includes(inputValue)
                ? selected.filter((value) => value !== inputValue)
                : [...selected, inputValue];
            setSelected(newSelected);
        },
        [selected]
    );

    const onChangeRowsPerPage = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setPage(0);
        setRowsPerPage(parseInt(event.target.value, 10));
    }, []);

    const onChangeDense = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.checked, 'event.target.checked');
        setDense(event.target.checked);
    }, []);

    const onSelectAllRows = useCallback((checked: boolean, inputValue: number[]) => {
        if (checked) {
            setSelected(inputValue);
            return;
        }
        setSelected([]);
    }, []);

    const onChangePage = useCallback((event: unknown, newPage: number) => {
        setPage(newPage);
    }, []);

    const onResetPage = useCallback(() => {
        setPage(0);
    }, []);

    const onUpdatePageDeleteRow = useCallback(
        (totalRowsInPage: number) => {
            setSelected([]);
            if (page) {
                if (totalRowsInPage < 2) {
                    setPage(page - 1);
                }
            }
        },
        [page]
    );

    const onUpdatePageDeleteRows = useCallback(
        ({
             totalRows,
             totalRowsInPage,
             totalRowsFiltered,
         }: {
            totalRows: number;
            totalRowsInPage: number;
            totalRowsFiltered: number;
        }) => {
            const totalSelected = selected.length;

            setSelected([]);

            if (page) {
                if (totalSelected === totalRowsInPage) {
                    setPage(page - 1);
                } else if (totalSelected === totalRowsFiltered) {
                    setPage(0);
                } else if (totalSelected > totalRowsInPage) {
                    const newPage = Math.ceil((totalRows - totalSelected) / rowsPerPage) - 1;
                    setPage(newPage);
                }
            }
        },
        [page, rowsPerPage, selected.length]
    );

    const setPageMetadata = useCallback(async (_metadata: PaginationMetadata) => {
        setMetadata(_metadata);
    }, []);

    return {
      dense,                // 테이블 행이 밀집되어 있는지 여부를 나타내는 불린 상태
      order,                // 현재 정렬 순서 ('asc' 또는 'desc')
      page,                 // 페이징에서 현재 페이지 인덱스
      orderBy,              // 정렬에 사용되는 현재 열
      rowsPerPage,          // 페이지 당 행 수
      metadata,             // 페이징 메타데이터, 총 항목, 페이지 등을 포함
      selected,             // 선택된 행 인덱스의 배열
      onSelectRow,          // 행 선택을 처리하는 함수
      onSelectAllRows,      // 모든 행을 선택하는 함수
      onSort,               // 열별로 정렬을 처리하는 함수
      onChangePage,         // 페이지 변경을 처리하는 함수
      onChangeDense,        // 행 밀도 토글을 처리하는 함수
      onResetPage,          // 페이징을 첫 페이지로 리셋하는 함수
      onChangeRowsPerPage,  // 페이지 당 행 수를 변경하는 함수
      onUpdatePageDeleteRow,// 행 삭제 시 페이징 업데이트를 처리하는 함수
      onUpdatePageDeleteRows, // 여러 행 삭제 시 페이징 업데이트를 처리하는 함수
      setPage,              // 현재 페이지를 설정하는 함수
      setDense,             // 행 밀도를 설정하는 함수
      setOrder,             // 정렬 순서를 설정하는 함수
      setOrderBy,           // 정렬 열을 설정하는 함수
      setSelected,          // 선택된 행을 설정하는 함수
      setRowsPerPage,       // 페이지 당 행 수를 설정하는 함수
      setPageMetadata       // 페이징 메타데이터를 설정하는 함수
    };
}
