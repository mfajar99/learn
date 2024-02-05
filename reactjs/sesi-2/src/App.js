// parent component
import React, { useState, useEffect } from 'react'
import Introduction from './components/introduciton'
import Profile from './components/pofile'

function App() {
  // kiri -> getter
  // kanan -> setter
  const [pacarSaya, setPacarSaya] = useState(1)
  const [namaPacar, setNamaPacar] = useState("")

  useEffect(() => {
    if (pacarSaya === 1) {
      setNamaPacar("JODI")
    } else {
      setNamaPacar("Uhuy")
    }
    // alert('halo hehehe');
  }, [pacarSaya])

  return (
    <>
      <h5>nama pacar: {namaPacar}</h5>
      <h1>saya memiliki: {pacarSaya} pacar</h1>
      <button onClick={() => setPacarSaya((prev) => prev + 1)}>tambah pacar</button>
      <button onClick={() => setPacarSaya((prev) => prev - 1)}>putuskan pacar</button>
    </>
  )
}

export default App
