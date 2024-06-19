import React, { useContext } from 'react'
import "../../styles/molecules/basic-info.css"
import translationData from '../../data/translation.json';
import { LanguageContext } from '../../context/LanguageContext';

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

  const { language } = useContext(LanguageContext);
  const translatedText = translationData[language];

  return (
    <div className='basic-info'>

      <div className="input-container">
        <label>{translatedText.form.firstName}</label>
        <input
          autoFocus
          required
          type="text"
          value={firstName}
          onChange={e => updateFields({ "firstName": e.target.value })}
        />
      </div>

      <div className="input-container">
        <label>{translatedText.form.lastName}</label>
        <input
          required
          type="text"
          value={lastName}
          onChange={e => updateFields({ lastName: e.target.value })}
        />
      </div>

      <div className="input-container">
        <label>{translatedText.form.phone}</label>
        <input
          required
          type="tel"
          value={phone}
          onChange={e => updateFields({ phone: e.target.value })}
        />
      </div>

      <div className="input-container">
        <label>{translatedText.form.email}</label>
        <input
          required
          type="email"
          value={email}
          onChange={e => updateFields({ email: e.target.value })}
        />
      </div>

      <div className="input-container">
        <label>{translatedText.form.instagram}</label>
        <input
          required
          type="url"
          value={instagram}
          onChange={e => updateFields({ instagram: e.target.value })}
        />
      </div>

      <div className="input-container">
        <label>{translatedText.form.age}</label>
        <input
          required
          type="number"
          value={age}
          onChange={e => updateFields({ age: e.target.value })}
        />
      </div>

      <div className="input-container">
        <label>{translatedText.form.height}</label>
        <input
          required
          type="number"
          value={height}
          onChange={e => updateFields({ height: e.target.value })}
        />
      </div>

      <div className="input-container">
        <label>{translatedText.form.weight}</label>
        <input
          required
          type="number"
          value={weight}
          onChange={e => updateFields({ weight: e.target.value })}
        />
      </div>

      <div className="input-container">
        <label>{translatedText.form.line}</label>
        <input
          type="text"
          value={line}
          onChange={e => updateFields({ line: e.target.value })}
        />
      </div>

      <div className="input-container personal-training">
        <label htmlFor="personalTraining">{translatedText.form.personalTraining}</label>
        <div>
          <input
            onChange={e => updateFields({ personalTraining: e.target.value })}
            type="radio" id="yes" name="personalTraining" value="yes" checked={personalTraining === "yes"} />
          <label htmlFor="yes">{translatedText.form.personalTrainingOption1}</label>
        </div>
        <div>
          <input
            onChange={e => updateFields({ personalTraining: e.target.value })}
            type="radio" id="no" name="personalTraining" value="no" checked={personalTraining === "no"} />
          <label htmlFor="no">{translatedText.form.personalTrainingOption2}</label>
        </div>
      </div>


    </div>
  )
}

export default BasicInfo