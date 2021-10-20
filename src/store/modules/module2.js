import types  from './type' // 按需引入常量
const state = {
    state1 : "",  
    state2 : {}, 
    state3 : []
}
const getters = {
}
const mutations = {
    [types.UP_HANDLERB](state, HANDLER_INFO) {           
        state.state1 = HANDLER_INFO;            
    }
}
const actions = {
}
export default{
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}