import { useEffect, useState } from "react"

const useRole = email => {
    const [role, setRole] = useState('')
    const [findingRole, setFindingRole] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/${email}`)
                .then(res => res.json())
                .then(data => {
                    setRole(data.role)
                    setFindingRole(false)
                })
        }
    }, [email])

    return [role, findingRole]


}


export default useRole;