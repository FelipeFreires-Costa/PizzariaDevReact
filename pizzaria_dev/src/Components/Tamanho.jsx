import React from 'react'

function Tamanho({tamanho, preco, aoClicar, desabilitado}) {
  return (
    <div className='container-tamanho'>
      <div className='tamanho'>
      <p>Tamanho: {tamanho} R$ {preco}</p>
      <button disabled={!desabilitado} onClick={aoClicar}>Escolher Tamanho</button>        
      </div>

    </div>
  )
}

export default Tamanho