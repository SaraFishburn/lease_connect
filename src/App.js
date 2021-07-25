import React, { useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import CalendarPage from "./pages/calendar_page/CalendarPage"
import LoginPage from "./pages/login_page/LoginPage"
import CreateAccountPage from './pages/create_account_page/CreateAccountPage';
import CreatePropertyPage from './pages/create_property_page/CreatePropertyPage'
import Navbar from './components/navbar/Navbar';
import Test from './pages/Test';
import './global.scss'
import AdminHomePage from './pages/admin_home_page/AdminHomePage';
import {MaintenanceRequestPage} from './pages/maintenance_request_page/MaintenanceRequestPage';
import {MaintenanceDisplayPage} from "./pages/maintenance_display_page/MaintenanceDisplayPage";


function App() {

  function userLoggedIn() {
    return Boolean(localStorage.getItem('authToken'))
  }

  const [user, setUser] = useState(userLoggedIn())

  return (
    <>
      <div className={`background-circles ${!user ? 'login-circle' : ''}`}></div>
      <BrowserRouter>

        {user && (
          <Navbar />
        )}

        <Switch>
          <Route exact path="/">
            <Test />
          </Route>

          <PrivateRoute path="/calendar">
            <CalendarPage />
          </PrivateRoute>

          <PrivateRoute path="/create_account">
            <CreateAccountPage />
          </PrivateRoute>

          <PrivateRoute path="/create_property">
            <CreatePropertyPage />
          </PrivateRoute>

          <PrivateRoute path="/admin_home">
            <AdminHomePage />
          </PrivateRoute>

          <PublicRoute path="/login">
            <LoginPage setUser={setUser} />
          </PublicRoute>

          <PrivateRoute path="/maintenance_page">
            <MaintenanceRequestPage/>
          </PrivateRoute>

          <PrivateRoute path="/maintenance_display_page">
            <MaintenanceDisplayPage/>
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
