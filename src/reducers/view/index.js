import * as HeaderAction from "../../components/Header/action";
import CONSTANT from "../../constant";

const viewInitialState = {
  sider: {
    collapsed: false,
    logo: CONSTANT.PAGES.LOGO_TEXT.LONG
  }
};

const viewReducer = (state = viewInitialState, action) => {
  switch (action.type) {
    case HeaderAction.CLOSE_SIDER:
    case HeaderAction.OPEN_SIDER:
    case HeaderAction.CHANGE_TO_LONG_LOGO:
    case HeaderAction.CHANGE_TO_SHORT_LOGO:
      return {
        ...state,
        sider: {
          ...state.sider,
          ...action.data
        }
      };
    default:
      return state;
  }
};

export default viewReducer