import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Movie from './components/Movie'
import Layout from './components/Layout'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (

    <Layout>
      <Routes>
        {/* Route for hjem-siden, som viser søk og søkeresultater */}
        <Route index  element={<Home />}/>
        {/* Route for filmsiden, som viser detaljer om en valgt film */}
        <Route path=":movie" element={<Movie />}/>
      </Routes>
    </Layout>
  )
}

export default App
