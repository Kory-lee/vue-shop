import { MenuModeEnum, MenuTypeEnum } from '/@/enums/menuEnum';
import { ErrorTypeEnum } from '/@/enums/exceptionEnum';

export interface ErrorLogInfo {
  type: ErrorTypeEnum;

  file: string;
  name?: string;
  message: string;
  stack?: string;
  detail: string;
  url: string;
  time?: string;
}
export interface UserInfo {
  userId: string | number;
  username: string;
  realName: string;
  desc?: string;
}

export interface BeforeMiniState {
  menuCollapsed?: boolean;
  menuSplit?: boolean;
  menuMode?: MenuModeEnum;
  menuType?: MenuTypeEnum;
}
