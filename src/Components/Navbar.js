import {NavLink} from "react-router-dom"

import styles from "./Navbar.module.css"


import { useAuthValue } from "../Context/AuthContext"

import { useAuthentication } from "../hooks/useAuthentication"

const Navbar = () => {
    
  const {user} = useAuthValue()
  const {logout} = useAuthentication()


  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        Mini <span>Blog</span>
      </NavLink>   
 
      <ul className={styles.links_list}>
        <li className={styles.li}>
          <NavLink 
           className={({isActive}) => (isActive ? styles.active : "") } 
             to="/">Home</NavLink>
        </li>
        {!user &&(
          <>
          <li className={styles.li}>
          <NavLink 
           className={({isActive}) => (isActive ? styles.active : "") } 
             to="/Login">Login</NavLink>
        </li>
        <li className={styles.li}>
          <NavLink 
           className={({isActive}) => (isActive ? styles.active : "") } 
             to="/register">Register</NavLink>
        </li>
          </>
        ) }
        
        {user &&(
          <>
          <li className={styles.li}>
          <NavLink 
           className={({isActive}) => (isActive ? styles.active : "") } 
             to="/Dashboard">Dashboard</NavLink>
        </li>
        <li className={styles.li}>
          <NavLink 
           className={({isActive}) => (isActive ? styles.active : "") } 
             to="/CreatePost">New post</NavLink>
        </li>
          </>
        ) }

        

        <li>
        <NavLink
         className={({isActive}) => (isActive ? styles.active : "") } 
         to="/about">About</NavLink>
        </li>

        {user && (
          <button onClick={logout}>Log out</button>
        )}
      </ul>
    </nav>
  )
}

export default Navbar