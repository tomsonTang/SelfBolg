import {combineReducers} from 'redux'

import viewReducer from '../reducers/view';
import cacheReducer from '../reducers/cache';
import responseReducer from '../reducers/response';
import localReducer from '../reducers/local';
import dataReducer from '../reducers/data';

/**
 * @description 
 * 组合 state 的根结构 ，state 从某种意义上来讲就是 model 数据集
 * XXX 代表特定模块
 * 
 * 
 * { 
 *    veiw:{        页面级 state 的管理用于处理跨组件的交互
 *      Sider:{},
 *      XXX:{},
 *    },
 *    cache:{       缓存数据，一些不易变化的的数据
 *      XXX:{},
 *    },
 *    response:{    服务器响应数据
 *      XXX:{},
 *    },
 *    local:{       本地生成尚未持久化到服务器的数据，与用户交互过程生成的数据，每次持久化后应清除对应的 local 临时数据，建议在其模块下使用 timestamp 做 key
 *      XXX:{},
 *    },
 *    data:{        服务器响应数据过滤后的 VO 数据
 *      XXX:{},
 *    },
 * }
 * 
 * 
 * @example 
 *    todos:
 *        1.从服务器拉取数据 => response.TODO
 *        2.将响应数据过滤 response.TODO => data.TODO
 *        3.渲染 data.TODO
 *        4.添加若干 todo 到 local.TODO，用户确认添加后将 local 的新增数据发送到服务器
 *        5.服务器响应后执行第2步，第3步，清空当前的 local 数据
 */
const rootReducer = combineReducers({
  view:viewReducer,
  cache:cacheReducer,
  response:responseReducer,
  local:localReducer,
  data:dataReducer,
});

export default rootReducer;