import React from 'react'
import photo1 from '/ig-photo-1.jpeg'
import photo2 from '/ig-photo-2.jpeg'
import photo3 from '/ig-photo-3.jpeg'
import photo4 from '/ig-photo-4.jpeg'
import photo5 from '/ig-photo-5.jpeg'
import photo6 from '/ig-photo-6.jpeg'
import "../styles/molecules/photogallary.css"
import "../styles/molecules/socials.css"
import translationData from '../data/translation.json';
import { LanguageContext } from '../context/LanguageContext';
import { useContext } from 'react';
import { FaInstagram } from "react-icons/fa6";
// import { TiSocialFacebookCircular } from "react-icons/ti";
import { AiOutlineYoutube } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";




const Socials = () => {
	const { language } = useContext(LanguageContext);
  const translatedText = translationData[language];

	return (
		<>
		<section id="social" className='photogallary'>
			<img className="photoig" src={photo1} alt="photo ifbb pro card" />
			<img className="photoig" src={photo2} alt="photo winning ifbb pro card " />
			<img className="photoig" src={photo3} alt="photo of posing on stage" />
			<img className="photoig" src={photo4} alt="bicep curls" />
			<img className="photoig" src={photo5} alt="posing photo with veins" />
			<img className="photoig" src={photo6} alt="photo of posing on stage" />
			<div className='circle-icon'>
				Follow Instagram
			</div>
		</section>
		<section className='socialmedia'>
			<h2>
				<span className='accent-color'>{translatedText.socialTitle[0]} </span>
				{translatedText.socialTitle[1]}
			</h2>
			<div className='icon-container'>
				<a href="https://www.instagram.com/joly.ifbbpro/?__d=1">
				<FaInstagram />
				</a>
				{/* <TiSocialFacebookCircular /> */}
				<a href="https://www.youtube.com/@jolybearoffical">
				<AiOutlineYoutube />
				</a>
				<a href="mailto:jolybearoffical@gmail.com">
					<MdOutlineEmail />
				</a>
			</div>
		</section>
		</>
	)
}

export default Socials