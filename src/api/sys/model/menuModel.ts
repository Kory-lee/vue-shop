import { RouteMeta } from '/@/router/types';

export interface RouteItem {
  path: string;
  component: any;
  meta: RouteMeta;
  name?: string;
  alias?: string | string[];
  redirect?: string;
  caseSensitive?: boolean;
  children?: RouteItem[];
}

export interface getMenuListByIdParams {
  id: number | string;
}

export type getMenuListByIdParamsResultModel = RouteItem[];
