
let nombres = ["Abner",'Alfonso','Juanita']

function Hola(props){
  return <h3>Hola {props.name} !</h3>
}

function Hora(props){
  return <div><strong>{}</strong></div>
}

function Main(props){
  return (
    <div>
      {
        props.nombres.map((nombre,i)=>{ //map retorna lo que se obtenga dentro de cada vuelta
          return <Hola key={i}  name={nombre}/>
        })
      }
    </div>
  )
}

ReactDOM.render(<Main nombres={nombres}/>,document.getElementById('main'));