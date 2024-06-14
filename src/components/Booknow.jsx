import React, { useState } from 'react'
import { useMultistepForm } from '../hooks/useMultistepForm'
import axios from 'axios'
import BasicInfo from './form/BasicInfo'
import Goal from './form/Goal'
import Program from './form/Program'
import "../styles/organisms/book-now.css"
import Health from './form/Health'


const INITIAL_DATA = {
    firstName: "asd",
    lastName: "asd",
    phone: "123",
    email: "test@gmail.com",
    age: "2",
    height: "2",
    weight: "2",
    instagram: "https://insta.com",
    line: "",
    personalTraining: "yes",
    goal: "Improve on my phsique",
    otherGoal: "qq",
    experience: "<1 year",
    programsInterested: ["In-person: Customized training"],
    availability: "",
    allergies: "",
    medicalCondition: "",
    medicalOther: ''
}

const Booknow = () => {
    const [data, setData] = useState(INITIAL_DATA)
    const [submissionText, setSubmissionText] = useState("");
    const [errorText, setErrorText] = useState("");

    function updateFields(fields) {
        setData(prev => {

            if (Object.keys(fields)[0] === "programsInterested") {
                let updatedProgramsInterested;
                if (prev.programsInterested.includes(fields.programsInterested)) {
                    updatedProgramsInterested = prev.programsInterested.filter(el => el !== fields.programsInterested)
                } else {
                    updatedProgramsInterested = [...prev.programsInterested, fields.programsInterested]
                }
                return { ...prev, programsInterested: updatedProgramsInterested }
            }
            else {
                return { ...prev, ...fields }
            }
        })
    }

    const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
        useMultistepForm([
            <BasicInfo {...data} updateFields={updateFields} />,
            <Goal {...data} updateFields={updateFields} />,
            <Program {...data} updateFields={updateFields} />,
            <Health {...data} updateFields={updateFields} />
        ])

    function onSubmit(e) {
        e.preventDefault()
        if (!isLastStep) return next()

        axios({
            method: "POST",
            url: "https://formspree.io/f/xjvnngev",
            data: data,
        })
            .then((response) => {
                setSubmissionText("Message sent successfully")
            })
            .catch((error) => {
                setErrorText(error.response.data.errors[0].message)
            });
    }

    return (
        <section className='book-now'
        >
            <h2 className='heading'>Book Now</h2>
            <form onSubmit={onSubmit}>
                <div className='steps' aria-hidden="true">
                    {steps.map((_, index) => (
                        <span key={index} className={`${currentStepIndex === index && "active"} circle`}></span>
                    ))}
                </div>

                <div
                    style={{
                        display: "flex",
                        gap: ".5rem",
                        justifyContent: "flex-end",
												margin: "2rem",
                    }}
                >
                    {!isFirstStep && (
                        <button type="button" onClick={back}>
                            Back
                        </button>
                    )}
                    <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
                </div>

                {
                    submissionText && <p>{submissionText}</p>
                }
                {
                    errorText && <p className='error'>{errorText}</p>
                }
                {step}
            </form>

        </section>
    )
}

export default Booknow