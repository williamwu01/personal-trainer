import React from 'react'
import HeroImage from '/hero-image.jpeg';
import '../styles/atoms/hero.css';
import '../styles/molecules/herodetails.css';
import '../styles/atoms/accent-color.css';
import translationData from "../data/translation.json";
import { useContext } from'react';
import { LanguageContext } from '../context/LanguageContext';


export default function Hero(){
	const {language} = useContext(LanguageContext);
	const transexualtext = (translationData[language])
	return (
		<div className='hero-container'>
			<div className='hero-body'>
				<img className='hero-image' src={HeroImage} alt="dark setting of a gym" />
			<div className='hero-context'>
				<div>
					<div>
						<h1 className='hero-title'>
							<span className='accent-color'>{transexualtext.aboutTitle[0]} </span>
							{transexualtext.aboutTitle[1]}
						</h1>
						<h2 className='hero-subtitle'>Get Fit</h2>
					</div>
					<div>
            <button className='hero-button'>Get Started</button>
          </div>
				</div>
				<button className='hero-dropdown-btn'> V </button>
			</div>
			</div>
		</div>
	)
}
