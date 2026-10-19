
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <>
        <Header
          brand="Geração Tech"
          description="Sede Bezerra"
        >
          <a href="#equipe">Equipe</a>
          <a href="#aprendizado">Aprendizado</a>
        </Header>
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </>
    </BrowserRouter>
  );
}

export default App;
