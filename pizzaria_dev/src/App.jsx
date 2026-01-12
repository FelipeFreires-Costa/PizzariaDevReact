import { useState } from 'react'
import './App.css'
import CardIngredientes from './Components/CardIngredientes'
import IngredientesAdicionados from './Components/IngredientesAdicionados'
import Tamanho from './Components/Tamanho'


function App() {

  const INGREDIENTES = [
    {id: 1, nome: 'Massa 🥟', preco: 3.50,},
    {id: 2, nome: 'Molho de tomate 🍅', preco: 1.50,},
    {id: 3, nome: 'Queijo 🧀', preco: 5.00,},
    {id: 4, nome: 'Frango 🍗', preco: 4.70,},
    {id: 5, nome: 'Calabresa 🥩', preco: 2.40,},
  ]

  const [isEnviando, setIsEnviando] = useState(false)

  const [tamanho, setTamanho] = useState([
    {id: 6, nome: 'Grande', preco: 10.00},
    {id: 7, nome: 'Media', preco: 7.00},
    {id: 8, nome: 'Pequena', preco: 4.00}
  ])

  const [pedido, setPedido] = useState([])

  const [usuario, setUsuario] = useState({
    nome: "",
    endereco: ''
  })

  function handleChange(event){
    const {name, value} = event.target

    setUsuario({
      ...usuario,
      [name]: value
    })
  }

  function finalizarPedido(){
    setIsEnviando(prevIsEnviado => !prevIsEnviado)
    setTimeout(() => {
      alert(`pedido enviado para ${usuario.nome}, no endereço: ${usuario.endereco}, preço: R$ ${precoTotal}`)
      setUsuario({nome: "", endereco: ""})
      setPedido([])
      setIsEnviando(false)
    }, 2000)
  }

  function escolherTamanho(tamanhoClicado){
    const pedidoSemTamanho = pedido.filter((item) => item.id !== 6 && item.id !== 7 && item.id !== 8)

    setPedido([...pedidoSemTamanho, tamanhoClicado])
  }

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


    const pedidoIsValid = pedido.length > 0 

    const nomeIsValid = usuario.nome.length > 0

    const enderecoIsValid = usuario.endereco.length > 0
    
    const validacao = pedidoIsValid && nomeIsValid && enderecoIsValid

  return(
    <div>
      <h2>Lista de Ingredientes:</h2>
      {
        INGREDIENTES.map((item) => (

          <CardIngredientes key={item.id} nome={item.nome} preco={item.preco} aoClicar={() => toggleIngrediente(item)}/>
        ))
      }

      <h3>Tamanho:</h3>
      {
        tamanho.map((item) => (
          <Tamanho key={item.id}  nome={item.nome} preco={item.preco} aoClicar={() => escolherTamanho(item)} desabilitado={pedidoIsValid}/>
        ) )
      }

      <h3>Ingrediente adicionados:</h3>

      {
        pedido.map((item) => (
          <IngredientesAdicionados key={item.id} nome={item.nome} preco={item.preco} aoRemover={() => removerIngrediente(item.id)}/>
        ))
      }
      <p>preço total: R$ {precoTotal.toFixed(2)}</p>

      <div>
        <input type="text" name="nome" placeholder='Digite seu nome' value={usuario.nome} onChange={handleChange}/>
        <input type="text" name="endereco"  placeholder='Digite seu endereço'value={usuario.endereco} onChange={handleChange}/>
      </div>
      
        <button disabled={!validacao || isEnviando} onClick={finalizarPedido}>{isEnviando ? "Finalizando pedido..." : "Finalizar pedido"}</button>
    </div>
  )
}

export default App
