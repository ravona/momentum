const reducer = (state, action) => {
    switch (action.type) {
        case "STREAK_INCREMENT":
            return {
                ...state,
                ...action.payload,
            }

        case "STREAK_LOSS":
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state
    }
}

export default reducer
