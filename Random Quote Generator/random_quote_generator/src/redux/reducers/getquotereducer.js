

const initialState = {
    loading: false,
    quote: ""
}

function quote(state = initialState, action) {
    switch(action.type) {
        case 'FETCH_STATRTED':
            return {
                quote:"",
                loading: true
            };
        case 'FETCH_SUCESS':
            return {
                quote:action.payload,
                loading: false
            };
        default:
            return state;
    }
}

export default quote;