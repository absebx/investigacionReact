
let array = [1,2,3,4,5];

let map = array.map(x => x*2);
let map2 = array.map(x => x+" hi")
let map3 = array.map(x => {
  if(x ===  2 ){
    // return null
  }else{
    return x+1;
  }
});

console.log(map);
console.log(map2);
console.log(map3);

function NumberList(props){
  const numbers = props.numbers;
  const listItems = numbers.map((number, index)=>{ //en caso que no tenga un id definido
    //no es recomendable usarlos, ya que si cambia el orden ocasionará problemas
    //por regla, los elementos dentro del map tienen que tener key
    return (
      <li key={index}>{number}</li>
    )
  });

  return (
  <ul>
    {listItems}
  </ul>)
}

ReactDOM.render(
  <NumberList numbers={array}/>
  ,
  document.getElementById('main')
);