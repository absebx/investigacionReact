
function Contactos(){
  return <div className="Contacts" />;
}

function Chat(){
  return <div className="Chat" />;
}

function SplitPlane(props){
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function App(){
  return(
    <SplitPlane
       left={<Contactos />}
       right={<Chat />}
    />
  );
}

ReactDOM.render(
  <App />
  ,
  document.getElementById('main')
);