import React, {Component} from "react";
import {Route} from "react-router-dom";
import News from "../News";
import Mine from "../Mine";
import Index from '../Index'
import Find from "../Find";
import TabBar from "../../components/TabBar";
import {AppOutline, GlobalOutline, SearchOutline, UserOutline,} from "antd-mobile-icons";
import './index.scss'

class Home extends Component {
  state = {
    tabList: [
      {
        name: "首页",
        path: "/home",
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
      <div id="#home">
        <div className="tab_bar">
          <TabBar tabList={tabList} history={history} location={location} />
        </div>
        <div className="content">
          {/*子路由*/}
          <Route exact path="/home" component={Index} />
          <Route exact path="/home/find/" component={Find} />
          <Route exact path="/home/news/" component={News} />
          <Route exact path="/home/mine/" component={Mine} />
        </div>
      </div>
    );
  }
}

export default Home;
