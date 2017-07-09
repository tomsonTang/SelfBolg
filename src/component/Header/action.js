import  CONSTANT from "../../constant"

export const CLOSE_SIDER = Symbol(0);
export const OPEN_SIDER = Symbol(1);
export const CHANGE_TO_SHORT_LOGO = Symbol(2);
export const CHANGE_TO_LONG_LOGO = Symbol(3);

/**
 * 收起侧边栏
 */
export const closeSiderAction = ()=>{
  return {
    type:CLOSE_SIDER,
    data:{
      collapsed:true,
    }
  }
}

/**
 * 展开侧边栏
 */
export const openSiderAction = ()=>{
  return {
    type:OPEN_SIDER,
    data:{
      collapsed:false,
    }
  }
}

/**
 * 切换短 logo
 */
export const changeToShortLogo = ()=>{
  return {
    type:CHANGE_TO_SHORT_LOGO,
    data:{
      logo:CONSTANT.PAGES.LOGO_TEXT.SHORT
    }
  }
}

/**
 * 切换长 logo
 */
export const changeToLongLogo = ()=>{
  return {
    type:CHANGE_TO_LONG_LOGO,
    data:{
      logo:CONSTANT.PAGES.LOGO_TEXT.LONG
    }
  }
}