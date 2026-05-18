import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className = 'parent'>
    
        <Card user = 'suhaib ishrat' age= {24} />
        <Card user = 'zaid ishrat' age= {25} />
      
      
    </div>
  )
}

export default App
