import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from "../action";

import Dumb from "../dumb";

// selector
const mapStateToProps = (state) => ({
  ...state.view.sider
});

// 自动将 actionCreators 内的每个 action(Function) 做一次 Wraap ，每次调用对应的方法会自动 dispach
const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

const Smart = connect(mapStateToProps, mapDispatchToProps)(Dumb);

export default Smart;
