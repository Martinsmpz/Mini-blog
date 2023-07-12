import { useAuthentication } from '../hooks/useAuthentication'
import styles from './Register.module.css'

import {useState, useEffect} from 'react'

const Register = () => {
   const [displayName, setDisplayName ] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [confirmPassword, setConfirmPassword] = useState("")
   const [error, setError] = useState("")

   const {createUser, error:authError,loading } = useAuthentication();

   const handleSubmit = async (e) => {
    e.preventDefault();

    setError("")

    const user = {
      displayName,
      email,
      password
    }
    
     if(password !== confirmPassword) {
      setError("As senhas precisam ser iguais")
      return
     }

     const res = await createUser(user)

     console.log(user) 

   } 

   useEffect(() => {
    if (authError) {
      setError(authError)
    }
   },[authError])

  return (
    <div className={styles.register}>
        <h1>Register to post</h1>
        <p>Create your user and show your stories</p>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Name:</span>
            <input
             type='text' 
             name="displayname"
             required placeholder="Username"
             value={displayName}
             onChange={(e) => setDisplayName(e.target.value)}
             
             /> 
          </label>

          <label>
            <span>E-mail:</span>
            <input
             type='email' 
             name="email"
             required placeholder="E-mail"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             />
          </label>
          <label>
            <span>Password:</span>
            <input
             type='Password' 
             name="Password"
             required placeholder="Password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             />
          </label>
          <label>
            <span>Confirm your passowrd:</span>
            <input
             type='Password' 
             name="confirmPassword"
             required
              placeholder="Confirm your password"
             value={confirmPassword}
             onChange={(e) => setConfirmPassword(e.target.value)}
             />
          </label>
          {!loading && <button  className='btn'>Register</button>}
          {loading && <button  className='btn' disabled>Wait...</button>}
          {error && <p className="error">{error}</p>}
         
        </form>

    </div>
  )
}

export default Register