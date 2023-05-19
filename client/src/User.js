// import { useState} from "react";
// import { useParams } from "react-router-dom";

import { useContext } from "react";
import { UserContext } from "./App";

function User() {
    // const [errors, setErrors] = useState([])
    // const [user, setUser] = useState([])
    const hi = useContext(UserContext)
    console.log(hi.username)

    // useEffect(() => {
    //     fetch(`/users/${id}`)
    //     .then(res => {
    //         if(res.ok) {
    //             res.json().then(user => {
    //                 setUser(user)
    //                 console.log(user)
    //             })
    //         } else {
    //             res.json().then(data => setErrors(data))
    //         }
    //     })
    // },[])

    // if (errors) return <h1>{errors}</h1>
    return (
        <div>
        </div>
    )
}

export default User;