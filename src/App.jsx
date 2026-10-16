import './App.css'
import { Header } from './components/Header'
import Home from '.pages/Home';


function App() {
  return (
    <>
    
      <Header>
        brand="Geração Tech"
        description="Sede Bezerra"
        <a href="#equipe">Equipe</a>
        <a href="#aprendizado">Aprendizado</a>

      </Header>
      <main className='container'>
        <Home/>
      </main>
      
    </>
  )
}

export default App
