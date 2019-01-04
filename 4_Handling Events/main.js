
let sayHello = ()=>{
  console.log("Hello")
}

function ActionLink(){
  function navegar(e){
    e.preventDefault();
    console.log('heello');
  }

  return (
    <a href="#" onClick={navegar}>Hola</a>
  );
}

let button = ()=>{
  return(
    //se pasa la función entera y en camelCase
    <div>
      <ActionLink />
      <button onClick={sayHello}>
      Click
      </button>
    </div>
    
  )
}

ReactDOM.render(
  button()
  ,
  document.getElementById('main')
);