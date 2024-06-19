import React, { useContext } from 'react'
import "../../styles/molecules/health.css"
import translationData from '../../data/translation.json';
import { LanguageContext } from '../../context/LanguageContext';

const Health = ({
    allergies,
    medicalCondition,
    updateFields
}) => {

    const { language } = useContext(LanguageContext);
    const translatedText = translationData[language];

    return (
        <div className='health-container'>
            <div>
                <label htmlFor="allergies">{translatedText.form.allergies}</label>
                <input type="text" name="allergies" value={allergies} id="allergies" onChange={(e) => updateFields({ allergies: e.target.value })} />
            </div>

            <div className='allergies'>
                <label>{translatedText.form.medicalCondition}</label>
                <div>
                    <input
                        onChange={e => updateFields({ medicalCondition: e.target.value })}
                        type="radio" id="High Blood Pressure" name="medicalCondition" value="High Blood Pressure" checked={medicalCondition === "High Blood Pressure"} />
                    <label htmlFor="High Blood Pressure">{translatedText.form.medicalOptions.o1}</label>
                </div>

                <div>
                    <input
                        onChange={e => updateFields({ medicalCondition: e.target.value })}
                        type="radio" id="Diabetes" name="medicalCondition" value="Diabetes" checked={medicalCondition === "Diabetes"} />
                    <label htmlFor="Diabetes">{translatedText.form.medicalOptions.o2}</label>
                </div>

                <div>
                    <input
                        onChange={e => updateFields({ medicalCondition: e.target.value })}
                        type="radio" id="Cardiovascular disease" name="medicalCondition" value="Cardiovascular disease" checked={medicalCondition === "Cardiovascular disease"} />
                    <label htmlFor="Cardiovascular disease">{translatedText.form.medicalOptions.o3}</label>
                </div>
                <div>
                    <input
                        onChange={e => updateFields({ medicalCondition: e.target.value })}
                        type="radio" id="None" name="medicalCondition" value="None" checked={medicalCondition === "None"} />
                    <label htmlFor="None">{translatedText.form.medicalOptions.o4}</label>
                </div>

                <div>
                    <input
                        onChange={e => updateFields({ medicalCondition: e.target.value })}
                        type="radio" id="Other" name="medicalCondition" value="Other" checked={medicalCondition === "Other"} />
                    <label htmlFor="Other">{translatedText.form.medicalOptions.o5}</label>
                </div>
            </div>

        </div >
    )
}

export default Health