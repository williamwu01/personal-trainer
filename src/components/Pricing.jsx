import React from 'react';
import '../styles/atoms/accent-color.css';
import '../styles/organisms/pricing.css';
import '../styles/molecules/pricing-box.css';
import translationData from '../data/translation.json';
import { LanguageContext } from '../context/LanguageContext';
import { useContext } from 'react';

export default function Pricing() {
    const { language } = useContext(LanguageContext);
    const translatedText = translationData[language];

    return (
        <section id="pricing" className='pricing-section'>
            <h2 className='pricing-title'>
                <span className='accent-color'>{translatedText.pricingTitle[0]} </span>
                {translatedText.pricingTitle[1]}
            </h2>
            <div className='pricing-container'>
                {/* Render pricing sections */}
                {translatedText.pricing.map((pricingOption, index) => (
                    <section key={index} className='pricing-box'>
                        <h3>{pricingOption.pricingHeading}</h3>
                        <h4>{pricingOption.pricingSubHeading}</h4>
                        <ul>
                            {pricingOption.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                            ))}
                        </ul>
                        <p>Bulk Rate: {pricingOption.bulkRate}</p>
                        <p>Discount Bulk Rate: {pricingOption.discountBulkRate}</p>
                        <p>Rate: {pricingOption.rate}</p>
                    </section>
                ))}
            </div>
        </section>
    );
}
