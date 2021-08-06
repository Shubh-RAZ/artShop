import { useEffect, useState } from "react";
import Jelly from "./Assets/jelly"
import axios from "axios";
import './Welcome.css'
const Welcome = () => {

    const [ id , setId ] = useState()
    const [ name , setName ] = useState()
    const [ showName , setShowName ] = useState(false)

    useEffect( () => {
        const token = localStorage.getItem('token')
        if ( token && token.length >= 4){
            axios.post('http://artwindow.herokuapp.com/art/verifyUser', {
                token
            })
            .then ( res => {
                if( res.data === 'failure'){
                    window.location.assign('/')
                }
                else{
                    setId(res.data)
                    axios.post('http://artwindow.herokuapp.com/art/getUser', {id :res.data})
                    .then ( resp => {
                        setShowName(true)
                        setName(resp.data.name)
                    })
            
                    .catch( err => {
                        console.log(err)
                    })
            
                }
            })
      
            .catch( err => {
                console.log(err)
            })
        }
        else{
            window.location.assign('/')
        }

   
 
    } , [])
    return ( 
        <div className="welcome">
           <div className="content-welcome">
                <div className="welcome-1">hey {name}</div>
                <div className="welcome-sm">
                    <div className="greet"> Hey</div>
                    <div className="name"> {name}</div>
                </div>
                <div className="welcome-2">We are glad to see you on board</div>
            </div> 

            <div className="jelly">
                <Jelly></Jelly>
            </div>
        </div>
     );
}
 
export default Welcome;