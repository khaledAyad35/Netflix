import React, { useEffect, useState } from 'react'
import logo from './netflixLogo/logo'
import user from './netflixLogo/user'
import "./nav.css"


const Nav = () => {
    const [show, handelShow] = useState()
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handelShow(true)
            } else { handelShow(false) }
        })
        return () => {
            window.addEventListener("scroll")
        }
    }, [])
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className='logo' src={logo} alt='Netflix Logo' />
            <img className='user' src={user} alt='User Name' />

        </div>
    )
}

export default Nav
