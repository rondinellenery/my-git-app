function Greetings({nome, mensagem}) {
    return(
        <div className="greeting">
            <span className="greeting_eyebrow">React - Primeiros Passos</span>
            <h1>{nome}, {mensagem}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, modi nisi quod illum nesciunt ex obcaecati harum, porro dolorum, accusantium ea ratione quae iusto voluptatibus aut consequuntur quam unde natus.</p>
        </div>
    );
}
export default Greetings;