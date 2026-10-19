import { useState } from "react";
import Greetings from "../components/Greetings";

function Home() {
    const [visitorName, setVisitorName]= useState('');


  return (
    <>
     <div className="name-form">
        
    </div>
    <Greetings />
    
    </>
   
  );
}

export default Home;
