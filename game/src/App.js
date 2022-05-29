import React, { useEffect, useRef, useState } from 'react'
import "./App.css"
import Reduce from './components/Reduce';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader"
const override = css`
  display: block;
margin: auto;
margin-top: 250px;
  border-color: lightgreen;
`;
export default function App() {
  const arr = [{
    color: "MediumSeaGreen",
    id: 1
  },
  {
    color: "#ADD8E6",
    id: 2
  },
  {
    color: "FireBrick",
    id: 3
  },
  {
    color: "#FF69B4",
    id: 4
  }, {
    color: "grey",
    id: 5
  }];
const [toggle,setToggle] = useState(false)
  const [array, setArray] = useState(arr)
  const [task, setTask] = useState([])
  const [k, setK] = useState('')
  let [loading, setLoading] = useState(true);
   let [color, setColor] = useState("#ffffff");
  useEffect(()=>{
    if(loading==true){
      setTimeout(()=>{
        setLoading(false)
      },500)
       }
  },[array])
  const handleChange = (e) => {
    setK(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    var newArr = array.filter((el) => { return el.id != k })
    setArray(newArr)
    if(k>0&&k<6){ 
     const IDarray = [...task, k]
      setTask(IDarray)
    alert("Nice Shot! :-)")
    }else {
      alert("Missed Your Shot! Try again :-)")
    }

    setK('')
  }
  const handleClicked = (items) =>{
    setLoading(true)
    const hybrid = [...array,items]

    hybrid.sort(function(a,b){
      return a.id-b.id
    })
    setArray(hybrid)

  const newTask =   task.filter((e)=>e!=items.id)
    setTask(newTask)

  }

 return (
 <>
 : <div className='App'> 
 <div className='ballons-nav'>
      <h1 >Shooting Balloons</h1>
  
      <form className='form-details' onSubmit={handleSubmit}>
        <input placeholder='Enter Number To Shoot....' type="number" value={k} onChange={handleChange} />
        <button type='submit'>Shoot</button>
      </form>
      </div>
 
      {loading==true?  <ClipLoader  color={color} loading={loading} css={override} size={80} /> :    <div className='ShootGame'>
<Reduce arr={arr} Ids={task} handleClicked={handleClicked} /> 

        <div className='display-Ballons' >
          {array.map((el, index) => {
            return (
              <div className='ballons-color'>
              <div key={index}  className='Cool-colour' style={{ background: el.color }} >
            <h3 className='text'>{el.id}</h3>

             </div>
             </div>
            )
          })}
        </div>
      </div>
}

      <div className='bottom-bar'>
        <h3>Kumar Gudipalli</h3>
        <div className='details' >
          
        <h4> @ Email :-</h4> 
          
           <h4>kumargudipalli97@gmail.com</h4> </div>
      </div>
     
    </div>

    </>
  )
}
