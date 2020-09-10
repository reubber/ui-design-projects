import React from 'react'
import styled from 'styled-components'

import Subtotal from '../Subtotal'

function Checkout() {
  return (
    <Container>
      <CheckoutLeft>
        <Image
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />
        <Basket>
          <CheckoutTitle>
            Your shopping Basket
          </CheckoutTitle>
        </Basket>
      </CheckoutLeft>
   
      <CheckoutRight>
        <Subtotal />
      </CheckoutRight>
  
    </Container>
    
  )
}

const Container = styled.div`
  display: flex;
  padding: 20px;
  background-color: white;
  height: max-content;
`
const CheckoutLeft = styled.div`
`
const Image = styled.img`
  width:100%;
  margin-bottom: 10px;
`
const CheckoutTitle = styled.h2`
  margin-right: 10px;
  padding: 10px;
  border-bottom: 1px solid lightgray;
`
const CheckoutRight = styled.h2`
`
const Basket = styled.div`
`
export default Checkout
