import React,{Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Home from "./component/Home";
import TeamDetail from "./component/TeamDetail";
import Player from "./component/Player"
import PlayerDetail from './component/PlayerDetail';

class App extends Component{
  render()
  {
    return (
        <Router>
          <div className="container">
            <div className="content">
              <Switch>
                <Route exact path={"/"} component={Home} />
                <Route path={"/detail/:tno"} component={TeamDetail}/>
                <Route path={"/player/:tno"} component={Player}/>
                <Route path={"/player_detail/:tno/:pno"} component={PlayerDetail}/>
              </Switch>
            </div>
          </div>
        </Router>
    );
  }
}

export default App;
