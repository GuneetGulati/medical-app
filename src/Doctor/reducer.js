export const initialState = {
    user:null,
    details:{}
};


const reducer = (state , action) => {
    
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user:action.user
            } ; 

        case 'SET_DETAILS':
            return{
                ...state,
                details:action.details
            } ; 


        default:
            return state;
    }
}

export default reducer;