import React from 'react'
import { useState } from 'react'

const App = () => {

  const[name, setName] = useState('Suhaib')
  const[age, setAge] = useState(24)

  function changeUser() {
    setName('Adnan')
    setAge(22)
    
  }

  return (
    <div>
      <h1>hello Mr {name} <br /> your age is {age}</h1>
      <button onClick={changeUser}>Greet next user</button>
    </div>
  )
}

export default App
