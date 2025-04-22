import React from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Protected , roots } from './route/route';
import Layout from '../src/layout/Layout';
function App() {


  return (
    <>  
       <BrowserRouter>
          <Routes>
            {roots.map((route, i) => (
              <Route
                key={i}
                path={route.path}
                element={<Layout>{route.element}</Layout>}
              />
            ))}
            {Protected.map((route, i) => (
            <Route
              key={i}
              path={route.path}
              element={route.element}
            />
          ))}
          </Routes>
          </BrowserRouter>
    </>
  )
}

export default App
