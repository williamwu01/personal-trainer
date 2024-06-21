import React from 'react'
import LanguageToggle from './LanguageToggle'
import "../styles/organisms/header.css"
import logo from "/joly-logo1.gif"

const Header = () => {
	
    return (
        <header className='container'>
            <img src={logo} alt="joly bear logo" className='logo'/>

            <nav>
                <ul>
                    <li><a href='#scrolldown'>About</a></li>
                    <li><a href='#pricing'>Pricing</a></li>
                    <li><a href='#social'>Socials</a></li>
                    <LanguageToggle />
                </ul>
            </nav>

					

        </header>
    )
}

export default Header