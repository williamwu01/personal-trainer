// ThemeToggler.js
import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const LanguageToggle = () => {
    const { language, toggleLanguage } = useContext(LanguageContext);

    return (
        <div className='language'>
            <button className={`${language === 'zh' && 'inactive'}`} onClick={() => toggleLanguage("en")}>
                EN
            </button>
            <button className={`${language === 'en' && 'inactive'}`} onClick={() => toggleLanguage("zh")}>
                CN
            </button>
        </div>
    );
};

export default LanguageToggle;
