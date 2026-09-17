import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Headerr from './Component/Header'
import Cardd from './Component/Card'
import Componectt1 from './Component/Componect1'
import Componectt2 from './Component/Componect2'
import Welcomee from './Component/Welcome'
import Buttonn from './Component/Button'




function App() { 
  return <>
    <Cardd />
    <Headerr />
    <Componectt1 />
    <Componectt2 />
    <Welcomee />
    <Buttonn />
  </>
}

export default App
