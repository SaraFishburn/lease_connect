import React from 'react';
import CalendarPage from "./pages/calendar_page/CalendarPage"
import NewUser from './components/user/NewUser';
import Navbar from './components/navbar/Navbar';
import './global.css'


import NewHouse from './components/house/NewHouse';
import LoginForm from './components/login/LoginForm';
import ImageUpload from './components/image/ImageUpload';
import Maintenance from './components/maintenance/Maintenance';


function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Navbar />
      <header>
        <h1>Lease Connect</h1>
        <ImageUpload />
        <LoginForm />
        <NewUser/>
        <NewHouse />
        <Maintenance />
      </header>

      <CalendarPage />

    </div>
  );
}

export default App;

