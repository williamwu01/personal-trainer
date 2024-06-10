import React from 'react'

const Health = ({
    allergies,
    medicalCondition,
    updateFields
}) => {
    return (
        <div>

            <div>
                <label htmlFor="allergies">Do you have any allergergies?</label>
                <input type="text" name="allergies" value={allergies} id="allergies" onChange={(e) => updateFields({ allergies: e.target.value })} />
            </div>

            <label>Have you ever been injured or do you have any medical conditions? (Please specify if applicable)?</label>
            <input
                onChange={e => updateFields({ medicalCondition: e.target.value })}
                type="radio" id="High Blood Pressure" name="medicalCondition" value="High Blood Pressure" checked={medicalCondition === "High Blood Pressure"} />
            <label htmlFor="High Blood Pressure">High Blood Pressure</label>
            <input
                onChange={e => updateFields({ medicalCondition: e.target.value })}
                type="radio" id="Diabetes" name="medicalCondition" value="Diabetes" checked={medicalCondition === "Diabetes"} />
            <label htmlFor="Diabetes">Diabetes</label>
            <input
                onChange={e => updateFields({ medicalCondition: e.target.value })}
                type="radio" id="Cardiovascular disease" name="medicalCondition" value="Cardiovascular disease" checked={medicalCondition === "Cardiovascular disease"} />
            <label htmlFor="Cardiovascular disease">Cardiovascular disease</label>
            <input
                onChange={e => updateFields({ medicalCondition: e.target.value })}
                type="radio" id="None" name="medicalCondition" value="None" checked={medicalCondition === "None"} />
            <label htmlFor="None">None</label>

            <input
                onChange={e => updateFields({ medicalCondition: e.target.value })}
                type="radio" id="Other" name="medicalCondition" value="Other" checked={medicalCondition === "Other"} />
            <label htmlFor="Other">Other</label>

        </div >
    )
}

export default Health