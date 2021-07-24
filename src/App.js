import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';

import CalendarPage from "./pages/calendar_page/CalendarPage"
import LoginPage from "./pages/login_page/LoginPage"
import Navbar from './components/navbar/Navbar';
import Test from './pages/Test';
import './global.scss'


function App() {
  return (
    <>
      <div className='background-circles'></div>
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Test />
          </Route>

          <PrivateRoute path="/calendar">
            <CalendarPage />
          </PrivateRoute>

          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
