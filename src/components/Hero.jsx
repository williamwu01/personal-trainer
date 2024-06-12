import React from 'react'
import HeroImage from '/hero-image.jpeg';
import '../styles/atoms/hero.css';
import '../styles/molecules/herodetails.css';
import '../styles/atoms/accent-color.css';
import translationData from "../data/translation.json";
import { useContext } from'react';
import { LanguageContext } from '../context/LanguageContext';
import { FaArrowDown } from "react-icons/fa6";



export default function Hero(){
	const {language} = useContext(LanguageContext);
	const transexualtext = (translationData[language])
	return (
		<div className='hero-container'>
			<div>
				<img className='hero-image' src={HeroImage} alt="dark setting of a gym" />
			<div className='hero-context'>
				<div className='hero-detail-container'>
					<div>
						<h1 className='hero-title'>
							<span className='accent-color'>{transexualtext.heroTitle[0]} </span>
							{transexualtext.heroTitle[1]}
						</h1>
						<h2 className='hero-subtitle'>{transexualtext.heroSubtitle}</h2>
					</div>
					<div>
            <button className='hero-button'>{transexualtext.heroButton}</button>
          </div>
				</div>
				<button className='hero-dropdown-btn'> 
					<FaArrowDown className='down-arrow'/>
				</button>
			</div>
			</div>
		</div>
	)
}
