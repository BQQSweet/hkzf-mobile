import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import News from "../News";
import Mine from "../Mine";
import TabBar from "../../components/TabBar";
import {
  AppOutline,
  SearchOutline,
  GlobalOutline,
  UserOutline,
} from "antd-mobile-icons";

class Home extends Component {
  state = {
    tabList: [
      {
        name: "首页",
        path: "/home/index",
        icon: <AppOutline />,
      },
      {
        name: "找房",
        path: "/home/find",
        icon: <SearchOutline />,
      },
      {
        name: "资讯",
        path: "/home/news",
        icon: <GlobalOutline />,
      },
      {
        name: "我的",
        path: "/home/mine",
        icon: <UserOutline />,
      },
    ],
  };

  render() {
    const { tabList } = this.state;
    const { location, history } = this.props;
    return (
      <div>
        <div className="tab_bar">
          <TabBar tabList={tabList} history={history} location={location} />
        </div>
        {/*子路由导航*/}

        {/*子路由*/}
        <Route exact path="/home/index/" component={News} />
        <Route exact path="/home/find/" component={News} />
        <Route exact path="/home/news/" component={News} />
        <Route exact path="/home/mine/" component={Mine} />
        <Redirect to="/home/index" />
      </div>
    );
  }
}

export default Home;
