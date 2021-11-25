import { Link, Route, Redirect, Switch } from "react-router-dom";
import Home from "./pages/Home";
import CityList from "./pages/CityList";
import Find from "./pages/Find";
import './App.scss'
function App() {
  return (
    <div className="App">
      {/*配置路由*/}
      <Switch>
        <Route path="/home" component={Home} />
          <Route path="/map" component={Find} />
        <Route exact path="/citylist" component={CityList} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default App;
