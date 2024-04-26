import {PaginationMetadata} from "../components/hyperx/table";

export type IBoardFilters = {
  query: string;
  categories: BoardCategoryDTO[];
  status: string;
  startDate: Date | null;
  endDate: Date | null;
};

export type IBoardFilterValue = string | BoardCategoryDTO[] | Date | null;

export type IBoardCategoryFilters = {
  query: string;
  types: string[];
  startDate: Date | null;
  endDate: Date | null;
};

export type IBoardCategoryFilterValue = string | string[] | Date | null;

export interface FileModel {
  /** @example "" */
  id?: number;
  /** @example "" */
  originalFilename?: string;
  /** @example "" */
  filename?: string;
  /** @example "" */
  size?: number;
  /** @example "" */
  mimeType?: string;
  /** @example "" */
  etag?: string;
  /** @example "" */
  url?: string;
}

export interface BoardCategoryDTO {
  /**
   * ID
   * @example ""
   */
  id: number;
  /** icon */
  iconImage?: FileModel;
  /** 카테고리 명 */
  name: string;
  /**
   * 등록일
   * @format date-time
   * @example ""
   */
  createdTime?: string;
  /**
   * 등록한 계정 ID
   * @example ""
   */
  createdBy?: number;
  /**
   * 수정시간
   * @format date-time
   * @example ""
   */
  updatedTime?: string;
  /**
   * 수정한 계정 ID
   * @example ""
   */
  updatedBy?: number;
  /**
   * 게시판 유형
   * @example ""
   */
  type: string;
  /**
   * 순서
   * @example ""
   */
  orderBy: number;
}

export interface BoardDTO {
  /**
   * ID
   * @example ""
   */
  id: number;
  /**
   * 카테고리
   * @example ""
   */
  categories: BoardCategoryDTO[];
  /** 제목 */
  title: string;
  /** 내용 */
  content: string;
  /**
   * 게시판 유형
   * @example ""
   */
  type: string;
  /**
   * 상단 고정
   * @example ""
   */
  top: boolean;
  /**
   * 페이지 뷰
   * @example ""
   */
  pageView: number;
  /**
   * 등록일
   * @format date-time
   * @example ""
   */
  createdTime: string;
  /**
   * 등록한 계정 ID
   * @example ""
   */
  createdBy: number;
  /**
   * 수정시간
   * @format date-time
   * @example ""
   */
  updatedTime: string;
  /**
   * 수정한 계정 ID
   * @example ""
   */
  updatedBy: number;
}


export interface BoardPage {
  /** 데이터 */
  items: BoardDTO[];
  /** 페이지 메타 정보 */
  metadata: PaginationMetadata;
}

export interface BoardCategoryList {
  /** 데이터 */
  items: BoardCategoryDTO[];
}

export interface ReqBoard {
  /** 제목 */
  title: string;
  /** 내용 */
  content: string;
  /** 카테고리 ID */
  categoryIds: number[];
  /** 상단고정 */
  top: boolean;
}
