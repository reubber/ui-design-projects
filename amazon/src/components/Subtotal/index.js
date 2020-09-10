import React from 'react'
import CurrencyFormat from 'react-currency-format'
import styled from 'styled-components'

function Subtotal() {
  return (
    <Container>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items):
              <strong>0</strong>
            </p>
            <SubtotalGift>
              <Input type="checkbox" /> This order contains
              a gift
            </SubtotalGift>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"R$"}
        />
        <Button>Proceed to Checkout</Button>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 100px;
  padding: 20px;
  background-color: #f3f3f3;
  border: 1px solid #dddddd;
  border-radius: 5px;
  
`

const SubtotalGift = styled.small`
  display: flex;
  align-items: center;
`

const Input = styled.input`
  margin-right: 0.3rem;
`

const Button = styled.button`
  background: #f0c14b;
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
  color: #111;

`

export default Subtotal
