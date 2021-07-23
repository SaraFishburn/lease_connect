import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import CalendarPage from "./pages/calendar_page/CalendarPage"
import Navbar from './components/navbar/Navbar';
import Test from './pages/Test';
import './global.css'


function App() {
  return (
    <div style={{ textAlign: 'center' }}>

      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Test />
          </Route>

          <Route path="/calendar">
            <CalendarPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
