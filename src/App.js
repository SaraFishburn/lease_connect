import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import API from './helpers/api';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import CalendarPage from "./pages/calendar_page/CalendarPage"
import LoginPage from "./pages/login_page/LoginPage"
import CreateAccountPage from './pages/create_account_page/CreateAccountPage';
import CreatePropertyPage from './pages/create_property_page/CreatePropertyPage'
import UpdateAccountPage from './pages/update_account_page/UpdateAccountPage';
import PmHomePage from './pages/pm_home_page/PmHomePage';
import PropertyShowPage from './pages/property_show_page/PropertyShowPage';
import DocumentsPage from './pages/documents_page/DocumentsPage';

import Navbar from './components/navbar/Navbar';
import Test from './pages/Test';
import './global.scss'
import AdminHomePage from './pages/admin_home_page/AdminHomePage';
import UpdatePropertyPage from './pages/update_property_page/UpdatePropertyPage';
import {MaintenanceRequestPage} from './pages/maintenance_request_page/MaintenanceRequestPage';
import {MaintenanceDisplayPage} from "./pages/maintenance_display_page/MaintenanceDisplayPage";



function App() {

  function userLoggedIn() {
    return Boolean(localStorage.getItem('authToken'))
  }
  const [user, setUser] = useState(userLoggedIn())
  const [userData, setUserData] = useState({})
  const [role, setRole] = useState('')

  useEffect(() => {
    if(user) {
      API.request('user')
      .then(res => {
        setUserData(res.data)
        setRole(res.data.role_name)
      })
    }
  }, [user])

  return (
    <>
      <div className={`background-circles ${!user ? 'login-circle' : ''}`}></div>
      <BrowserRouter>

        {user && (
          <Navbar />
        )}

        <Switch>

          <PrivateRoute path="/calendar">
            <CalendarPage />
          </PrivateRoute>

          <PrivateRoute path="/my_account">
            <UpdateAccountPage user={userData}/>
          </PrivateRoute>





















          {
            role === "admin" ?
            <>
              <PrivateRoute exact path="/">
                <AdminHomePage />
              </PrivateRoute>

              <PrivateRoute path="/create_account">
                <CreateAccountPage />
              </PrivateRoute>
            </>
            :
            <Redirect to='/'/>
          }


          

          
  


          <PrivateRoute path="/documents">
            <DocumentsPage {...userData.house} />
          </PrivateRoute>

          <PrivateRoute path="/create_property">
            <CreatePropertyPage />
          </PrivateRoute>

          <PrivateRoute path="/admin_home">
            <AdminHomePage />
          </PrivateRoute>

          <PrivateRoute path="/houses/edit/:id">
            <UpdatePropertyPage />
          </PrivateRoute>

          

          <PrivateRoute path="/pm_home">
            <PmHomePage />
          </PrivateRoute>

          <PrivateRoute path="/houses/view/:id">
            <PropertyShowPage />
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
