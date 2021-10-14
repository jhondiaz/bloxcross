import axios from "axios";

export const state = {
    result:{
        success: false,
        code: 0,
        payload: ''
    }
};


export const mutations = {
    setResult(state, newValue) {
        state.result = newValue
    },
};

export const actions = {
    SetRegisterUser({ commit }, value) {
        axios.post('https://bloxcross-dev.uc.r.appspot.com/register',value).then(res => {
            commit('setResult', res.data)
        })
    },
};
