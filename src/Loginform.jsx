import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Loginform() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");dfghjkl;sdfghj
    const [errors, setErrors] = useState({dfrghj
        name: "",
        email: "",
        password: ""
    });

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    function handleLogin() {
        if (name.trim() === "") {
            setErrors(errors => ({ ...errors, name: "Enter Name" }));
        } else if(name.trim().length === "0") {
            setErrors(errors => ({ ...errors, name: "" }));
        }

        if (email.trim() === "") {
            setErrors(errors => ({ ...errors, email: "Enter Email Address" }));
        } else if (!emailPattern.test(email)) {
            setErrors(errors => ({ ...errors, email: "Enter a valid Email Address" }));
        } else {
            setErrors(errors => ({ ...errors, email: "" }));
        }

        if (password.trim() === "") {
            setErrors(errors => ({ ...errors, password: "Enter Password" }));
        } else if (password.trim().length < 8) {
            setErrors(errors => ({ ...errors, password: "Password should be minimum 8 characters" }));
        } else if (password.trim().length > 10) {
            setErrors(errors => ({ ...errors, password: "Password should be maximum 10 characters" }));
        } else {
            setErrors(errors => ({ ...errors, password: "" }));
        }
    }

    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Enter Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter the Name" onChange={(e) => setName(e.target.value)} />
                    {errors.name && <span className="text-danger">{errors.name}</span>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter the Email Address" onChange={(e) => setEmail(e.target.value)} />
                    {errors.email && <span className="text-danger">{errors.email}</span>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label>Enter Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter the Password" onChange={(e) => setPassword(e.target.value)} />
                    {errors.password && <span className="text-danger">{errors.password}</span>}
                </Form.Group>
                <Button variant="primary" onClick={handleLogin}>Login</Button>{' '}
            </Form>
        </>
    );
}

export default Loginform;
