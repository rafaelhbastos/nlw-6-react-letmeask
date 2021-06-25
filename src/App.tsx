import { createContext, useState } from 'react';

import {BrowserRouter, Route} from 'react-router-dom'

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

export const authContext = createContext({} as any);

function App() {
  const [user, setUser] = useState()
  return (
    <BrowserRouter>
      <authContext.Provider value={{ user, setUser }}>
        <Route path='/' exact component={Home}></Route>
        <Route path='/rooms/new' component={NewRoom}></Route>
      </authContext.Provider>
    </BrowserRouter>
  );
}

export default App;
