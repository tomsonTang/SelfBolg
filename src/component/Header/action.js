import CONSTANT from "../../constant";
import {createActions} from "redux-actions";


/**
 * 根据指定的 action.type 抽象出对应的高阶 actionCreator
 * 
 * 当调用指定的 action.type导出的高阶 actionCreator 时，返回的数据内容会自动带上指定的 action.type 
 * 
 * @example 
 * actions.closeSider() => {
 *  type:'CLOSE_SIDER',
 *  payload:{collapsed: true},
 * }
 * 
 */
const actions = createActions({
  /**
   * 收起侧边栏
   */
  CLOSE_SIDER: () => ({collapsed: true}),

  /**
   * 展开侧边栏
   */
  OPEN_SIDER: () => ({collapsed: false}),

  /**
   * 切换短 logo
   */
  CHANGE_TO_SHORT_LOGO: () => ({logo: CONSTANT.PAGES.LOGO_TEXT.SHORT}),

  /**
   * 切换长 logo
   */
  CHANGE_TO_LONG_LOGO: () => ({logo: CONSTANT.PAGES.LOGO_TEXT.LONG})
});

export default actions;
