import React, { Component } from 'react'
import Product from './Product'
import Title from './Title';
import Reducer from '../reducers/reducer'
import {connect} from 'react-redux'
class ProductList extends Component { 
  componentDidMount(){
    this.props.onGetProductList();
  }
  render() {
    const products = this.props.products
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="Our" title="Products" />
            <div className="row">
              {
                products.map(product=>{
                  console.log(product)
                  return <Product key={product.id} product={product} />
                })
              }
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
const mapStateToProps = state=>{
  return {
    products:state.products
  }
}
const mapDispachToProps = dispatch => {
  return {
    onGetProductList: () => dispatch({ type: "GET_PRODUCTS" })
  }
}
export default connect(mapStateToProps,mapDispachToProps)(ProductList);