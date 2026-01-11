import React from 'react'

function IngredientesAdicionados({nome}) {
  return (
    <div>
      <p>{nome}</p>
      <button>Remover</button>
    </div>
  )
}

export default IngredientesAdicionados