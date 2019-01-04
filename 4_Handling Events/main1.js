

class Toogle extends React.Component {
  constructor(props){
    super(props);
    this.state = {isToggleOn: true}

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(
      state => ({
        isToggleOn: !state.isToggleOn
      })
    );
  }

  hola(saludo, e){
    console.log(saludo);
  }

  hola2(saludo,e){
    console.log(saludo);
  }

  render(){
    return(
      <div>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn? 'ON' : 'OF'}
        </button>
        {/* Se pueden pasar parametros de estas dos maneras */}
        <button onClick={this.hola.bind(this,"hola")}>
          Hola
        </button>
        <button onClick={(e) => this.hola2("hola",e)}>
          Hola2
        </button>
        {/* De estas maneras se pasa el this, no es necesairo hacer el bind
        en el constructor 
        --Tambien el evento se pasa como el segundo argumento*/}
      </div>
    );
  }
}

let html = <h1>Hola</h1>

ReactDOM.render(
  <Toogle/>
  ,
  document.getElementById('main')
);