import React from 'react';
import CalendarPage from "./pages/calendar_page/CalendarPage"
import NewUser from './components/user/NewUser';
import Navbar from './components/navbar/Navbar';
import './global.css'
import NewHouse from './components/house/NewHouse';


function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <header>
        <Navbar />
        <h1>Lease Connect</h1>
        <NewUser/>
        <NewHouse />
      </header>

      <CalendarPage />

    </div>
  );
}

export default App;

