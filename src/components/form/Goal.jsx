import React, { useContext } from 'react'
import "../../styles/molecules/goal.css"
import translationData from '../../data/translation.json';
import { LanguageContext } from '../../context/LanguageContext';

const Goal = ({
    goal,
    otherGoal,
    experience,
    updateFields
}) => {

    const { language } = useContext(LanguageContext);
    const translatedText = translationData[language];

    return (
        <div className='goal-container'>
            <div>
                <label htmlFor="goal">{translatedText.form.goal}</label>
                <div>
                    <input
                        onChange={e => updateFields({ goal: e.target.value })}
                        type="radio" id="Improve on my phsique" name="goal" value="Improve on my phsique" checked={goal === "Improve on my phsique"} />
                    <label htmlFor="Improve on my phsique">{translatedText.form.goal_options.improvePhysique}</label>
                </div>
                <div>
                    <input
                        onChange={e => updateFields({ goal: e.target.value })}
                        type="radio" id="Start working out consistently" name="goal" value="Start working out consistently" checked={goal === "Start working out consistently"} />
                    <label htmlFor="Start working out consistently">{translatedText.form.goal_options.workingOut}</label>
                </div>
                <div>
                    <input
                        onChange={e => updateFields({ goal: e.target.value })}
                        type="radio" id="Build on Strength" name="goal" value="Build on Strength" checked={goal === "Build on Strength"} />
                    <label htmlFor="Build on Strength">{translatedText.form.goal_options.buildStrength}</label>
                </div>
                <div>
                    <input
                        onChange={e => updateFields({ goal: e.target.value })}
                        type="radio" id="Compete in Bodybuilding show" name="goal" value="Compete in Bodybuilding show" checked={goal === "Compete in Bodybuilding show"} />
                    <label htmlFor="Compete in Bodybuilding show">{translatedText.form.goal_options.compete}</label>
                </div>
                <div>
                    <input
                        onChange={e => updateFields({ goal: e.target.value })}
                        type="radio" id="Other" name="goal" value="Other" checked={goal === "Other"} />
                    <label htmlFor="Other">{translatedText.form.goal_options.other}</label>
                </div>
                {
                    goal === "Other" &&
                    <input type="text" value={otherGoal} onChange={(e) => (updateFields({ "otherGoal": e.target.value }))} />
                }
            </div>

            <div>
                <label htmlFor="experience">{translatedText.form.experience}</label>
                <div>
                    <input
                        onChange={e => updateFields({ experience: e.target.value })}
                        type="radio" id="<1 year" name="experience" value="<1 year" checked={experience === "<1 year"} />
                    <label htmlFor="<1 year">{translatedText.form.experience_options.o1}</label>
                </div>
                <div>
                    <input
                        onChange={e => updateFields({ experience: e.target.value })}
                        type="radio" id="1-2 years" name="experience" value="1-2 years" checked={experience === "1-2 years"} />
                    <label htmlFor="1-2 years">{translatedText.form.experience_options.o2}</label>
                </div>
                <div>
                    <input
                        onChange={e => updateFields({ experience: e.target.value })}
                        type="radio" id="2-3 years" name="experience" value="2-3 years" checked={experience === "2-3 years"} />
                    <label htmlFor="2-3 years">{translatedText.form.experience_options.o3}</label>
                </div>
                <div>
                    <input
                        onChange={e => updateFields({ experience: e.target.value })}
                        type="radio" id="3 years+" name="experience" value="3 years+" checked={experience === "3 years+"} />
                    <label htmlFor="3 years+">{translatedText.form.experience_options.o4}</label>
                </div>
                <div>
                    <input
                        onChange={e => updateFields({ experience: e.target.value })}
                        type="radio" id="no experience" name="experience" value="no experience" checked={experience === "no experience"} />
                    <label htmlFor="no experience">{translatedText.form.experience_options.o5}</label></div>
            </div>

        </div>
    )
}

export default Goal