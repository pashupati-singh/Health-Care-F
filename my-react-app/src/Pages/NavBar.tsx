import React, { useEffect, useState } from 'react'
import image from '../Image/logo.png'
import style from '../CSS/Navbar.module.css'
export const NavBar = () => {
   
  return (
    <nav className={style.navbar} >
        
            <div className={style.imgCon}>
                <img src={image} alt="error" className={style.image} />
                
            </div>
    
    </nav>
  )
}

