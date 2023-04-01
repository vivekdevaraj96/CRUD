import { Redirect, Route,Switch } from 'react-router-dom';
import './App.css';
import { AddUser } from './components/AddUser';
import UserComponent from './components/UserComponent';
import Nopage from './components/NoPage'
import { UserDetails } from './components/UserDetails';
import EditUser from './components/EditUser';



function App() {
  
 
  return (
    <div className="App">

      <Switch>      

        <Route exact path="/">
          <UserComponent/>
        </Route>

        <Route path="/add/user">
          <AddUser/>
        </Route>

        <Route path="/edit/:id">
          <EditUser/>
        </Route>

        <Route path="/user/:id">
          <UserDetails/>
        </Route>

        <Route path="/student">
          <Redirect path='/'/>
        </Route>

        <Route path="**">
          <Nopage/>
        </Route>

      </Switch>

     
      
    </div>
  );
}

export default App;

