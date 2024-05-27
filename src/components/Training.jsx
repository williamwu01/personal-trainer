import React, { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext';
import translationData from "../data/translation.json";
import "../styles/organisms/features.css"
import "../styles/atoms/accent-color.css"

const Training = () => {

    const { language } = useContext(LanguageContext)
    const translatedText = translationData[language];


    return (
        <section className='image-background'>
            <div className='training container'>

                <div>
                    <h2>
                        <span className='accent-color'>{translatedText.customTitle[0]} </span>
                        {translatedText.customTitle[1]}</h2>
                    <p>{translatedText.customDesc}</p>
                </div>

                <div className='features'>
                    {translatedText.customFeatures.map((el, index) => (
                        <h3 key={index}>
                            {el}
                        </h3>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Training