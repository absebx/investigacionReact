function BordeLindo(props){
  return(
    <div className={`FancyBorder FancyBorder-${props.color}`}>
      {props.children}
    </div>
  );
}

function WelcomeDialog(){
  return(
    <BordeLindo color="blue">
      {/* Todo lo de aquí dentro estará en el valor "Children" del otro componente" */}
      <h1 className="Dialog-title">
        Bienvenido
      </h1>
      <p className="Dialog-message">
        Gracias por venir
      </p>
    </BordeLindo>
  );
}


ReactDOM.render(
  <WelcomeDialog></WelcomeDialog>
  ,
  document.getElementById('main')
);