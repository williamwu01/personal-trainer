import React from 'react'

const Program = ({
    programsInterested,
    availability,
    updateFields
}) => {
    return (
        <div>
            <label htmlFor="html">Which of the following training programs are you interested in?</label>

            <input
                onChange={e => updateFields({ programsInterested: e.target.value })}
                type="checkbox" id="In-person: Customized training" name="programsInterested" value="In-person: Customized training" checked={programsInterested.includes("In-person: Customized training")} />
            <label htmlFor="In-person: Customized training">In-person: Customized training</label>

            <input
                onChange={e => updateFields({ programsInterested: e.target.value })}
                type="checkbox" id="In-person: Buddy training" name="programsInterested" value="In-person: Buddy training" checked={programsInterested.includes("In-person: Buddy training")} />
            <label htmlFor="In-person: Buddy training">In-person: Buddy training</label>


            <input
                onChange={e => updateFields({ programsInterested: e.target.value })}
                type="checkbox" id="Online: Comp prep/Off-season prep" name="programsInterested" value="Online: Comp prep/Off-season prep" checked={programsInterested.includes("Online: Comp prep/Off-season prep")} />
            <label htmlFor="Online: Comp prep/Off-season prep">Online: Comp prep/Off-season prep</label>

            <input
                onChange={e => updateFields({ programsInterested: e.target.value })}
                type="checkbox" id="Online: Lifestyle" name="programsInterested" value="Online: Lifestyle" checked={programsInterested.includes("Online: Lifestyle")} />
            <label htmlFor="Online: Lifestyle">Online: Lifestyle</label>

            <input
                onChange={e => updateFields({ programsInterested: e.target.value })}
                type="checkbox" id="Posing" name="programsInterested" value="Posing" checked={programsInterested.includes("Posing")} />
            <label htmlFor="Posing">Posing</label>

            <input
                onChange={e => updateFields({ programsInterested: e.target.value })}
                type="checkbox" id="I'm not sure yet! Let's discuss" name="programsInterested" value="I'm not sure yet! Let's discuss" checked={programsInterested.includes("I'm not sure yet! Let's discuss")} />
            <label htmlFor="I'm not sure yet! Let's discuss">I'm not sure yet! Let's discuss</label>


            <label>Availability (could skip if unsure)</label>
            <input
                type="text"
                value={availability}
                onChange={e => updateFields({ availability: e.target.value })}
            />

        </div>
    )
}

export default Program