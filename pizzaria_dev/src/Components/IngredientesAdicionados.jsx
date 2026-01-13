import React from 'react'

function IngredientesAdicionados({nome, preco, aoRemover}) {
  return (
    <div className='container-ingredientes-add'>
      <div className='ingredientes-add'>
      <p>{nome} | R$ {preco} </p>
      <button onClick={aoRemover}>Remover</button>        
      </div>

    </div>
  )
}

export default IngredientesAdicionados