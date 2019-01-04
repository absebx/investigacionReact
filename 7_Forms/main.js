
class NameForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {value : ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    //forma normal
    // this.setState({value: event.target.value});
    //podemos forzar a que sean de sierta manera
    // this.setState({value: event.target.value.toUpperCase()});
    //no puede escribir mas de 3 caracteres
    this.setState({value: event.target.value.substring(0,3)});
  }

  handleSubmit(event){
    alert('A name was submited: ' + this.state.value);
    event.preventDefault();
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="submit"/>
      </form>
    );
  }
}

class EssayForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: 'Por favor escribe un ensayo sobre el DOM'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    alert('Ensayo entregado: ' + this.state.value);
    event.preventDefault();
  }

  render(){
    return (
      <form onSubmit = {this.handleSubmit}>
        <label>
          Ensayo:
          <textarea value={this.state.value} onChange={this.handleChange}></textarea>
        </label>
        <input type="submit" value="Submit"></input>
      </form>
    );
  }
}

class ComidaForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: 'chocolate'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    alert('Comida elegida: ' + this.state.value);
    event.preventDefault();
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Selecciona tu comida:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Almendra">Almendra</option>
            <option value="Limon">Limón</option>
            <option value="chocolate">Chocolate</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


ReactDOM.render(
  // <NameForm />
  // <EssayForm />
  <ComidaForm />
  ,
  document.getElementById('main')
);