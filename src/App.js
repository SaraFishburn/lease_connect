import React from 'react';
import Calendar from "./components/calendar/Calendar"
import NewUser from './components/NewUser';
import './global.css'
import NewHouse from './components/NewHouse';


function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <header>
        <h1>Lease Connect</h1>
        <NewUser/>
        <NewHouse />
      </header>

      <Calendar />
    </div>
  );
}

export default App;
