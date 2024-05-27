import React from 'react'
import HeroImage from '/hero-image.jpeg';
import '../styles/hero.css';

export default function Hero(){
	return (
		<div>Hero
			<img className='hero-image' src={HeroImage} alt="dark setting of a gym" />
		</div>
	)
}
