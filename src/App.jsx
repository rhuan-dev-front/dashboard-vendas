import './App.css'
import Card from './components/Card'
import { useState, useEffect } from 'react'
import TabelaUsuarios from './components/TabelaUsuarios'
import Grafico from './components/Grafico.jsx'

function App() {

const [vendas, setVendas] = useState(1200)
const [pedidos, setPedidos] = useState(89)
const [lucro, setLucro] = useState(5000)

  const [busca, setBusca] = useState('')

  const [listaUsuarios, setListaUsuarios] = useState([])

  const [carregando, setCarregando] = useState(true)

  const [darkMode, setDarkMode] = useState(false)


  const carregarUsuarios = () => {
  setCarregando(true)


   fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      setListaUsuarios(data)

      setVendas(Math.floor(Math.random() * 5000))
      setPedidos(Math.floor(Math.random() * 300))
      setLucro(Math.floor(Math.random() * 20000))

      setCarregando(false)
    })

  setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setListaUsuarios(data)
        setCarregando(false)
      })
  }, 4000)

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      setListaUsuarios(data)
      setCarregando(false)

      console.log('Usuários atualizados!')
    })
}



useEffect(() => {
  setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setListaUsuarios(data)
        setCarregando(false)
      })
  }, 3000)
}, [])



return (
  <div className={`layout ${darkMode ? 'dark' : ''}`}>
    <aside className="sidebar">
      <h2>Dashboard</h2>

      <ul>
        <li>Home</li>
        <li>Usuários</li>
        <li>Relatórios</li>
        <li>Configurações</li>
      </ul>
    </aside>

    <button onClick={() => setDarkMode(!darkMode)}>
  {darkMode ? '☀️ Modo Claro' : '🌙 Modo Escuro'}
</button>


    <main className="content">
      <h1>Dashboard</h1>

      <div className="cards">
       <Card titulo="Usuários" valor={listaUsuarios.length} />  
        <Card titulo="Vendas" valor={vendas} />
        <Card titulo="Pedidos" valor={pedidos} />
        <Card titulo="Lucro" valor={`R$ ${lucro}`} />
      </div>


      <h2>Gráfico de Vendas</h2>

<Grafico />

      

<input
  type="text"
  placeholder="Pesquisar usuário..."
  value={busca}
  onChange={(e) => setBusca(e.target.value)}
/>


<button onClick={carregarUsuarios}>
  Atualizar Usuários
</button>

      <h2>Usuários da API</h2>

      <p>
  Usuários encontrados: {
    listaUsuarios.filter(usuario =>
      usuario.name.toLowerCase().includes(busca.toLowerCase())
    ).length
  }
</p>

{carregando ? (
  <p>Carregando usuários...</p>
) : (
  <TabelaUsuarios
    listaUsuarios={listaUsuarios}
    busca={busca}
  />
)}
    </main>
  </div>
)

}

export default App