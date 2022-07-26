import React, { Component } from 'react';

export default class App extends Component{

  state = {
    livrosHarryPotter:[
      {
        titulo: "Harry Potter e a Pedra Filosofal",
        ano: 1997,
      },
      {
        titulo: "Harry Potter e a Câmara Secreta",
        ano: 1998,
      },
      {
        titulo: "Harry Potter e o Prisioneiro de Azkaban",
        ano: 1999,
      },
      {
        titulo: "Harry Potter e o Cálice de Fogo",
        ano: 2000,
      },
      {
        titulo: "Harry Potter e a Ordem da Fênix",
        ano: 2003,
      },
      {
        titulo: "Harry Potter e o Enigma do Príncipe",
        ano:2005,
      },
      {
        titulo: "Harry Potter e as Relíquias da Morte",
        ano: 2016,
      }
    ]
  }
  render(){
    return(
      <div>
        {this.state.livrosHarryPotter.map((item) => (
            <div>
              <h2>Titulo do livro: {item.titulo}</h2>
              <h3>Ano de lançamento: {item.ano}</h3>
            </div>
        ))}
      
      </div>
    )
  }


}




