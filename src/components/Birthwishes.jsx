
import "./birthday.css"
import style from "./birthday.module.css"
let birthdaycandidates=["pawan kalyan","Amrutha","nandini","Maheshbabu"]


function BirthdayList(){
    return(
        <>
         {birthdaycandidates.map((val,index)=><h1 key={index}><BirthdayWishes birthdaycandidate={val}/></h1>)}
        </>
    )
}

export default BirthdayList


function BirthdayWishes(props){
    let {birthdaycandidate}=props
 
    return(
        <div className={style.Theme}>Happy birthday {birthdaycandidate}</div>
    )
}

