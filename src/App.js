import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";

function App() {
  let todos=[
    {
      sno: 1,
      title:"Go to the market",
      desc:"You need to go to the market to get this job done"
    },
    {
      sno: 2,
      title:"Go to the hospital",
      desc:"You need to go to the market to get this job done"
    },
    {
      sno: 3,
      title:"Go to the bank",
      desc:"You need to go to the market to get this job done"
    }


  ]
  return (
    <>
     <Header title ="My TodosList"/>
     <Todos todos={todos}/>
     <Footer/>
    </>
  );
}

export default App;
