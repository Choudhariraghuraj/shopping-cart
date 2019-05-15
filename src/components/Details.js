import React, { Component } from 'react'
import Reducer from '../reducers/reducer'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button'
class Details extends Component {
  render() {
    const { id, company, info, title, img, price, inCart} = this.props.detailProduct
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
          <h1>{title}</h1>
          </div>
        </div>
      <div className="row">
      <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
      <img src={img} className="img-fluid" alt="product" />
      </div>
      <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
     <h2>model : {title}</h2>
     <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
     made by : <span className="text-uppercase">{company}</span></h4>
     <h4 className="text-blue">
     <strong>price : <span>$</span>
     {price}
     </strong>
     </h4>
     <p className="text-capitalize font-weight-bold mt-3 mb-0">
     some info about product</p>
     <p className="text-muted lead">{info}</p>
     <div>
       <Link to="/">
       <ButtonContainer>back to products</ButtonContainer>
       </Link>
       <ButtonContainer cart disabled={inCart?true:false} onClick={()=>
        {
          this.props.onAddToCart(id);
          this.props.onAddToCart(id);
        }
        }> {inCart?'in cart':'add to cart'}
       </ButtonContainer>
       </div>
     </div>
      </div>
      </div>
    )
  }
}
const mapStateToProps = state=>{
  return {
    detailProduct:state.detailProduct
  }
}
const mapDispachToProps = dispatch => {
  return {
    onGetProductList: () => dispatch({ type: "GET_PRODUCTS", value: 1 }),
    onAddToCart: (id) => dispatch({ type: "ADD_TO_CART", value: id }),
    onOpenModal: (id) => dispatch({ type: "OPEN_MODAL", value: id })
  }
}
export default connect(mapStateToProps,mapDispachToProps)(Details)
