import {storeProducts,detailProduct} from '../data'
const initialState = {
    products:[],
    detailProduct:detailProduct,
    cart:storeProducts,
    modalOpen:false,
    modalProduct:detailProduct,
    cartSubtotal:0,
    cartTax:0,
    cartTotal:0   
}

/* reducer = (state=initialState, action)=>{
    return state
} */
const reducer = (state=initialState, action)=>{
    const newState = {...state}
    switch(action.type){
        case 'GET_PRODUCTS':
            newState.products = storeProducts
        break
        case 'GET_PRODUCT_DETAILS':
            newState.detailProduct = storeProducts.find((item)=> item.id === action.value)
        break
        case 'ADD_TO_CART':
        let tempProducts = [...storeProducts]
        const index = tempProducts.indexOf(storeProducts.find((item)=> item.id === action.value))
        const product = tempProducts[index]
        product.inCart = true
        product.count = 1
        const price = product.price
        product.total = price
        newState.products = tempProducts
        newState.cart = [...newState.cart,product]  
        console.log(newState);
        case 'OPEN_MODAL':
        newState.modalProduct = storeProducts.find((item)=> item.id === action.value)
        newState.modalOpen = true;
        break
        case 'CLOSE_MODAL':
        newState.modalOpen = false;
        break
        case 'INC_PRODUCTS':
        newState.products = storeProducts
        break
        case 'DEC_PRODUCTS':
        newState.products = storeProducts
        break
        case 'REMOVE_ITEM':
        newState.products = storeProducts
        break
        case 'CLEAR_CART':
        newState.products = storeProducts
    break
    }
    return newState
}
export default reducer