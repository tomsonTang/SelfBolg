import React from "react";

import Layout from "antd/lib/layout";

import Sider from "../components/Sider/smart";
import Header from "../components/Header/smart";
import "./App.css";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// ================================================
// 容器
// 1.引入 redux 解决跨组件 state 交互问题 
//   譬如：Header 的 Icon 触发 Sider 的展开与闭合效果
// 2.抽出一个常量模块存放跨组件使用的常量
// 3.引入 react-route 解决路由问题
// 4.引入 react-route-redux
// 5.引入 Sass 或则 Less 或则 Stylus
// ================================================

const { Content } = Layout;

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
