import React from 'react';
import NewUser from './components/NewUser';
import NewHouse from './components/NewHouse';

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <header>
        <h1>Lease Connect</h1>
        <NewUser/>
        <NewHouse />
      </header>
    </div>
  );
}

export default App;
