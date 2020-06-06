const state = {
    data: {},
    cart: {},
    itemsOnPage: [],
    itemsInCart: [],
    counter: 0,
    sumItem: 0,
    totalPrice: 0,
}

const getters = {
    getCart: state => state.cart,
    getData: state => state.data, 
    getItemsOnPage: state => state.itemsOnPage,
    getCounter: state => state.counter,
    getItemsInCart: state => state.itemsInCart,
    getSumItem: state => state.sumItem,
    getTotalPrice: state => state.totalPrice,
}

const actions = {
    requestData({ commit }){
        //fetch('/database/items.json')
        fetch('/itemsList', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(res => {
                commit('setData', res)
            })
    },
    updateAmount({commit}, id){
        commit('updateAmount', id)
    },
    addToCart({commit}, data){
        ///
        fetch('/cartList', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
            .then(res => {
                commit('setDataCart', res)
            })
            /////
        //commit('addToCart', id)
    },
    removeFromCart({commit}, id){
        if(state.data[id].amount>1){
        commit('minusFromCart', id)
        } else {
            commit('removeFromCart', id)
        }
    },
    onClickItem ({ commit }, data){
        console.log(data)
        fetch('/itemsList', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
            .then(res => {
                commit('setData', res)
            })
    }
}

const mutations = {
    
    ////
    setDataCart (state, newData){
        const amountOfItems = Object.keys(newData).length
        const id = newData[amountOfItems - 1].id
        console.log(id)
        /*if(!state.cart[id].amount){
            state.cart[id].sumItem = state.cart[id].price
            state.cart[id].amount = 1
            state.cart[id] = Object.assign({}, state.cart[id])
        }*/

        state.cart = newData
        state.itemsInCart = Object.keys(newData)
        console.log(state.itemsInCart)
    },  
    ///// 
    setData(state, newData){
        state.data = newData
        state.itemsOnPage = Object.keys(newData)
    },
    updateAmount(state, id){
        console.log(state.cart[id])
        state.data[id].sumItem += state.data[id].price
        state.totalPrice += state.data[id].price
        state.data[id].amount++
        state.data[id] = Object.assign({}, state.data[id])
    },
    addToCart(state, id){
        if(!state.data[id].amount){
            state.data[id].sumItem = state.data[id].price
            state.data[id].amount = 1
            state.data[id] = Object.assign({}, state.data[id])
        }
        if(state.itemsInCart.indexOf(id) === -1){
            state.itemsInCart.push(id)
            state.counter++
            state.totalPrice += state.data[id].price
        }   
    },
    minusFromCart(state, id){
        state.totalPrice -= state.data[id].price
        state.data[id].sumItem -= state.data[id].price
        state.data[id].amount--
        state.data[id] = Object.assign({}, state.data[id])
    },
    removeFromCart(state, id){
        state.totalPrice -= state.data[id].price
        state.itemsInCart = state.itemsInCart.filter((n)=>{return n != id})
        state.counter--
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions, 
    mutations
}