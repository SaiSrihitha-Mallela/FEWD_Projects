import React, { useState } from 'react';
import Program7 from './components/Programs7-8/Program7';
import Program8 from './components/Programs7-8/Program8';


function App() {
  const [user, setUser] = useState(() => JSON.parse(sessionStorage.getItem('user')) || null);

  const handleLogout = () => {
    sessionStorage.removeItem('user');
    setUser(null);
  };

  return (
    <div className="App">
      {user ? (
        <>
          <div className="p-4">
            <p>Welcome, {user.username}!</p>
            <button onClick={handleLogout} className="bg-red-500 text-white px-3 py-1 rounded">Logout</button>
          </div>
          
          <Program7/>
        </>
      ) : (
        <Program8 onLogin={setUser}/>
      )}
    </div>
  );
}

export default App;
