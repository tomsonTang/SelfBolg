import React, {Component} from "react";

import {Sider} from "antd/lib/layout";
import Menu from "antd/lib/menu";
import Icon from "antd/lib/icon";

import props from "./props";

/**
 * 侧边栏
 *
 * @class SBSider
 * @extends {Component}
 */

class SBSider extends Component {
  state = {
    selectedMenuKey: "1"
  };

  events = {
    onMenuClick: e => {
      this.setState({selectedMenuKey: e.key});
    }
  };
  
  render() {
    const {SiderProps, MenuProps} = props.forDynamic(this.state, this.props, this.events);

    return (
      <Sider {...SiderProps}>
        <div className="logo">
          {this.props.logo}
        </div>
        <Menu {...MenuProps}>
          <Menu.Item key="1">
            <Icon type="home"/>
            <span className="nav-text">首页</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="paper-clip"/>
            <span className="nav-text">书签</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="edit"/>
            <span className="nav-text">博客</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="bars"/>
            <span className="nav-text">待办事项</span>
          </Menu.Item>
          <Menu.Item key="5">
            <Icon type="code-o"/>
            <span className="nav-text">日志</span>
          </Menu.Item>
          <Menu.Item key="6">
            <Icon type="setting"/>
            <span className="nav-text">设置</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default SBSider;
