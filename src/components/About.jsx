import React, { useContext } from 'react'
import ProfImg from "/prof-image.jpeg"
import translationData from "../data/translation.json";
import { LanguageContext } from '../context/LanguageContext';
import "../styles/organisms/about.css"
import "../styles/atoms/accent-color.css"

const About = () => {

    const { language } = useContext(LanguageContext)
    const translatedText = translationData[language];

    return (
        <section id="scrolldown" className='about container'>
            <img src={ProfImg} />
            <div>
                <div className='about-content'>
                    <h2>
                        <span className='accent-color'>{translatedText.aboutTitle[0]} </span>
                        {translatedText.aboutTitle[1]}</h2>
                    <p>{translatedText.aboutDesc}</p>
                </div>
                <div>
                    <h2>
                        <span className='accent-color'>{translatedText.competitiveTitle[0]} </span>
                        {translatedText.competitiveTitle[1]}</h2>

                    <div className='competitive'>
                        {translatedText.competitive.map((competition, index) => (
                            <div key={index}>
                                <h3>
                                    {competition.title}
                                </h3>
                                <span className='year'>
                                    {competition.year}
                                </span>
                                {competition.accomplishments.map((el,index) => (
                                    <p key={index}>{el}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                </div></div>
        </section>
    )
}

export default About