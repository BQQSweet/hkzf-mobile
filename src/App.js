import { Link, Route, Redirect, Switch } from "react-router-dom";
import Home from "./pages/Home";
import CityList from "./pages/CityList";

function App() {
  return (
    <div className="App">
      {/*导航菜单*/}

      <Link to="/home">首页</Link>
      <Link to="/citylist">城市选择</Link>

      {/*配置路由*/}
      <Switch>
        <Route path="/home" component={Home} />
        <Route exact path="/citylist" component={CityList} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default App;
