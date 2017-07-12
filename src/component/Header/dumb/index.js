import React, {Component} from "react";

import {Header} from "antd/lib/layout";
import Icon from "antd/lib/icon";
import Row from "antd/lib/row";
import Col from "antd/lib/col";

import Avatar from "../../Avatar";

import props from "./props";

/**
 *
 * 顶栏
 *
 * @class SBHeader
 * @extends {Component}
 */

class SBHeader extends Component {
  events = {
    onSiderToggle: () => {
      // 默认是展开状态 => false
      const {collapsed, closeSider, openSider, changeToShortLogo, changeToLongLogo} = this.props;

      /**
       * 如果已经是折叠状态则这里让他展开并延迟 0.3秒 后更换 logo
       * 如果是展开状态这里直接折叠
       */
      if (collapsed) {
        // 展开侧边栏
        openSider();
        setTimeout(() => {
          // 更换 logo
          changeToLongLogo();
        }, 300 //
        );
      } else {
        // 展开侧边栏
        closeSider();
        // 更换 logo
        changeToShortLogo();
      }
    }
  };

  render() {
    const {HeaderProps, AvatarColProps, NameColProps} = props.forStatic;
    const {SiderTiggerIconProps} = props.forDynamic(this.state, this.props, this.events);

    return (
      <Header {...HeaderProps}>
        <Row>
          <Col span={2}>
            {/* 侧边栏-tigger bedin */}
            <Icon {...SiderTiggerIconProps}/> {/* 侧边栏-tigger end */}
          </Col>
          <Col {...AvatarColProps}>
            <Avatar unReadMsgCount={1}/>
          </Col>
          <Col {...NameColProps}>
            <span>Tomson</span>
          </Col>
        </Row>
      </Header>
    );
  }
}

export default SBHeader;
