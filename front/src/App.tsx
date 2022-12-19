import { useState } from 'react'
import reactLogo from './assets/react.svg'

import Card from './components/Card/index'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card author= 'J.K Rowling' description='O ladrão de raios, em que Percy descobre sua ligação com os deuses do Olimpo e precisa impedir uma guerra entre eles, que acabaria com toda a civilização ocidental; O Mar de Monstros, quando ele e seus amigos se envolvem numa perigosa aventura para defender o Acampamento Meio-Sangue; A maldição do Titã'/>
    </>
  )
}

export default App
