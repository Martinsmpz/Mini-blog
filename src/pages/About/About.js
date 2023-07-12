import React from 'react'

import {Link} from 'react-router-dom'

import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.about}>
        <h1>About o Mini <span>Blog</span></h1>
        <p>This project consists of a blog made with React JS
           on the frontend and Firebase on the backend</p>

           <Link to="/CreatePost" className="btn">
            Criar post
           </Link>
       
    </div>
  )
}

export default About