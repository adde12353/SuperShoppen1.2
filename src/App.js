import './App.css';
import NavBar from './Nav';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Produkt from './Produkt';
import Produkter from './Produkter';
import data from './components/Produktinfo/Data.js'
import { useState } from 'react';
import Varukorg from './Varukorg';

function App() {
  const {produkter} = data;
  const [varukorg, setVarukorg] = useState([]);

  const handleAdd = (produkt) =>{
      const ProduktEx = varukorg.find((item) => item.id === produkt.id);
      if(ProduktEx) {
        setVarukorg(varukorg.map((item) => item.id === produkt.id ?
        {...ProduktEx, quantity: ProduktEx.quantity +1 }: item)
        );
        console.log("hej")
      }
        else{ 
          setVarukorg([...varukorg, {...produkt, quantity:1 }])
          console.log("Nej")
        }
      };

      const handleRemove = (produkt) =>{
        const ProduktEx = varukorg.find((item) => item.id === produkt.id);
          if(ProduktEx.quantity === 1) 
          {setVarukorg(varukorg.filter((item) => item.id !== produkt.id))} 
          else {setVarukorg(
            varukorg.map((item => item.id === produkt.id ? {...ProduktEx, quantity: ProduktEx.quantity -1} 
            : item
          ))
            )
        }
          };
      
      
      
      
      
  
    
  

  return (

    
    <Router>
    <div className="App">

      
      <NavBar/>
         <Switch>
           <Route exact path="/">
             <Home/>
           </Route>
           <Route exact path="/produkter">
             <Produkter produkter={produkter} varukorg={varukorg} handleAdd={handleAdd} />
           </Route>
           <Route exact path="/varukorg">
            <Varukorg produkter={produkter} varukorg={varukorg} handleAdd={handleAdd} handleRemove={handleRemove}/>
             </Route>
             <Route path="/produkt/:id">
               <Produkt produkter={produkter} varukorg={varukorg} handleAdd={handleAdd} handleRemove={handleRemove}/>
             </Route>

             

         </Switch>

        
      
      
    </div>
    </Router>
  );
}

export default App;
