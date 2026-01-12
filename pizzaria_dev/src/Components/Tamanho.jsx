import React from 'react'

function Tamanho({nome, preco, aoClicar, desabilitado}) {
  return (
    <div>
      <p>Tamanho: {nome} R$ {preco}</p>
      <button disabled={!desabilitado} onClick={aoClicar}>Escolher Tamanho</button>
    </div>
  )
}

export default Tamanho