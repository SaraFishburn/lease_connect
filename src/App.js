import React from 'react';
import CalendarPage from "./pages/calendar_page/CalendarPage"
import NewUser from './components/user/NewUser';
import './global.css'
import NewHouse from './components/house/NewHouse';
import LoginForm from './components/login/LoginForm';
import ImageUpload from './components/image/ImageUpload';


function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <header>
        <h1>Lease Connect</h1>
        <ImageUpload />
        <LoginForm />
        <NewUser/>
        <NewHouse />
      </header>

      <CalendarPage></CalendarPage>
    </div>
  );
}

export default App;

