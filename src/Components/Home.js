import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const [credentials,setCredentials] = useState({ Title:"", Description: ""})
  const onChange = (e)=>{
          setCredentials({...credentials,[e.target.name]: e.target.value})
      }
      const handleSubmit = async(e)=>{
        e.preventDefault();
        const currentUser = localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")): null
        const {Title, Description} = credentials;
        
        const response = await fetch(`http://localhost:5000/api/notes/addnote`,{
          method : 'Post',
          
          headers:{
            'Content-Type' : "application/json",

          },
          body : JSON.stringify({Title, Description, currentUser})
        })
        setCredentials({ Title:"", Description:""})
        const json = await response.json();
        if(json.success){
          alert("Successfully added note")
          
        }
      }
  return (
    <div>
          <form className='signup' onSubmit={handleSubmit}>
    <h2>Add note</h2>
   
    <label>Title</label>
    <input type="text" name="Title" value={credentials.Title} onChange={onChange}/>
    <label>Description</label>
    <input type="text" name="Description" value={credentials.Description} onChange={onChange}/>
     <button type="Submit">Submit</button>
     <Link to="/login" >Click here to login</Link>
   </form>
    </div>
  )
}

export default Home