import React from 'react'

function CardIngredientes({nome, preco, aoClicar}) {
  return (
    <div>
      <p>Ingrediente: {nome}</p>
      <p>R$ {preco}</p>
      <button onClick={aoClicar}>Adicionar ingrediente</button>
    </div>
  )
}

export default CardIngredientes