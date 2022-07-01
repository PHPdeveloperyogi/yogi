import React from "react";
import './forgotpassword.css'
import { useState } from "react";
import FullPageLoader from './FullPageLoader'
import '@fontsource/poppins'
import axios from "axios";
import swal from "sweetalert";

function Forgotpassword({closemodel}) {
    const [isloading,setloading] = useState(false);
    // const emailvalue ={email:''}
    const [data,setdata] = useState({
        email:''
    })
   
    const {email} = data;
    const handlemail = e =>{
        setdata({...data,[e.target.name]:e.target.value});
    }


    const url='https://stage.blendedsense.com/api/forgot_password';

    
    const Submit = (e) =>{
        e.preventDefault();
        setloading(true);
        setTimeout(()=>{

            axios.post(url,data,{
                headers: {
                    "client-id": "4CD884F88F476F647CC4446D4593D",
                    "client-secret": "A955BEBD27BFC49E8CE12129346A4"
                }
            })
            .then((p) => {
                setloading(false);
                swal('success',p.data.message,'success',{buttons:{info:'ok',}}).then(function(){
                    window.location = '/login'
                })
            })
            .catch((e)=>{
                setloading(false);
                swal('Oops',e.response.data.message,'error',{buttons:{danger:'OK'}}).then(function(){
                    window.location = '/login'
                })
            });
        });
    }

    // swal('Oops',e.response.statusText,'error',{buttons:{danger:'OK'}})
    return (
        
        <div className="modelbody">
            
              <div className="modelBackground">
                 <div className="modelContainer">
                         <b>RECOVER PASSWORD</b>
                            <a id="btn1" className="btn" onClick={()=>closemodel(false)}><b>X</b></a>
                        <div className="title">
                                Enter the email address associated with your account.
                        </div>
            <form>
            <div className="body">
            
                <br/>
                <input type='email' name='email' value={email} onChange={handlemail} className="input3 border-muted"  />
                
                
            </div>
            <div className="footer p-4">
                <button className="btn modelbtn" onClick={()=>closemodel(false)}>Cancel</button>
                <button className="btn modelbtn2" onClick={Submit} type="submit">Send Reset Link</button>
                {isloading?<FullPageLoader />:''}
            </div>
            </form>
            
        </div>
    </div>
    
    </div>)
}

export default Forgotpassword;