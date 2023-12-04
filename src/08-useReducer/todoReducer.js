export const todoReducer = ( initialState = [], action ) => {

    switch (action.type) {
        case 'addTodo':            
            return [...initialState, action.payload];
    
        default:
            return initialState;
    }

}