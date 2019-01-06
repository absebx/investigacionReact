

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

function toCelsius(fahrenheit){
  return (fahrenheit - 32) * 5 / 9;
}

function tofahrenheit(celsius){
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert){
  let input = parseFloat(temperature);
  if(Number.isNaN(input)){
    return '';
  }
  let output = convert(input);
  let rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

console.log('convertir');
console.log(tryConvert('123',tofahrenheit));

function BoilingVeredict(props){
  if (props.celsius >= 100){
    return <p>El agua está hirviendo</p>
  }else{
    return <p>EL agua no está hirviendo</p>
  }
}

class TemperatureInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {temperature: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    // this.setState({temperature: e.target.value});
    this.props.onTemperatureChange(e.target.value);
  }

  render(){
    // let temperature = this.state.temperature;
    let temperature = this.props.temperature;
    let scale = this.props.scale;
    return (
      <fieldSet>
        <legend>Ingresa la temperatura en {scaleNames[scale]}:</legend>
        <input
          value={temperature}
          onChange={this.handleChange}
        />

        {/* <BoilingVeredict celsius={parseFloat(temperature)} /> */}
      </fieldSet>
    );
  }
}

class Calculator extends React.Component {

  constructor(props){
    super(props);
    this.state = {temperature: '', scale: 'c'};

    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }

  handleCelsiusChange(temperature){
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature){
    this.setState({scale: 'f', temperature});
  }

  render(){
    let scale = this.state.scale;
    let temperature = this.state.temperature;
    let celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    let fahrenheit = scale === 'c' ? tryConvert(temperature, tofahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput
        scale='c'
        temperature={celsius}
        onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
        scale='f'
        temperature={fahrenheit}
        onTemperatureChange={this.handleFahrenheitChange}
        />

        <BoilingVeredict celsius={celsius}/>
      </div>
    );
  }
}

ReactDOM.render(
  <Calculator />
  ,
  document.getElementById('main')
);