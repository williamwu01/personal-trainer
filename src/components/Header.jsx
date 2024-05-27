import React from 'react'
import LanguageToggle from './LanguageToggle'
import "../styles/organisms/header.css"

const Header = () => {
    return (
        <header className='container'>
            <h1>Logo</h1>

            <nav>
                <ul>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#pricing'>Pricing</a></li>
                    <li><a href='#social'>Socials</a></li>
                    <LanguageToggle />
                </ul>
            </nav>
        </header>
    )
}

export default Header