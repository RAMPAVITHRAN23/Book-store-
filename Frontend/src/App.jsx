import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Components/Nav';
import './index.css';

function App () {
  return (
    <>
    <Nav/>
    <main className= 'min-h-screen max-w-screen-2xl mx-auto px-6 py-6 font-primary'>
      <Outlet/>
    </main>
      <footer>Footer</footer>
    </>
  )
}

export default App