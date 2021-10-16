import React from 'react';

export default function Carta(props) {
    return (
        <div>
             <h1>
          Olá 
        </h1>
        <p>Nome;{props.nome} </p>
         <p>Destinatario; {props.detinatario}</p>
            <p>
                Estou escrevendo essa carta para a professora Claudiany,
                para avisar que quando estiver empregada, pagarei um almoço para ela.
            </p>
        </div>
    )
}