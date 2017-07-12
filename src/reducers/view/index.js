import {handleActions, combineActions} from "redux-actions";

import actionCreators from "../../component/Header/action.js";
import CONSTANT from "../../constant";

const viewInitialState = {
  sider: {
    collapsed: false,
    logo: CONSTANT.PAGES.LOGO_TEXT.LONG
  }
};

const {openSider, closeSider, changeToShortLogo, changeToLongLogo} = actionCreators;

const viewReducer = handleActions({
  /**
   * 将相同处理逻辑的 reducer 做一致处理
   */
  [combineActions(openSider, closeSider, changeToShortLogo, changeToLongLogo)]: {
    next: (state, {payload}) => {
      return {
        ...state,
        sider: {
          ...state.sider,
          ...payload
        }
      };
    },
    throw: (state, action) => {}
  }
}, viewInitialState);

export default viewReducer;
