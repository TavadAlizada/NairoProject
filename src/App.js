import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './views';
import Master from './layouts/Master';
import { CursorProvider } from './context/Cursor';
import ScrollUp from './views/HomePage/ScrollUp';

function App() {
  return(
      <CursorProvider>
          <Master>
              <Routes>
                <Route path='/' element={<HomePage/>}/>
              </Routes>
              <ScrollUp/>
        </Master> 
      </CursorProvider>
    );
}



export default App;