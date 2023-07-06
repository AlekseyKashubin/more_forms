import React, { useState } from 'react'

const MyForm = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordC: ""
    });



    const [firstErr, setFirstErr] = useState("")
    const [lastErr, setLastErr] = useState("")
    const [emailErr, setEmailErr] = useState("")
    const [passwordErr, setPasswordErr] = useState("")
    const [passwordCErr, setPasswordCErr] = useState("")


    const submitForm = e => {
        e.preventDefault()

        console.log(formData)

        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            passwordC: ""
        })


    }



    const handleChange = e => {
        const { name, value } = e.target
        setFormData((currentData) => ({ ...currentData, [name]: value }))

        if (name == 'firstName' && value.length < 2) {
            setFirstErr("First Name too short!")
        } else if (name == 'firstName') {
            setFirstErr("")
        }

        if (name == 'lastName' && value.length < 2) {
            setLastErr("Last Name too short!")
        } else if (name == 'lastName') {
            setLastErr("")
        }

        if (name == 'email' && value.length < 2) {
            setEmailErr("Email too short!")
        } else if (name == 'email') {
            setEmailErr("")
        }

        if (name == 'password' && value.length < 8) {
            setPasswordErr("Password too short!")
        } else if (name == 'password') {
            setPasswordErr("")
        }
        if (name == 'passwordC' && formData.password !== value) {
            setPasswordCErr("Password must match!")
        } else if (name == 'passwordC'){
            setPasswordCErr("")
        

        }

}


const formStyle = {
    width: 400

}

const errStyle = {
    margin: 0,
    padding: 0,
    color: "red",
    fontWeight: "bold"
}

return(
    <form style={formStyle} onSubmit={submitForm}>

        <fieldset>
            <legend> Sign Up!</legend>
            
            <p style={errStyle}>{firstErr} </p>
            <label>First Name :</label>
            <input name="firstName" onChange={handleChange} value={formData.firstName} type="text"></input>
            <br/>

            <p style={errStyle}>{lastErr} </p>
            <label>Last Name :</label>
            <input name="lastName" onChange={handleChange} value={formData.lastName} type="text"></input>
            <br/>

            <p style={errStyle}>{emailErr} </p>
            <label>Email :</label>
            <input name="email" onChange={handleChange} value={formData.email} type="text"></input>
            <br/>

            <p style={errStyle}>{passwordErr} </p>
            <label>Password :</label>
            <input name='password' onChange={handleChange} value={formData.password} type="password"></input>
            <br/>

            <p style={errStyle}>{passwordCErr} </p>
            <label>Confirm Password :</label>
            <input name='passwordC' onChange={handleChange} value={formData.passwordC} type="password"></input>
            <br/>

            <button>Register</button>

        <p>First Name : { formData.firstName}</p>
        <p>Last Name : { formData.lastName}</p>
        <p>Email : { formData.email}</p>
        <p>Passwood : {formData.password}</p>
        <p>Confirm Passwood :{ formData.passwordC }</p>

        </fieldset>
    </form>



)
}


export default MyForm