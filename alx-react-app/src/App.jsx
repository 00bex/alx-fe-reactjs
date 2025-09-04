import WelcomeMessage from './components/WelcomeMessage'
import { useState } from 'react'

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <WelcomeMessage/>
      </div>
        
      
    </>
  )
}

export default App
