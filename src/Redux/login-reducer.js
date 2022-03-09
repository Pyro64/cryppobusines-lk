import annaBobs from '../Images/login/anna_bobs.png'

let initialState = {
    loginData:
    {
        id: 1,
        img: annaBobs,
        name: "Anna Bobs",
        message: 8,
        isLogin: true
    },

};
const navReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
export default navReducer;