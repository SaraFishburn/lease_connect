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
  const [navList, setNavList] = useState([])

  useEffect(() => {
    if(user) {
      API.request('user')
      .then(res => {
        setUserData(res.data)
        setRole(res.data.role_name)
      })
    }
  }, [user])

  let pageList = [
    {
      name: "CALENDAR",
      page: <CalendarPage />, 
      path: "/calendar", 
      auth: ["admin", "property manger"]
    },
    {
      name: "CREATE ACCOUNT",
      page: <CreateAccountPage />, 
      path: "/create_account", 
      auth: ["admin"]
    },
    {
      name: "CREATE PROPERTY",
      page: <CreatePropertyPage />, 
      path: "/create_property", 
      auth: ["admin", "property manager"]
    },
    {
      name: "MAINTENANCE",
      page: <MaintenanceDisplayPage />, 
      path: "/maintenance", 
      auth: ["tenant"]
    },
    {
      name: null,
      page: <MaintenanceRequestPage />, 
      path: "/new_maintenance_request", 
      auth: ["tenant"]
    },
    {
      name: "DOCUMENTS",
      page: <DocumentsPage {...userData.house}/> , 
      path: "/documents", 
      auth: ["tenant"]
    },
    {
      name: null,
      page: <PropertyShowPage />, 
      path: "/houses/view/:id", 
      auth: ["admin", "property manager"]
    },
    {
      name: "MY ACCOUNT",
      page: <UpdateAccountPage {...userData} />, 
      path: "/my_account", 
      auth: ["admin", "property manager", "tenant"]
    },
    {
      name: null,
      page: <UpdatePropertyPage />, 
      path: "/houses/edit/:id", 
      auth: ["admin", "property manager"]
    }
  ]

  useEffect(() => {
    let temp = []
    pageList.map(page => (
      page.name != null && page.auth.includes(role) ?
      temp.push({name: page.name, path: page.path})
      :
      ''
    ))
    temp.unshift({name: "HOME", path: "/"})
    setNavList(temp)
  }, [role])

  return (
    <>
      <div className={`background-circles ${!user ? 'login-circle' : ''}`}></div>
      <BrowserRouter>

        {user && (
          <Navbar navList={navList}/>
        )}

        <Switch>
          {
            pageList.map(page => (
              page.auth.includes(role) ?
              <PrivateRoute path={page.path}>
                {page.page}
              </PrivateRoute>
              :
              ''
            ))
          }

          <PrivateRoute path="/">
            {
              role === "tenant" ?
              <CalendarPage />
              :
              role === "property manager" ?
              <PmHomePage />
              :
              role === "admin" ?
              <AdminHomePage />
              :
              ''
            }
          </PrivateRoute>

          <PublicRoute path="/login">
            <LoginPage setUser={setUser} />
          </PublicRoute>
        </Switch>


        </BrowserRouter>
    </>










        /* <PrivateRoute path="/calendar">
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
          } */


          

          
  


          /* <PrivateRoute path="/documents">
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

          

          <PrivateRoute path="/maintenance_page">
            <MaintenanceRequestPage/>
          </PrivateRoute>

          <PrivateRoute path="/maintenance_display_page">
            <MaintenanceDisplayPage/>
          </PrivateRoute>
       */
  );
}

export default App;
