import './App.css'
import Greetings from './components/Greetings'
import { Header } from './components/Header'

const user = window.prompt("Qual seu nome?") || "Visitante";

function App() {
  return (
    <>
      <Header/>    
      <div>
            <Greetings
            nome={user}
            mensagem="Seja bem-vindo ao React!"
            />
        </div>
    </>
  )
}

export default App
