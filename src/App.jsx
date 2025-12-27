import React from "react"
let fruits=[{id:1,name:"apple"},{id:2,name:"grapes"},{id:3,name:"kiwi"},{id:4,name:"banana"}]
function  Items(props){
  let {children} =props
  return(
    <>
      {children.map(each=><li key={each.id}>{each.name}</li>)}
    </>
  )
}

function UnorderList(){
 return(
  <ul>
   <Items >
    {fruits}
   </Items>
  </ul>
 )
}

function OrderList(){
  return(
    <ol>
      <Items >
      {fruits}

      </Items>
    </ol>
  )
}


function App(){

  let name="user1"
  return(
    <div>
      <h1>hello react {name}</h1>
    <UnorderList/>
    <OrderList/>
    </div>
  )
}
export  default App