import { useState } from "react";
import "./app.css"
import Button from "./components/Button";

export default function App() {
  const [contador, setContador] = useState(0);

  const [carregando, setCarregando] = useState(false)
  const [nomeFruta, setNomeFruta] = useState("")
  const [frutas, setFrutas] = useState([
    {"id": 1, "nome": "Melancia 🍉", "preco": 10},
    {"id": 2, "nome": "Banana 🍌", "preco": 3},
    {"id": 3, "nome": "Morango 🍓", "preco": 5},
    {"id": 4, "nome": "Uva 🍇", "preco": 15}
  ])

  function incrementar() {
    setContador(contador + 1)

    console.log(contador)
  }

  function adicionarFruta() {
    const novaFruta = {
      id: frutas.length + 1,
      nome: nomeFruta,
      preco: 34,
    }

    setFrutas([... frutas, novaFruta])
    setNomeFruta(" ")
  }

  return (
    <>
      <h1>{contador}</h1>
      <Button funcao={incrementar} texto={"Incrementar"}/>
      <h2>Lista feira</h2>
      
      {frutas.map(item => (<div key={item.id}>{item.nome} preço {item.preco}</div>))}
      <label>Fruta</label>
      <input type="text" value={nomeFruta} onChange={e => setNomeFruta(e.target.value)}/>
      <p>{nomeFruta}</p>
      <Button funcao={adicionarFruta} texto={"Adicionar"} />
    </>
  )
}