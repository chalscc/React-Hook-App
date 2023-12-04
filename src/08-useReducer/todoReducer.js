export const todoReducer = ( initialState = [], action ) => {

    switch (action.type) {
        case 'addTodo':            
            return [...initialState, action.payload];
    
        case 'removeTodo':
            return initialState.filter( todo => todo.id !== action.payload );
        default:
            return initialState;
    }

}