function TabelaUsuarios({ listaUsuarios, busca }) {
  return (
    <table className="tabela">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Empresa</th>
        </tr>
      </thead>

      <tbody>
        {listaUsuarios
          .filter(usuario =>
            usuario.name.toLowerCase().includes(busca.toLowerCase())
          )
          .map(usuario => (
            <tr key={usuario.id}>
              <td>{usuario.name}</td>
              <td>{usuario.email}</td>
              <td>{usuario.company.name}</td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}

export default TabelaUsuarios