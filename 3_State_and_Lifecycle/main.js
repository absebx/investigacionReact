//componente como una clase de ECMA6
class FormattedDate extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <h2>
        Son las {this.props.date.toLocaleTimeString()}
      </h2>
    );
  }
}

//componente como una clase Ecma6
class Clock extends React.Component {

  constructor(props){
    //solo en el constructor se puede asignar el state
    super(props);
    this.state = {date: new Date()};
  }

  //Cuando el componente se renderiza en la pantalla
  componentDidMount(){
    console.log('mount')
    //el timer se ingresa directo en la clase si no influye en el flujo de datos
    this.timerID = setInterval(()=>{
      this.tick(),1000
    });
  }

  //cuando el componente se quita de la pantalla
  componentWillUnmount(){
    clearInterval(this.timerID); //limpiar el timer para ahorrar recursos
  }

  tick(){
    //set state solo actualiza lo que selecciones (Merge)
    this.setState({
      date: new Date()
    });
  }

  //**se ejecuta cada vez que ocurre una actualización del STATE**
  //esto permite que sólo UNA INSTANCIA del componente sea ejecutada
  //lo que permite tener las funcionalidades de las clases como el STATE
  render(){
    // console.log('render');
    return (
      <div>
        <h1>La hora !</h1>
        {/* top down or unidireccional data flow */}
        <FormattedDate date={this.state.date} />
        {/* <h2>It is {this.state.date.toLocaleTimeString()}.</h2> */}
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <Clock />
    <Clock />
  </div>
  ,
  document.getElementById('main')
);