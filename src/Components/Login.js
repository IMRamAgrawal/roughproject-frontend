import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [credentials,setCredentials] = useState({ Email:"", Password: ""})
    const onChange = (e)=>{
            setCredentials({...credentials,[e.target.name]: e.target.value})
        }
        const handleSubmit = async(e)=>{
          
          e.preventDefault();
          const {Email, Password} = credentials;
          console.log("serdtfyguh")
          const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method : 'Post',
            headers:{
              'Content-Type' : "application/json",
            },
            body : JSON.stringify({Email, Password})
          })
          setCredentials({ Email:"", Password:""})
          const json = await response.json();
          localStorage.setItem("currentUser", JSON.stringify(json.message))
          if(json.success){
            alert("Successfully login")
            navigate("/")
          }
        }
  return (
    <div>
    <form className='signup' onSubmit={handleSubmit}>
    <h2>Log In</h2>
   
    <label>Email</label>
    <input type="email" name="Email" value={credentials.Email} onChange={onChange}/>
    <label>Password</label>
    <input type="text" name="Password" value={credentials.Password} onChange={onChange}/>
     <button type="Submit">Submit</button>
     <Link to="/signup" >Click here to Register</Link>
   </form>
</div>
  )
}

export default Login