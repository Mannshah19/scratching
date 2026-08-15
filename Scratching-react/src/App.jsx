import React from 'react'
import './App.css'
import Header from './Header.jsx'
import Welcome from './Welcome.jsx'
import Operators from './Operators.jsx'
import Props from './StudentCard.jsx'
import StateExamples from './StateExamples.jsx'
import StudentManager from './StudentManager.jsx'
import Footer from './Footer.jsx'

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Welcome />
      <Operators />
      <Props />
      <StateExamples />
      <StudentManager />
      <Footer />
    </div>
  )
}

export default App
