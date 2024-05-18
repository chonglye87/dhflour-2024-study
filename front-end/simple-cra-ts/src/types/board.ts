import {CategoryEntity} from "../generated/swagger/swagger.api";

export type IBoardFilters = {
  query: string;
  categories: CategoryEntity[];
  status: string;
  startDate: Date | null;
  endDate: Date | null;
};

export type IBoardFilterValue = string | CategoryEntity[] | Date | null;

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
