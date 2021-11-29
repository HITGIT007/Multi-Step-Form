import React from 'react'

function OtherInfo({formData, setFormData}) {
    return (
        <div className="sign-up-container">
            <input type = "text" placeholder = "Nationality"
                value = {formData.nationality}
                onChange = {
                    (event) => {
                        setFormData({...formData, nationality: event.target.value})
                    }
                }
            />
            <input type = "text" placeholder = "Religion"
                value = {formData.religion}
                onChange = {
                    (event) => {
                        setFormData({...formData, religion: event.target.value})
                    }
                }
            />
           

        </div>
    )
}

export default OtherInfo
