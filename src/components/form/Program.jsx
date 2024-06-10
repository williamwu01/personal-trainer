import React from 'react'
import "../../styles/molecules/program.css"

const Program = ({
    programsInterested,
    availability,
    updateFields
}) => {
    return (
        <div className='program-container'>

            <div>
                <label htmlFor="html">Which of the following training programs are you interested in?</label>
                <div>
                    <input
                        onChange={e => updateFields({ programsInterested: e.target.value })}
                        type="checkbox" id="In-person: Customized training" name="programsInterested" value="In-person: Customized training" checked={programsInterested.includes("In-person: Customized training")} />
                    <label htmlFor="In-person: Customized training">In-person: Customized training</label>
                </div>
                <div>

                    <input
                        onChange={e => updateFields({ programsInterested: e.target.value })}
                        type="checkbox" id="In-person: Buddy training" name="programsInterested" value="In-person: Buddy training" checked={programsInterested.includes("In-person: Buddy training")} />
                    <label htmlFor="In-person: Buddy training">In-person: Buddy training</label>
                </div>
                <div>

                    <input
                        onChange={e => updateFields({ programsInterested: e.target.value })}
                        type="checkbox" id="Online: Comp prep/Off-season prep" name="programsInterested" value="Online: Comp prep/Off-season prep" checked={programsInterested.includes("Online: Comp prep/Off-season prep")} />
                    <label htmlFor="Online: Comp prep/Off-season prep">Online: Comp prep/Off-season prep</label>
                </div>
                <div>
                    <input
                        onChange={e => updateFields({ programsInterested: e.target.value })}
                        type="checkbox" id="Online: Lifestyle" name="programsInterested" value="Online: Lifestyle" checked={programsInterested.includes("Online: Lifestyle")} />
                    <label htmlFor="Online: Lifestyle">Online: Lifestyle</label>
                </div>
                <div>
                    <input
                        onChange={e => updateFields({ programsInterested: e.target.value })}
                        type="checkbox" id="Posing" name="programsInterested" value="Posing" checked={programsInterested.includes("Posing")} />
                    <label htmlFor="Posing">Posing</label>
                </div>
                <div>
                    <input
                        onChange={e => updateFields({ programsInterested: e.target.value })}
                        type="checkbox" id="I'm not sure yet! Let's discuss" name="programsInterested" value="I'm not sure yet! Let's discuss" checked={programsInterested.includes("I'm not sure yet! Let's discuss")} />
                    <label htmlFor="I'm not sure yet! Let's discuss">I'm not sure yet! Let's discuss</label>
                </div>
            </div>

            <div>
                <label htmlFor='availability'>Availability (could skip if unsure)</label>
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