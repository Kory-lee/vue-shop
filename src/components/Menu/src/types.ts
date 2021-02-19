export interface MenuState {
  // 默认选中的列表
  defaultSelectedKeys: string[];
  // 缩进
  inlineIndex?: number;
  // 展开数组
  openKeys: string[];
  // 当前选中的菜单项key数组
  selectedKeys: string[];
  // 收缩状态下展开的数组
  collapsedOpenKeys: string[];
}
