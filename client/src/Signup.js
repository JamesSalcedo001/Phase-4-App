import {useHistory} from "react-router-dom";
import React, { useState } from "react"


function Signup({updateUser}) {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        avatar: ""
    })

    const [errors, setErrors] = useState([])
    const history = useHistory()

    const {username, password, avatar} = formData

    function submit(e) {
        e.preventDefault()
        const user = {
            username,
            password,
            avatar
        }

        fetch(`/users`, {
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
                res.json().then(obj => setErrors(Object.entries(obj.errors)))
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
                <label htmlFor="avatar">avatar</label>
                <input value={avatar} onChange={changeHandler} name="avatar"  type="text"/>
                <input type="submit" value="Sign Up!"/>
            </form>
            {errors ? errors.map(e => <div>{e[0]+': ' + e[1]}</div>) : null}
        </div>
    )
}

export default Signup;