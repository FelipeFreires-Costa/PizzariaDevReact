import React from 'react'

function IngredientesAdicionados({nome, preco, aoRemover}) {
  return (
    <div>
      <p>{nome} | R$ {preco} </p>
      <button onClick={aoRemover}>Remover</button>
    </div>
  )
}

export default IngredientesAdicionados