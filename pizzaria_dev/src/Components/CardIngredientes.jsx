import React from 'react'

function CardIngredientes({nome, preco, aoClicar}) {
  return (
    <div className='container-ingredientes'>
      <div className='ingredientes'>
        <p>Ingrediente: {nome}</p>
        <p>R$ {preco}</p>
        <button onClick={aoClicar}>Adicionar ingrediente</button>
      </div>
    </div>
  )
}

export default CardIngredientes