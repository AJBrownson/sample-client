import { useState } from 'react'
import axios from 'axios'
import './styles.css'


const Login = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    
    axios.post('http://localhost:5000/api/staff', { userName, password })
    .then(res => {
      console.log(res.data)
      window.alert('Sign In successful!')
    })
    .catch((err) => {
      console.log(err)
      window.alert('An error occurred. Try again!')
    })

    // This clears form input values after submission
    setUserName('')
    setPassword('')
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
      <label>Username</label>
        <input 
          type="text" 
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

      <label>Password</label>
        <input 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      <div className='btn-div'>
      <input className='btn' type="submit" />
      </div>
    </form>
    </>
  )
}

export default Login