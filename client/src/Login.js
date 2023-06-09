// import { useContext, useState } from "react";
// import { UserContext } from "./App";
import {useHistory} from "react-router-dom";
import React, { useState } from "react"


function Login({updateUser}) {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const [errors, setErrors] = useState([])
    const history = useHistory()

    const {username, password} = formData

    function submit(e) {
        e.preventDefault()
        const user = {
            username,
            password
        }

        fetch(`/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => {
            if(res.ok) {
                res.json().then(user => {
                    updateUser(user)
                    history.push(`/users/${user.id}`)
                })
            } else {
                res.json().then(obj => setErrors(obj.errors))
            }
        })
    }

    function changeHandler(e) {
        const {name, value} = e.target
        setFormData({...formData, [name]: value })
    }

    return (
        <div>
            <form onSubmit={submit}>
                <label htmlFor="username">username</label>
                <input value={username} onChange={changeHandler} name="username"  type="text"/>
                <label htmlFor="password">password</label>
                <input value={password} onChange={changeHandler} name="password"  type="password"/>
                <input type="submit" value="Login!"/>
            </form>
            {errors ? <div>{errors}</div> : null}
        </div>
    )
}

export default Login;