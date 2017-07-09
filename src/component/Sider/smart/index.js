import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Dumb from "../dumb";

const mapStateToProps = (state, ownProps) => ({
  ...state.view.sider
});

const mapDispatchToProps = (dispatch, ownProps) =>
  bindActionCreators({}, dispatch);

const Smart = connect(mapStateToProps, mapDispatchToProps)(Dumb);

export default Smart;
