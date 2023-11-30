import React from 'react'

function Shimmer() {
  return (
    <div style={{width:"100%", display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
      {
        Array(30).fill(" ").map((e,index)=><div key={index} style={{width:300,height:300, border:'2px solid rgba(1,1,1,1)', padding:5, margin:10,backgroundColor:'gray' }}></div>)
      }
    </div>
  )
}

export default Shimmer
