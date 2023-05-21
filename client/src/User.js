import { useState} from "react";
import { useContext } from "react";
import { UserContext } from "./App";

function User({updateUser}) {
    const [errors, setErrors] = useState([])
 
    // useEffect(() => {
    //     fetch(`/users/${hi.id}`)
    //     .then(res => {
    //         if(res.ok) {
    //             res.json().then(user => {
    //                 updateUser(user)
    //                 console.log(hi)
    //             })
    //         } else {
    //             res.json().then(data => setErrors(data))
    //         }
    //     })
    // },[])

    if (errors) return <h1>{errors}</h1>
    return (
        <div>
            {user}
        </div>
    )
}

export default User;