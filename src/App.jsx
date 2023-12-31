import React from 'react'
import Background from './components/background'
import Foreground from './components/Foreground'

function App() {
  return (
    <div>
      <div className='bg-zinc-800 h-screen w-full'>
        <Background/>
        <Foreground/>
      </div>
    </div>
  )
}

export default App