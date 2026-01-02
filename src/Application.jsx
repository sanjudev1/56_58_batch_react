import React from "react"
import Customnavbar from "./components/customNavbar"
import CustomCoursel from "./components/customCoursel"
import { CustomSpinner } from "./components/customSpinner"
import axios from 'axios'
class Application extends React.Component{
    constructor(){
        super()
        this.state={
            recipes:[]
        }
    }

    fetchrecipes=async()=>{
      try{
         let response= await axios.get('https://dummyjson.com/recipes')
         console.log(response.data.recipes)
         this.setState({recipes:response.data.recipes})
      }catch(err){
        console.log("my error :",err)
      }
       
    }
    componentDidMount(){
      this.fetchrecipes()
    }
render(){
    return(<>
    <Customnavbar/>
    <CustomCoursel/>
    {this.state.recipes.length>0?<>
    {this.state.recipes.map(each=><img src={each.image} style={{width:"300px"}}/>)}
    
    </>:<CustomSpinner/>}
    </>)
}
}
export default Application