import { createStore } from 'vuex'

const store = createStore({
    state : {
        isLogin : false,
        user : null,
        idCart: null,
        countItemInCart: 0,
    },
    getters : {

    },
    mutations : {
        setUser (state,user){
            if (user) {
                state.isLogin = true
                state.user = {...user}
            }
        },
        setIdCart (state,idCart){
            state.idCart = idCart;
        },
        
        setCountItemInCart (state,countItemInCart){
            state.countItemInCart = countItemInCart;
        },
    },
    actions : {

    }
});
export default store;