import React from 'react'
import "../../styles/molecules/goal.css"

const Goal = ({
    goal,
    otherGoal,
    experience,
    updateFields
}) => {
    return (
        <div className='goal-container'>
            <div>
                <label htmlFor="goal">What's your training goal?</label>
                <div>
                    <input
                        onChange={e => updateFields({ goal: e.target.value })}
                        type="radio" id="Improve on my phsique" name="goal" value="Improve on my phsique" checked={goal === "Improve on my phsique"} />
                    <label htmlFor="Improve on my phsique">Improve on my phsique</label>
                </div>
                <div>
                    <input
                        onChange={e => updateFields({ goal: e.target.value })}
                        type="radio" id="Start working out consistently" name="goal" value="Start working out consistently" checked={goal === "Start working out consistently"} />
                    <label htmlFor="Start working out consistently">Start working out consistently</label>
                </div>
                <div>
                    <input
                        onChange={e => updateFields({ goal: e.target.value })}
                        type="radio" id="Build on Strength" name="goal" value="Build on Strength" checked={goal === "Build on Strength"} />
                    <label htmlFor="Build on Strength">Build on Strength</label>
                </div>
                <div>
                    <input
                        onChange={e => updateFields({ goal: e.target.value })}
                        type="radio" id="Compete in Bodybuilding show" name="goal" value="Compete in Bodybuilding show" checked={goal === "Compete in Bodybuilding show"} />
                    <label htmlFor="Compete in Bodybuilding show">Compete in Bodybuilding show</label>
                </div>
                <div>
                    <input
                        onChange={e => updateFields({ goal: e.target.value })}
                        type="radio" id="Other" name="goal" value="Other" checked={goal === "Other"} />
                    <label htmlFor="Other">Other</label>
                </div>
                {
                    goal === "Other" &&
                    <input type="text" value={otherGoal} onChange={(e) => (updateFields({ "otherGoal": e.target.value }))} />
                }
            </div>

            <div>
                <label htmlFor="experience">Workout Experience?</label>
                <div>
                    <input
                        onChange={e => updateFields({ experience: e.target.value })}
                        type="radio" id="<1 year" name="experience" value="<1 year" checked={experience === "<1 year"} />
                    <label htmlFor="<1 year"> &lt;1 year</label>
                </div>
                <div>
                    <input
                        onChange={e => updateFields({ experience: e.target.value })}
                        type="radio" id="1-2 years" name="experience" value="1-2 years" checked={experience === "1-2 years"} />
                    <label htmlFor="1-2 years">1-2 years</label>
                </div>
                <div>
                    <input
                        onChange={e => updateFields({ experience: e.target.value })}
                        type="radio" id="2-3 years" name="experience" value="2-3 years" checked={experience === "2-3 years"} />
                    <label htmlFor="2-3 years">2-3 years</label>
                </div>
                <div>
                    <input
                        onChange={e => updateFields({ experience: e.target.value })}
                        type="radio" id="3 years+" name="experience" value="3 years+" checked={experience === "3 years+"} />
                    <label htmlFor="3 years+">3 years+</label>
                </div>
                <div>
                    <input
                        onChange={e => updateFields({ experience: e.target.value })}
                        type="radio" id="no experience" name="experience" value="no experience" checked={experience === "no experience"} />
                    <label htmlFor="no experience">No experience</label></div>
            </div>

        </div>
    )
}

export default Goal