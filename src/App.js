import * as React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/home';
import Sign from './Home/sign';
import ResetPassword from './Home/ResetPassword';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home />} />
          {/* <Route path='/drawernav' element={<DrawerNav />} /> */}
          <Route path='/Sign' element={<Sign />} />
          <Route path='/Resetpassword' element={<ResetPassword/>} /> 
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
