const state = {
    data: {},
    itemsOnPage: [],
    itemsInCart: [],
}

const getters = {
    getData: state => state.data, 
    getItemsOnPage: state => state.itemsOnPage
}

const actions = {
    requestData({ commit }){
        fetch('/database/items.json')
            .then(res => res.json())
            .then(res => {
                commit('setData', res)
            })
    },
    updateAmount({commit}, id){
        commit('updateAmount', id)
    },
    /*addToCart({commit}, id){
        commit('add')
    },
    removeFromCart(/*'remove'){

    }*/
}

const mutations = {
    setData(state, newData){
        state.data = newData
        state.itemsOnPage = Object.keys(newData)
    },
    updateAmount(state, id){
        if(!state.data[id].amount){
            state.data[id].amount = 0
        }
        state.data[id].amount++
        state.data[id] = Object.assign({}, state.data[id])
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions, 
    mutations
}