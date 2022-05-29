import React from 'react'

function Reduce({Ids,arr,handleClicked}) {
 var colorArr = Ids.map((el)=>arr[el-1])

  return (
  <div>
   <h2>Shooted Ballons</h2>
    <div className='displayBox'>
     
      {colorArr.map((item,index)=><div key={index} className='Cool-colour' onClick={()=>handleClicked(item)}  style={{ background: item.color }}>
    
      <h3 className='text'>{item.id}</h3>

      </div>)}
    </div>
    </div>
  )
}

export default Reduce
