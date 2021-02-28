
 import React,{useState} from 'react';
 import Registration from "../components/Registration/Registration"

 function Main(props) {
     const [ name,setName] = useState("")
     const [ state,setState] = useState(false)
     const [ number,setNumber] = useState(0)

     const  handleClick = (event) =>{
            setName(event.target.value)

     }
     const  handleNumber = (event) =>{
        setNumber(event.target.value)

 }
     const getName = () =>{
         if(name.length > 5 && number.length === 10){
            setState(true)
         }
         else{
            setState(false)
            alert("Enter Valid Data")
         }
     }
     const getComp = (name) =>{
         if(state){
             return <Registration name={name} number={number} handleClick={handleClick} handleNumber={handleNumber}/>
         }
     }
     return (
         <div>
             Get Details<br/>
             Name:
             <input type="text" onChange={handleClick}/> <br/>
             Number:
             <input type="tel" onChange={handleNumber}/><br/>
             <button onClick={getName}>Get Name</button>
             {/* <Registration/> */}
             {getComp(name)}
         </div>
     );
 }
 
 export default Main;