import { useEffect, useState } from "react"

const useRole = email => {
    const [role, setRole] = useState('')
    const [findingRole, setFindingRole] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`https://78-laptop-resalse-server.vercel.app/users/${email}`)
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