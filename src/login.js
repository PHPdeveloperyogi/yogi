import './login.css'
import img1 from './images/background1.svg'
import img2 from './images/background2.svg'
import img3 from './images/background3.svg'
import img4 from './images/background4.svg'
import img5 from './images/google.svg'
import img6 from './images/logo.svg'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { useState, } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faRegistered } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import FullPageLoader from './FullPageLoader'
import swal from 'sweetalert'
import Forgotpassword from './forgotpasssword'
import '@fontsource/poppins'
import { useForm } from 'react-hook-form'




function Login() {
  const {register,handleSubmit,watch,formState:{errors},trigger} = useForm({
    mode:'all'
  });
  const [openmodel, setopenmodel] = useState(false);
  const [passwordvalue, setpassword] = useState('password');
  const [isloading, setloading] = useState(false);
  const url = 'https://stage.blendedsense.com/api/login';



  const togglepwd = () => {
    if (passwordvalue === 'password') {
      setpassword('text')
      return;
    }
    setpassword('password')
  }



  const Submitform = (e) => {
    setloading(true);
    console.log(e);
    setTimeout(() => {
      axios.post(url, e, {
        headers: {
          "client-id": "4CD884F88F476F647CC4446D4593D",
          "client-secret": "A955BEBD27BFC49E8CE12129346A4"
        }
      })
        .then((succ) => {
          setloading(false);
          swal({ title: succ.data.message, icon: 'success', button: 'ok' })
        })
        .catch((err) => {
          setloading(false);
          swal('Oops', err.response.data.message, 'error', { buttons: { danger: 'OK' } })
        })

    })
  }


  function Mouseover(event) {
    event.target.style.background = 'rgba(245, 245, 245, 0.869)';
    event.target.style.color = 'gray';
  }
  function Mouseout(event) {
    event.target.style.background = '';
  }

  const email = watch('email')
  const password = watch('password')

  const isValid = email && password;


  return (
    <>

      <div className="main">
        <div className="col-3 offset-9 p-4 lang d-block">
          {/* <FullPageLoader/> */}
        </div>
        <div className="container">
          <div className="row justify-content-center mainbox">
            <div className="img">
              <div className="line w-100">
              </div>
              <div className="sheet"></div>
              <img src={img1} className="image1" />
              <img src={img2} className="image2" />
              <img src={img3} className="image3" />
              <img src={img4} className="image4" />
            </div>
            <div className="card1 rounded">

              <img className="ms-5 mt-3 logo" src={img6} />
              <p className="text-center login display-8 mt-3"><span>LOGIN</span></p>
              <a  className="googlebtn w-60 mb-2 rounded-pill d-block ms-3 me-2" 
                  onMouseOver={Mouseover} onMouseOut={Mouseout} 
                  type="button"><img className="google me-2" 
                  src={img5}/>
              <b>Continue with Google</b>
              </a>

              <p className="or">&nbsp;&nbsp;or&nbsp;&nbsp;</p>
              <form onSubmit={handleSubmit(Submitform)} className='loginform'>
                
                  <div className="in">
                  <input 
                    className={`form-control border-muted p-3 ${ errors.email && 'errorborder'}`}
                    placeholder='Email Address'
                    name='email'
                    style={{ fontWeight:400,fontSize:16}}
                    {...register('email',{required:'Please provide your email address',
                    pattern:{
                        value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message:'Please provide your email address'
                    }
                    })}
                    onKeyDown={()=>{
                        trigger('email');
                    }}
                    />
                    {errors.email &&(<small className="text-danger">{errors.email.message}</small>)}
                  </div>
                  <div className="in2">
                  <div onClick={togglepwd}>
                      {passwordvalue === 'password' ?
                        <FontAwesomeIcon icon={faEyeSlash} id="eyepwd1"></FontAwesomeIcon> :
                        <FontAwesomeIcon icon={faEye} id='eyepwd1'></FontAwesomeIcon>}
                    </div>

                    <input 
                    className={`form-control border-muted p-3 ${ errors.password && 'errorborder'}`}
                    style={{ fontWeight: 400,fontSize:16 }}
                    placeholder='Password'
                    {...register('password',{required:'Please provide your password',
                    })}
                    type={passwordvalue}
                    onKeyDown={()=>{
                        trigger('password')
                    }}
                    />
                    {errors.password && (<small className="text-danger">{errors.password.message}</small>)}
                    

                  </div>
                
                <div className="d-block">
                  <div className="flexStyle mt-3">
                  {/* className="btn loginbtn btn-info rounded-pill text-white"  */}
                    <input 
                          className={`btn loginbtn rounded-pill text-dark ${isValid && 'btn loginbtn2 text-white'}`} 
                          style={{ fontWeight: 'bold' }} 
                          type="submit" 
                          value="Login with Email"
                          disabled ={!isValid}
                    />
                      

                  </div>
                  <div className="col text-center">
                    <a 
                      onClick={() => { setopenmodel(true) }} 
                      className="openModelBtn btn text-info text-decoration-none">Forgot Password?
                    </a>

                    {openmodel && <Forgotpassword closemodel={setopenmodel} />}

                    <p className="text-center">Need an account?<a href="#" 
                                                                                className="text-info text-decoration-none">Sign Up</a></p>
                  </div>
                  {/*  */}
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>

      {isloading ? <FullPageLoader /> : ''}
    </>
  );
}


export default Login