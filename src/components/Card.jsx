function Card(props) {
  return (
    <div className="card">
      <h2>{props.titulo}</h2>
      <p>{props.valor}</p>
    </div>
  )
}

export default Card