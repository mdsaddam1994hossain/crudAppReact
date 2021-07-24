import './App.css';
import { UserProvider } from './components/UserContext/UserContext'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateUser from './components/CreateUser/CreateUser';
import Delete from './components/Delete/Delete';
import Edit from './components/Edit/Edit';

function App() {
  return (

    <div>
      <UserProvider>

        <Router>

          <Switch>

            <Route path="/edit/:id">
              <Edit />
            </Route>

            <Route path="/delete/:id">
              <Delete />
            </Route>

            <Route path="/create">
              <CreateUser />
            </Route>

            <Route path="/">
              <Home />
            </Route>

          </Switch>

        </Router>

      </UserProvider>

    </div>
  );
}

export default App;
