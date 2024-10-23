import "./App.css";
import Card from "./components/card";

function App(){
  function hello<T> (a:T){
  return a;
}

const result = hello ([1,2,3,4,5]);
console.log("the value is " + result + "and its type is " + typeof result);



  return(
    <>
   <Card name="Bikash" age={20} address="Palpa"/> 
    
    </> 
  );
}
export default App;