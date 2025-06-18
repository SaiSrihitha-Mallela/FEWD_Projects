import React, { useState } from 'react';
import {Routes , Route} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';


function App() {
  const [user, setUser] = useState(() => JSON.parse(sessionStorage.getItem('user')) || null);

  const handleLogout = () => {
    sessionStorage.removeItem('user');
    setUser(null);
  };

  return (
    <div className="App">
      {/* {user ? (
        <>
          <div className="p-4">
            <p>Welcome, {user.username}!</p>
            <button onClick={handleLogout} className="bg-red-500 text-white px-3 py-1 rounded">Logout</button>
          </div>
          
          <Program7/>
        </>
      ) : (
        <Program8 onLogin={setUser}/>
      )} */}

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>






    </div>
  );
}

export default App;
