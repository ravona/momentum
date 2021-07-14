import { useState, useEffect } from "react"

const usePersistentState = (key, initialValue) => {
    const [state, setState] = useState(
        JSON.parse(localStorage.getItem(key)) || initialValue
    )

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [state, key])

    return [state, setState]
}

export default usePersistentState
