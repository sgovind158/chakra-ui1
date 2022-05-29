
import { useState } from 'react';
import './App.css';
import PlacementExample from './component/Draver';
import DrawerExample from './component/Draver';
import Navbar from './component/Navbar';

import style from "../src/component/style.module.css"


function App() {
  const [navbar,SetNavbar] = useState(false)

  const showNavbar = (navbar)=>{
   
    SetNavbar(!navbar)
    console.log(navbar)
}

  return (
 <div className='App'>


  

{navbar ? <Navbar showNavbar= {showNavbar}/> : <PlacementExample/>}

<button style={{color: "black" , width:"100px", hight : "50px", border: "1px solid blue", background:"green"}} onClick={()=>showNavbar(navbar)}>Show Navbar</button>
</div>


  );
}

export default App;
