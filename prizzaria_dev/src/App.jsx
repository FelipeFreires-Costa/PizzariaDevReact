import { useState } from 'react'
import './App.css'
import CardIngredientes from './Components/CardIngredientes'
import IngredientesAdicionados from './Components/IngredientesAdicionados'

function App() {

  const INGREDIENTES = [
    {id: 1, nome: 'Massa 🥟', preco: 3.50,},
    {id: 2, nome: 'Molho de tomate 🍅', preco: 1.50,},
    {id: 3, nome: 'Queijo 🧀', preco: 5.00,},
    {id: 4, nome: 'Frango 🍗', preco: 4.70,},
    {id: 5, nome: 'Calabresa 🥩', preco: 2.40,},
  ]

  const [pedido, setPedido] = useState([])

  function toggleIngrediente(ingredienteClicado){
    const jaTemPedido = pedido.some((item) => item.id === ingredienteClicado.id)

    if(jaTemPedido){
      const novoPedido = (pedido.filter((item) => item.id !== ingredienteClicado.id))
      setPedido(novoPedido)
    }else{
      setPedido([...pedido, ingredienteClicado])
      }
    }

    function removerIngrediente(id){
      const novoPedido = pedido.filter((item) => item.id !== id)
      setPedido(novoPedido)
    }

    const precoTotal = pedido.reduce((acc, item) => {
      return acc + item.preco
    }, 0)

    console.log(pedido)

  return(
    <div>
      <h2>Lista de Ingredientes:</h2>
      {
        INGREDIENTES.map((item) => (

          <CardIngredientes key={item.id} nome={item.nome} preco={item.preco} aoClicar={() => toggleIngrediente(item)}/>
        ))
      }
      <h3>Ingrediente adicionados:</h3>

      {
        pedido.map((item) => (
          <IngredientesAdicionados key={item.id} nome={item.nome} preco={item.preco} aoRemover={() => removerIngrediente(item.id)}/>
        ))
      }
      <p>preço total: R$ {precoTotal.toFixed(2)}</p>
    </div>
  )
}

export default App
