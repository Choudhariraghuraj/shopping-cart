import React, { Component } from 'react'
import Title from '../Title'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import {connect} from 'react-redux'
import CartList from './CartList'
class Cart extends Component {
  render() {
    const { cart } = this.props.stateValue;
    const cartLength = cart.length;
    return ( 
      <section>
        {
            (cartLength > 0)? 
            (<React.Fragment>
              <Title name="Your" title="cart" />
              <CartColumns />
              <CartList value={this.props.stateValue} />
              </React.Fragment>):<EmptyCart />
            }
        }
      </section>
    )
  }
}
const mapStateToProps = state => {
  return{
    stateValue:state
  }
}
const mapDispatchToProps = dispatch => {
  return{

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)
