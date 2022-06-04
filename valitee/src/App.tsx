import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import NotFound from "./NotFound";
import Game from "./Game";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/game' element={<Game />}/>
              <Route path='/*' element={<NotFound />}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
