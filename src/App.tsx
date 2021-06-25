import {BrowserRouter, Route} from 'react-router-dom'

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

import { AuthContextProvider } from './contexts/authContext';

function App() {

  return (
    <BrowserRouter> 
      <AuthContextProvider>
        <Route path='/' exact component={Home}></Route>
        <Route path='/rooms/new' component={NewRoom}></Route>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
