import { useState } from "react";
import Greetings from "../components/Greetings";

function Home() {
    const [visitorName, setVisitorName]= useState('');


  return (
    <>
     <div className="name-form">
        <label htmlFor="visitorName">Como podemos chamar você?</label>
        <input
          type="text"
          id="visitor-name"
          placeholder="Digite seu nome"
          onChange={(evento) => setVisitorName(evento.target.value)}
        />
    </div>
    <Greetings nome={visitorName || "visitante"}/>
    
    </>
   
  );
}

export default Home;
