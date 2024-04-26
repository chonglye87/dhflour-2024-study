// ----------------------------------------------------------------------
// 테이블 유형정리

export interface PaginationMetadata {
  /**
   * 현 페이지 데이터 조회 수
   * @example "10"
   */
  itemCount: number;
  /**
   * 데이터 총 수
   * @example "0"
   */
  total: number;
  /**
   * 페이지 사이즈
   * @example "10"
   */
  size: number;
  /**
   * 현재 페이지
   * @example "1"
   */
  currentPage: number;
  /**
   * 페이지 총 수
   * @example "0"
   */
  totalPages: number;
}


export type TableProps = {
  dense: boolean;
  page: number;
  rowsPerPage: number;
  order: "asc" | "desc";
  orderBy: string;
  metadata: PaginationMetadata;
  //
  selected: number[];
  onSelectRow: (id: number) => void;
  onSelectAllRows: (checked: boolean, newSelecteds: number[]) => void;
  //
  onResetPage: VoidFunction;
  onSort: (id: string) => void;
  onChangePage: (event: unknown, newPage: number) => void;
  onChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeDense: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onUpdatePageDeleteRow: (totalRowsInPage: number) => void;
  onUpdatePageDeleteRows: ({
                             totalRows,
                             totalRowsInPage,
                             totalRowsFiltered,
                           }: {
    totalRows: number;
    totalRowsInPage: number;
    totalRowsFiltered: number;
  }) => void;
  //
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setDense: React.Dispatch<React.SetStateAction<boolean>>;
  setOrder: React.Dispatch<React.SetStateAction<"desc" | "asc">>;
  setOrderBy: React.Dispatch<React.SetStateAction<string>>;
  setSelected: React.Dispatch<React.SetStateAction<number[]>>;
  setRowsPerPage: React.Dispatch<React.SetStateAction<number>>;

  setPageMetadata: (metadata: PaginationMetadata) => void;
};

export const initialTable: TableProps = {
  dense: false,
  page: 0,
  rowsPerPage: 0,
  order: "desc",
  orderBy: "createdTime",
  metadata: {
    itemCount: 0,
    total: 0,
    size: 0,
    currentPage: 0,
    totalPages: 0
  },
  //
  selected: [],
  onSelectRow: (id: number) => {},
  onSelectAllRows: (checked: boolean, newSelecteds: number[]) => {},
  //
  onResetPage: () => {},
  onSort: (id: string) => {},
  onChangePage: (event: unknown, newPage: number) => {},
  onChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => {},
  onChangeDense: (event: React.ChangeEvent<HTMLInputElement>) => {},
  onUpdatePageDeleteRow: (totalRowsInPage: number) => {},
  onUpdatePageDeleteRows: ({
                             totalRows,
                             totalRowsInPage,
                             totalRowsFiltered,
                           }: {
    totalRows: number;
    totalRowsInPage: number;
    totalRowsFiltered: number;
  }) => {},
  //
  setPage: ()=>{},
  setDense: ()=>{},
  setOrder: ()=>{},
  setOrderBy: ()=>{},
  setSelected: ()=>{},
  setRowsPerPage: ()=>{},

  setPageMetadata: (metadata: PaginationMetadata) => {}
}

export enum OrderDirection {
  UP = 'UP',
  DOWN = 'DOWN'
}
