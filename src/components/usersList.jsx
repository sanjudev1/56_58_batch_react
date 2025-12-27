
let users=["sachin","kohli","akhil","dhoni","Hardik Panday"]
function UsersList(){
    return(
        <>
       {users.map((val,index)=><h1 key={index}><Greeting user={val} /></h1>)}
      
        </>
    )
}
export default UsersList 

function Greeting(props){
    
    return(<>
    {props.user}
    </>)
}