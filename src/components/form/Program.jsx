import React, { useContext } from 'react'
import "../../styles/molecules/program.css"
import translationData from '../../data/translation.json';
import { LanguageContext } from '../../context/LanguageContext';

const Program = ({
    programsInterested,
    availability,
    updateFields
}) => {

    const { language } = useContext(LanguageContext);
    const translatedText = translationData[language];

    return (
        <div className='program-container'>

            <div>
                <label htmlFor="html">{translatedText.form.programsInterested}</label>
                <div>
                    <input
                        onChange={e => updateFields({ programsInterested: e.target.value })}
                        type="checkbox" id="In-person: Customized training" name="programsInterested" value="In-person: Customized training" checked={programsInterested.includes("In-person: Customized training")} />
                    <label htmlFor="In-person: Customized training">{translatedText.form.programOptions.o1}</label>
                </div>
                <div>

                    <input
                        onChange={e => updateFields({ programsInterested: e.target.value })}
                        type="checkbox" id="In-person: Buddy training" name="programsInterested" value="In-person: Buddy training" checked={programsInterested.includes("In-person: Buddy training")} />
                    <label htmlFor="In-person: Buddy training">{translatedText.form.programOptions.o2}</label>
                </div>
                <div>

                    <input
                        onChange={e => updateFields({ programsInterested: e.target.value })}
                        type="checkbox" id="Online: Comp prep/Off-season prep" name="programsInterested" value="Online: Comp prep/Off-season prep" checked={programsInterested.includes("Online: Comp prep/Off-season prep")} />
                    <label htmlFor="Online: Comp prep/Off-season prep">{translatedText.form.programOptions.o3}</label>
                </div>
                <div>
                    <input
                        onChange={e => updateFields({ programsInterested: e.target.value })}
                        type="checkbox" id="Online: Lifestyle" name="programsInterested" value="Online: Lifestyle" checked={programsInterested.includes("Online: Lifestyle")} />
                    <label htmlFor="Online: Lifestyle">{translatedText.form.programOptions.o4}</label>
                </div>
                <div>
                    <input
                        onChange={e => updateFields({ programsInterested: e.target.value })}
                        type="checkbox" id="Posing" name="programsInterested" value="Posing" checked={programsInterested.includes("Posing")} />
                    <label htmlFor="Posing">{translatedText.form.programOptions.o5}</label>
                </div>
                <div>
                    <input
                        onChange={e => updateFields({ programsInterested: e.target.value })}
                        type="checkbox" id="I'm not sure yet! Let's discuss" name="programsInterested" value="I'm not sure yet! Let's discuss" checked={programsInterested.includes("I'm not sure yet! Let's discuss")} />
                    <label htmlFor="I'm not sure yet! Let's discuss">{translatedText.form.programOptions.o6}</label>
                </div>
            </div>

            <div>
                <label htmlFor='availability'>{translatedText.form.availability}</label>
                <textarea
                    name="availability"
                    id="availability"
                    value={availability}
                    onChange={e => updateFields({ availability: e.target.value })}
                />
            </div>
        </div>
    )
}

export default Program