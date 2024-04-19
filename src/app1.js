
const redux = require('redux')
const createStore = redux.createStore
const reduxLogger = require('redux-logger')
const applyMiddellware = redux.applyMiddleware
const logger = reduxLogger.createLogger()



// Actions

const BUY_CAKE = 'BUY-CAKE';
const ICE_CREAM = 'ICE_CREAM'



function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'FirstRedux Action'
    }
}


function buyIceCream() {
    return {
        type: ICE_CREAM,
        info: 'FirstRedux Action'
    }
}



// 

const intialStateCake = {

    numOfCakes: 10,

}

const intialStateIceCream = {
    numOfIceCreams: 20
}



// let's define reducer Reducer function (previousState,action)=>newState

const cakeReducer = (state = intialStateCake, action) => {

    switch (action.type) {

        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }

}




const iceCreamReducer = (state = intialStateIceCream, action) => {

    switch (action.type) {

        case ICE_CREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state
    }

}

/////////////////// Instead this let's try to combine reducers 

// console.log("------------Cake------------------")

// const storeCake=createStore(cakeReducer)
// console.log(storeCake.getState())

// const unsubscribeCake=storeCake.subscribe(()=>console.log('Updated State',storeCake.getState()))
// storeCake.dispatch(buyCake())
// storeCake.dispatch(buyCake())
// storeCake.dispatch(buyCake())
// unsubscribeCake()

// console.log("------------Ice------------------")
// const storeIceCream=createStore(cakeReducer)
// console.log(storeIceCream.getState())

// const unsubscribeIce=storeIceCream.subscribe(()=>console.log('Updated State',storeIceCream.getState()))
// storeIceCream.dispatch(buyCake())
// storeIceCream.dispatch(buyCake())
// storeIceCream.dispatch(buyCake())
// unsubscribeIce()

//////////////////////////////// Combine Reducers ///////////////////////////////////

const combineReducers = redux.combineReducers;

const rootReducer = combineReducers({

    cake: cakeReducer,
    iceCream: iceCreamReducer

})

// const store=redux.createStore(
//     rootReducer

// )

// console.log('intial state',store.getState())

// const unsubscribe=store.subscribe(()=>console.log(store.getState()))


// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyCake())


// store.dispatch(buyIceCream())

// unsubscribe()

// After Adding Midellware

const store = redux.createStore(
    rootReducer,
    applyMiddellware(logger)


)


console.log('intial state', store.getState())

const unsubscribe = store.subscribe(() => { })

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())


store.dispatch(buyIceCream())

unsubscribe()