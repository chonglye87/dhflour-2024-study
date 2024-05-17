/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface BoardRequest {
  /**
   * 게시물 제목
   * @example "Spring Boot and Swagger Integration"
   */
  title: string;
  /**
   * 게시물 내용
   * @example "Here is how you can integrate Swagger into your Spring Boot application..."
   */
  content: string;
  /**
   * 카테고리 ID 목록
   * @uniqueItems true
   * @example [1,2,3]
   */
  categoryIds: number[];
}

/** 게시판 엔티티, 게시물 정보를 포함 */
export interface BoardEntity {
  /**
   * id
   * @format int64
   * @example 1
   */
  id?: number;
  /** 게시물 제목 */
  title?: string;
  /** 게시물 내용 */
  content?: string;
  /**
   * 생성 시간
   * @format date-time
   */
  createdAt?: string;
  /**
   * 마지막 업데이트 시간
   * @format date-time
   */
  updatedAt?: string;
  /**
   * 연결된 카테고리 목록
   * @uniqueItems true
   */
  categories?: CategoryEntity[];
}

/** 게시판 페이지네이션 응답 */
export interface BoardPaginationResponse {
  /**
   * 현재 페이지 번호
   * @format int32
   * @example 0
   */
  page?: number;
  /**
   * 페이지 크기
   * @format int32
   * @example 20
   */
  size?: number;
  /**
   * 전체 요소 수
   * @format int64
   * @example 100
   */
  totalElements?: number;
  /**
   * 전체 페이지 수
   * @format int32
   * @example 5
   */
  totalPages?: number;
  /** 페이지에 포함된 콘텐츠 */
  content?: BoardEntity[];
}

/** 게시판 카테고리 엔티티 */
export interface CategoryEntity {
  /**
   * id
   * @format int64
   * @example 1
   */
  id?: number;
  /** 이름 */
  name?: string;
  /**
   * 생성 시간
   * @format date-time
   */
  createdAt?: string;
  /**
   * 마지막 업데이트 시간
   * @format date-time
   */
  updatedAt?: string;
}

import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from 'axios';
import axios from 'axios';

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || 'http://localhost:8080',
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === 'object' && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === 'object') {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== 'string') {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title API 문서
 * @version v1.0.0
 * @baseUrl http://localhost:8080
 *
 * 대한제분 API, powered by Spring Boot 3
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * @description 게시판 목록 조회 API (Pagination)
     *
     * @tags board-controller
     * @name PageBoard
     * @summary [board-1] 게시판 목록 조회 (Pagination)
     * @request GET:/api/v1/board
     */
    pageBoard: (
      query?: {
        /** @default "" */
        startDate?: string;
        /** @default "" */
        endDate?: string;
        /** @default "" */
        query?: string;
        /**
         * Page Size 페이지 크기 (default : 20)
         * @example 20
         */
        size?: any;
        /**
         * 현재 페이지 0부터 (Current Page)  현재 페이지 (default : 0)
         * @example 0
         */
        page?: any;
        /** 정렬 (Sort Page) */
        sort?: any;
      },
      params: RequestParams = {}
    ) =>
      this.request<BoardPaginationResponse, any>({
        path: `/api/v1/board`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description 새로운 게시글을 등록합니다.
     *
     * @tags board-controller
     * @name CreateBoard
     * @summary [board-2] 게시판 등록
     * @request POST:/api/v1/board
     */
    createBoard: (data: BoardRequest, params: RequestParams = {}) =>
      this.request<BoardRequest, any>({
        path: `/api/v1/board`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags process-env-controller
     * @name Time
     * @request GET:/api/v1/time-check
     */
    time: (params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/v1/time-check`,
        method: 'GET',
        ...params,
      }),

    /**
     * No description
     *
     * @tags process-env-controller
     * @name Env
     * @request GET:/api/v1/env
     */
    env: (params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/v1/env`,
        method: 'GET',
        ...params,
      }),
  };
}
