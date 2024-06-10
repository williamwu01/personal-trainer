import React from 'react'
import "../../styles/molecules/basic-info.css"

const BasicInfo = ({
  firstName,
  lastName,
  phone,
  email,
  age,
  height,
  weight,
  instagram,
  line,
  personalTraining,
  updateFields
}) => {
  return (
    <div className='basic-info'>

      <div className="input-container">
        <label>First Name</label>
        <input
          autoFocus
          required
          type="text"
          value={firstName}
          onChange={e => updateFields({ "firstName": e.target.value })}
        />
      </div>

      <div className="input-container">
        <label>Last Name</label>
        <input
          required
          type="text"
          value={lastName}
          onChange={e => updateFields({ lastName: e.target.value })}
        />
      </div>

      <div className="input-container">
        <label>Phone</label>
        <input
          required
          type="tel"
          value={phone}
          onChange={e => updateFields({ phone: e.target.value })}
        />
      </div>

      <div className="input-container">
        <label>Email</label>
        <input
          required
          type="email"
          value={email}
          onChange={e => updateFields({ email: e.target.value })}
        />
      </div>

      <div className="input-container">
        <label>Instagram</label>
        <input
          required
          type="url"
          value={instagram}
          onChange={e => updateFields({ instagram: e.target.value })}
        />
      </div>

      <div className="input-container">
        <label>Age</label>
        <input
          required
          type="number"
          value={age}
          onChange={e => updateFields({ age: e.target.value })}
        />
      </div>

      <div className="input-container">
        <label>Height(lb)</label>
        <input
          required
          type="number"
          value={height}
          onChange={e => updateFields({ height: e.target.value })}
        />
      </div>

      <div className="input-container">
        <label>Weight(lb)</label>
        <input
          required
          type="number"
          value={weight}
          onChange={e => updateFields({ weight: e.target.value })}
        />
      </div>

      <div className="input-container">
        <label>Line(Optional)</label>
        <input
          type="text"
          value={line}
          onChange={e => updateFields({ line: e.target.value })}
        />
      </div>

      <div className="input-container personal-training">
        <label htmlFor="personalTraining">Have you taken any personal training sessions or online sessions?</label>
        <div>
          <input
            onChange={e => updateFields({ personalTraining: e.target.value })}
            type="radio" id="yes" name="personalTraining" value="yes" checked={personalTraining === "yes"} />
          <label htmlFor="yes">Yes</label>
        </div>
        <div>
          <input
            onChange={e => updateFields({ personalTraining: e.target.value })}
            type="radio" id="no" name="personalTraining" value="no" checked={personalTraining === "no"} />
          <label htmlFor="no">No</label>
        </div>
      </div>


    </div>
  )
}

export default BasicInfo