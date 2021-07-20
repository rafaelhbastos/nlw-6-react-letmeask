import {BrowserRouter, Route, Switch} from 'react-router-dom'

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from './pages/Room';

import { AuthContextProvider } from './contexts/authContext';

function App() {

  return (
    <BrowserRouter> 
      <AuthContextProvider>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/rooms/new' exact component={NewRoom}></Route>
          <Route path='/rooms/:id' component={Room}></Route>
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
