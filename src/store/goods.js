const state = {
    data: {},
    Cart: {},
    itemsOnPage: [],
    itemsInCartID: [],
    counter: 0,
    sumItem: 0,
    totalPrice: 0,
}

const getters = {
    getCart: state => state.Cart,
    getData: state => state.data, 
    getItemsOnPage: state => state.itemsOnPage,
    getCounter: state => state.counter,
    getItemsInCartID: state => state.itemsInCartID,
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
        console.log(id)
        commit('updateAmount', id)
    },
    addToCart({commit}, data){
        if (state.itemsInCartID.indexOf(data.id) === -1) {
            state.itemsInCartID.push(data.id)
            //console.log(state.itemsInCartID) 
            fetch('/cartList', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(res => {
                commit('addToCart', res)
            })
        }
            /////
        //commit('addToCart', id)
    },
    requestDataCart({commit}){
        fetch('/cartList', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(res => {
                commit('setDataCart', res)
            })
    },
    removeFromCart({commit}, id){
        if(state.Cart[id].amount>1){
        commit('minusFromCart', id)
        } else {
            console.log('ok1')
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

    setDataCart (state, newData){
        state.Cart = newData
        state.itemsInCartID = Object.keys(newData)
        const amountOfItems = Object.keys(newData).length
        const id = newData[amountOfItems - 1].id
        for(let i=0;i<amountOfItems;i++){
            if(!state.Cart[i].amount){
                state.Cart[i].amount = 1
            }
            if(!state.Cart[i].sumItem){
                state.Cart[i].sumItem = state.Cart[i].price
            }
            //state.totalPrice += state.Cart[i].price
        }
    },  
    setData(state, newData){
        state.data = newData
        state.itemsOnPage = Object.keys(newData)
    },
    updateAmount(state, id){
        state.Cart[id].sumItem += state.Cart[id].price
        state.totalPrice += state.Cart[id].price
        state.Cart[id].amount++
        state.Cart[id] = Object.assign({}, state.Cart[id])
    },
    addToCart(state, newData){
        state.counter++
        state.Cart = newData
        const amountOfItems = Object.keys(newData).length
        const id = newData[amountOfItems - 1].id
        state.totalPrice += state.Cart[id].price
    },
    minusFromCart(state, id){
        state.totalPrice -= state.Cart[id].price
        state.Cart[id].sumItem -= state.Cart[id].price
        state.Cart[id].amount--
        state.Cart[id] = Object.assign({}, state.Cart[id])
    },
    removeFromCart(state, id){
        state.totalPrice -= state.Cart[id].price
        state.itemsInCartID = state.itemsInCartID.filter((n)=>{return n != id})
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