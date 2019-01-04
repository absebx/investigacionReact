function UserGreeting(props){
  return <h1>Welcome back!</h1>
}

function GuestGreeting(props){
  return <h1>Please sign up</h1>
}

function Greeting(props){
  const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn === true){
    return <UserGreeting />
  }else{
    return <GuestGreeting />
  }
}

function LoginButton(props){
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  )
}

function LogoutButton(props){
  return (
    <button onClick={props.onClick}>
      logOut
    </button>
  )
}

//usando operador "&&"
//react lo evalua, si a la izquiera es true se muestra y viceversa
function MailBox(props){
  const unReadMessages = props.unReadMessages;

  return (
    <div>
      {unReadMessages.length > 0 &&
        <h2>
          you have {unReadMessages.length} unRead Messages
        </h2>
      }
    </div>
  );
}

//cuando se quiera ocultar un componente se puede retornar null
//segun los valores que recibe el componente

function WarningBanner(props){
  if (!props.warn){
    //retornar nulo no muestra el componente
    return null;
  }

  return(
    <div className="Warning">
      Warning!
    </div>
  );
}


class LoginControl extends React.Component {
  constructor(props){
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.unReadMessages = ['HOla','chcolate', 'Auto', 'Almuerzo'];
    this.state = {isLoggedIn: false};
  }

  handleLoginClick(){
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick(){
    this.setState({isLoggedIn: false});
  }

  render(){
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    //se define el boton de manera condicional, de esta manera
    //se mostrará mas adelante el botón resultante
    if (isLoggedIn){
      button = <LogoutButton onClick={this.handleLogoutClick}/>
    }else{
      button = <LoginButton onClick={this.handleLoginClick}/>
    }

    //tambien se puede usar de la siguiente manera,
    // con expresiones en línea al igual que en javascript
    //hay que tomar en cuenta, que cuando se hace muy complejo
    //significa que hay que extraer componentes
    button = isLoggedIn? (
      <LogoutButton onClick={this.handleLogoutClick}/>
    ) : (
      <LoginButton onClick={this.handleLoginClick}/>
    );

    let body;
    if (isLoggedIn){
      body = (
        <div>
          <WarningBanner warn={false}/>
          <MailBox unReadMessages={this.unReadMessages}/>
        </div>
      )
    }

    return (
      <div>
        <Greeting isLoggedIn = {isLoggedIn}/>
        {/* El botón resultante es el que se muestra */}
        {button}
        {body}
      </div>
    );
  }
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('main')
);