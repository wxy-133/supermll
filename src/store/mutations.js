import { ADD_COUNTER, ADD_TO_CART } from './mutation-types'
export default {
    // mutations: {
    //     // addCart(state, payload) {
    //     //     //01
    //     //     // let oldProduct = null;
    //     //     // for (let item of state.cartList) {
    //     //     //     if (item.iid === payload.iid) {
    //     //     //         oldProduct = item
    //     //     //     }
    //     //     // }
    //     //     // if (oldProduct) {
    //     //     //     oldProduct.count += 1
    //     //     // } else {
    //     //     //     payload.count = 1;
    //     //     //     state.cartList.push(payload);
    //     //     // }
    //     //     //02
    //     //     // let index = state.cartList.indexOf(payload);
    //     //     // if (index === -1) {
    //     //     //     let oldProduct = state.cartList[index]
    //     //     //     oldProduct.cunt += 1
    //     //     // } else {
    //     //     //     payload.count = 1
    //     //     //     state.cartList.push(payload)
    //     //     // }
    //     //     //02
    //     //     let oldProduct = state.cartList.find(item =>
    //     //         item.iid === payload.iid
    //     //     )
    //     //     if (oldProduct) {
    //     //         let oldProduct = state.cartList[index]
    //     //         oldProduct.cunt += 1
    //     //     } else {
    //     //         payload.count = 1
    //     //         state.cartList.push(payload)
    //     //     }
    //     // }


    // },
    //mutations的唯一目的就是修改state中的状态
    //mutations中的方法尽可能完成的事件比较单一
    addCounter(state, payload) {
        payload.count++;
    },
    addToCart(state, payload) {
        payload.checked = true
        state.cartList.push(payload)
    }
}