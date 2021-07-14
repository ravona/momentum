import { useCallback, useState } from "react"

const useToggle = (initialState = false) => {
    const [state, setState] = useState(initialState)

    const toggle = useCallback(() => setState(!state))

    return [state, toggle]
}

export default useToggle
