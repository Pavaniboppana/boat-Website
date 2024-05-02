import React,{useState} from 'react'

function Login() {
    let[name, setName] = useState("") 
    let [email, setEmail] = useState("") 
    let [password, setPassword] = useState("") 

    const emailPattern = /^[a-zA-Z0-9.]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;

    let [errors, setErrors] = useState({ 
        email: "",
        password: "",
        name: ""
    })

    function ValidateData() {
        if (email.trim() === "") {
            setErrors((errors) => ({ ...errors, email: "enter email address!" }))
        }
        else if (!emailPattern.test(email)) {
            setErrors((errors) => ({ ...errors, email: "This is not a format of email" }))

        }
        else {
            setErrors((errors) => ({ ...errors, email: "" }))

        }
        if (password.trim() === "") {
            setErrors((errors) => ({ ...errors, password: "Enter password" }))
        }
        else if (password.trim().length < 8) {
            setErrors((errors) => ({ ...errors, password: "Password Should be minimum 8 Characters!" }))
        }
        else if (password.trim().length > 10) {
            setErrors((errors) => ({ ...errors, password: "Password cannot exceed more than 10 Characters!" }))
        }
        else {
            setErrors((errors) => ({ ...errors, password: "" }))
        }

        if (name.trim() === "") {
            setErrors((errors) => ({ ...errors, name: "Enter name here..!" }))
        }
        else {
            setErrors((errors) => ({ ...errors, name: "" }))

        }
    }

    return (
        <>
            <div className='border w-25 m-auto mt-5 p-4 ' style={{backgroundColor:"plum"}}>
                <h1>Login Form</h1>
                <div className='mt-3'>
                    <label htmlFor="">Enter Name</label>
                    <input type="text" className='form-control' onChange={(e) => (setName(e.target.value))} />
                </div>
                <p className='text-danger'>{errors.name}</p>
                <div className='mt-3'>
                    <label htmlFor="">Enter Email</label>
                    <input type="email" className='form-control' onChange={(e) => (setEmail(e.target.value))} />
                </div>
                <p className='text-danger'>{errors.email}</p>

                <div className='mt-3'>
                    <label htmlFor="">Enter Password</label>
                    <input type="password" className='form-control' onChange={(e) => (setPassword(e.target.value))} />
                </div>
                <p className='text-danger'>{errors.password}</p>

                <button className='btn btn-outline-primary w-100  mt-4' onClick={ValidateData}>Login</button>
            </div>
        </>
    )
}

export default Login
