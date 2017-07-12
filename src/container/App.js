import React from "react";

import Layout from "antd/lib/layout";

import Sider from "../component/Sider/smart";
import Header from "../component/Header/smart";
import "./App.css";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const { Content } = Layout;

/**
 * 容器
 * 
 * @class App
 * @extends {React.Component}
 */

class App extends React.Component {
  render() {
    const ContentStyle = {
      margin: "24px 16px",
      padding: 24,
      background: "#fff",
      minHeight: 280
    };

    return (
      <Layout className="ant-layout-has-sider">
        {/* 侧边栏菜单 begin */}
        <Sider />
        {/* 侧边栏菜单 end */}
        <Layout>
          {/* 头部 begin */}
          <Header />
          {/* 头部 end */}
          {/* 正文 start */}
          <Content style={ContentStyle}>Content</Content>
          {/* 正文 end */}
        </Layout>
      </Layout>
    );
  }
}

// selector
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
