import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { useState } from 'react'
import './App.css'

//components
import Header from './components/Header'

// views
import Home from './views/Home'
import NewStore from './views/NewStore'
import ShowStore from './views/ShowStore'
import UpdateStore from './views/UpdateStore'


function App() {

  const [pageTitle, setPageTitle] = useState("")

  return (
    <BrowserRouter>
      <Header pageTitle={pageTitle} />
      <Routes>
        <Route path='/' element={<Home setPageTitle={setPageTitle} />} />
        <Route path='/stores/add' element={<NewStore setPageTitle={setPageTitle} />} />
        <Route path='/stores/:id' element={<ShowStore setPageTitle={setPageTitle} />} />
        <Route path='/stores/edit/:id' element={<UpdateStore setPageTitle={setPageTitle} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
