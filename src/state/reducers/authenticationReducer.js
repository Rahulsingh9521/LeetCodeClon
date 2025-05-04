
const reducer = (state=0, action) => {

    if(action.type == "jwtToken"){
        return action.paylaod;
    }
}

export default reducer;