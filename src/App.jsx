import './App.css'
import Card from './components/Card'
import { useState, useEffect } from 'react'
import TabelaUsuarios from './components/TabelaUsuarios'

function App() {

  const [usuarios] = useState(250)
  const [vendas] = useState(1200)
  const [pedidos] = useState(89)
  const [lucro] = useState(5000)

  const [busca, setBusca] = useState('')

  const [listaUsuarios, setListaUsuarios] = useState([])


  useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      setListaUsuarios(data)
    })
}, [])

  const atividades = [
  'João fez uma compra',
  'Maria criou uma conta',
  'Pedro atualizou o perfil',
  'Ana realizou um pagamento'
]


return (
  <div className="layout">
    <aside className="sidebar">
      <h2>Dashboard</h2>

      <ul>
        <li>Home</li>
        <li>Usuários</li>
        <li>Relatórios</li>
        <li>Configurações</li>
      </ul>
    </aside>

    <main className="content">
      <h1>Dashboard</h1>

      <div className="cards">
       <Card titulo="Usuários" valor={listaUsuarios.length} />  
        <Card titulo="Vendas" valor={vendas} />
        <Card titulo="Pedidos" valor={pedidos} />
        <Card titulo="Lucro" valor={`R$ ${lucro}`} />
      </div>

      <h2>Atividades Recentes</h2>

      <ul>
        {atividades.map((atividade, index) => (
          <li key={index}>{atividade}</li>
        ))}
      </ul>

<input
  type="text"
  placeholder="Pesquisar usuário..."
  value={busca}
  onChange={(e) => setBusca(e.target.value)}
/>

      <h2>Usuários da API</h2>

      <p>
  Usuários encontrados: {
    listaUsuarios.filter(usuario =>
      usuario.name.toLowerCase().includes(busca.toLowerCase())
    ).length
  }
</p>

<TabelaUsuarios
  listaUsuarios={listaUsuarios}
  busca={busca}
/>

    </main>
  </div>
)

}

export default App