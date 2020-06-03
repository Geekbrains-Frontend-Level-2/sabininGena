const state = {
    data: {},
    itemsOnPage: [],
    itemsInCart: [],
    counter: 0,
}

const getters = {
    getData: state => state.data, 
    getItemsOnPage: state => state.itemsOnPage,
    getCounter: state => state.counter,
    getItemsInCart: state => state.itemsInCart,
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
    addToCart({commit}, id){
        commit('addToCart', id)
    },
    removeFromCart({commit}, id){

    },
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
    },
    addToCart(state, id){
        if(state.itemsInCart.indexOf(id) === -1){
            state.itemsInCart.push(id)
            state.counter++
            console.log(state.data[id].price)
            //state.itemsInCart = Object.keys(state.data[id])
        }

        
        
        //state.itemsInCart[id] = Object.assign({}, state.itemsInCart[id])

        console.log(state.itemsInCart.length)
        
        
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions, 
    mutations
}