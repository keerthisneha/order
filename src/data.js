import "./order.css";
import Home from "./Home"
import details from "./details"
import { useState } from "react";
const Navbar = () => {
  let detailscopy=[...details];
  const[search,setSearch] = useState('')

  let transfer2 = detailscopy.filter((x) => {
     let length=search.length;
     let b=x.glass.slice(0,length);
     let c = x.name.slice(0, length);
      return b === search || c === search;
    });
    let transfer1 = () => {
      if(search.length > 0) {
        return transfer2.map((x, i) => (
          <Home
            id={x.id}
            key={i}
            image={x.img}
            name={x.name}
            alcoholic={x.Alcoholic}
            glass={x.glass}
            details={x.Details}
            fun={() => console.log(x.id)}
          />
        ));
      }
      else{
        return(<h1>"No Results Found"</h1>)
      }
    }
  
    let transfer = detailscopy.map((x, i) => (
      <Home
        key={i}
        id={x.id}
        image={x.img}
        name={x.name}
        alcoholic={x.Alcoholic}
        glass={x.glass}
        details={x.Details}
        fun={() => console.log(x.id)}
      />
    ));
    
    const [change, setChange] = useState(transfer);
      let fun1 = () =>{
      return  setChange(search.length>0 ? transfer1 : transfer)   
      }

    return (
       <>
         <div className="flexing">
           <div>
             <h1 className="heading">
               The<span>Cocktail</span>DB
             </h1>
           </div>
           <div className="links">
             <a href="/Home">Home</a>
             <a href="/about">About</a>
           </div>
         </div>
         <div className="searchbar">
           <h4>Search Your Favourite Cocktail</h4>
           <input type="text" onClick={fun1}
            onChange={(e) => setSearch(e.target.value)} 
            />
         </div> 
         <main>{change}</main>        
       </>
     );
}
 
export default Navbar;