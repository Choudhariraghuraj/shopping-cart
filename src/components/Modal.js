import React, { Component } from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"
import Reducer from '../reducers/reducer'
import {connect} from 'react-redux'
import {ButtonContainer} from './Button'
class Modal extends Component {
  render() {
      const {modalOpen} = this.props;
      console.log(modalOpen);
      const {img,title,price} = this.props.modalProduct;
      if(!modalOpen){
        return null;
    }else{
        return (
        <ModalContainer>
            <div className="container">
            <div className="row">
            <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
            <h5>Item added to the cart</h5>
            <img src={img} className="img-fluid" alt="product" />
            <h5>{title}</h5>
            <h5 className="text-muted">price : $ {price}</h5>
            <Link to="/">
            <ButtonContainer onClick={()=>this.props.onCloseModal()}>
                store
            </ButtonContainer>
            </Link>
            <Link to="/cart">
            <ButtonContainer onClick={()=>this.props.onCloseModal()}>
                go to cart
            </ButtonContainer>
            </Link>
            </div>
            </div>
            </div>
        </ModalContainer>
        )
    }
  }
}
const mapStateToProps = state=>{
    return {
      modalProduct:state.modalProduct,
      modalOpen:state.modalOpen
    }
  }
  const mapDispachToProps = dispatch => {
    return {
      onOpenModal: (id) => dispatch({ type: "OPEN_MODAL", value: id }),
      onCloseModal: () => dispatch({ type: "CLOSE_MODAL"})
    }
  }
  export default connect(mapStateToProps,mapDispachToProps)(Modal)
const ModalContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
#modal{
    background:var(--mainWhite)
}
`