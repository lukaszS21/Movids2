
import './App.css';
import {BrowserRouter, Switch} from 'react-router-dom';
import {Redirect, Route} from 'react-router';
import home from './HomePage/Home.js'
import login from './User/Login'
import register from './User/Register'
import movids from './MainApp/Movids'
import films from "./MainApp/viedo/Serials/Films";
function App() {
  return (
      <BrowserRouter>
          <Route exact path={'/'}>
              <Redirect to={'/home'}/>
          </Route>
          <Switch>
              <Route path='/home' exact  component={home}/>
              <Route path='/Login' exact  component={login}/>
              <Route path='/Register' exact  component={register}/>
              <Route path='/Movids' exact  component={movids}/>
              <Route path='/Films' exact  component={films}/>
          </Switch>
      </BrowserRouter>
  );
}

export default App;
