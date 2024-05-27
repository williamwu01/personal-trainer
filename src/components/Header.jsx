import React from 'react'
import LanguageToggle from './LanguageToggle'

const Header = () => {
    return (
        <header className='container'>
            <h1>Logo</h1>

            <nav>
                <ul>
                    <li>About</li>
                    <li>Pricing</li>
                    <li>Socials</li>
                    <LanguageToggle />
                </ul>
            </nav>
        </header>
    )
}

export default Header