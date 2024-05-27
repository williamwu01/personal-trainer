import React from 'react'
import HeroImage from '/hero-image.jpeg';
import '../styles/atoms/hero.css';
import '../styles/molecules/herodetails.css';

export default function Hero(){
	return (
		<div>
			<div className='hero-body'>
				<img className='hero-image' src={HeroImage} alt="dark setting of a gym" />
			<div className='hero-context'>
				<div>
					<div>
						<h1 className='hero-title'>Fitness</h1>
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
