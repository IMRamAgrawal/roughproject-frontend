import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    const [credentials,setCredentials] = useState({Name:"", Email:"",Password: "", PhoneNumber:""})
const onChange = (e)=>{
        setCredentials({...credentials,[e.target.name]: e.target.value})
    }
    const handleSubmit = async(e)=>{
      e.preventDefault();
      const {Name, Email,Password, PhoneNumber} = credentials;
      console.log("serdtfyguh")
      const response = await fetch(`http://localhost:5000/api/auth/createuser`,{
        method : 'Post',
        headers:{
          'Content-Type' : "application/json",
        },
        body : JSON.stringify({Name, Email, Password, PhoneNumber})
      })
      setCredentials({Name:"", Email:"", Password:"", PhoneNumber:""})
      const json = await response.json();
      if(json.success){
        alert("Successfully registered")
      }
    }
  return (
    <div>
        <form className='signup' onSubmit={handleSubmit}>
        <h2>Registration</h2>
        <label>Name</label>
        <input type="text" name="Name" value={credentials.Name} onChange={onChange}/>
        <label>Email</label>
        <input type="email" name="Email" value={credentials.Email} onChange={onChange}/>
        <label>Password</label>
        <input type="text" name="Password" value={credentials.Password} onChange={onChange}/>
        <label>PhoneNumber</label>
        <input type="Number" name="PhoneNumber"  value={credentials.PhoneNumber} onChange={onChange}/>
       <button type="Submit">Submit</button>
      <Link to="/login" >Click here to login</Link>

       </form>
    </div>
  )
}

export default Signup