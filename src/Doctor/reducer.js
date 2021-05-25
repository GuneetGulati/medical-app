export const initialState = {
    user:null,
    details:{},
    docuser:null
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

        case 'SET_DOCTOR':
            return{
                ...state,
                userdoc:action.userdoc
            } ; 

        default:
            return state;
    }
}

export default reducer;