export const selectedTodoReducer = (state, action) => {
    switch (action.type) {
        case "RESET":
            return {
                ...state,
                selectedTodo: null
            }
        case "CHANGE":
            return {
                ...state,
                selectedTodo: action.payload
            }
        default:
            return state;
    }
}