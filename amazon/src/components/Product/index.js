import React from 'react'
import styled from 'styled-components'

function Product( {id, title, image, price, rating} ) {
  return (
    <Container >
      <Info>
        <Title>{title}</Title>
          <Price>
            <small>$</small>
            <strong>{price}</strong>
          </Price>
          <Rating>
            {Array(rating).fill().map((_,i) => {
/* Método fill() preenche todos os valores do array a partir do índice inicial
a um índice final com um valor estático.*/
              return (
                <p key={i}>⭐</p>
              )
              
            })}
          </Rating>
      </Info>

      <Image
        src={image}
        alt="imagem do produto"
      />
      <Button>Add to Basket</Button>

    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: flex-end;
  margin: 10px;
  padding: 20px;
  width: 100%;
  max-height: 400px;
  min-width: 100px;

  background-color: white;
  z-index: 1;
`
const Info = styled.div`
  height: 100px;
  margin-bottom:15px;
  text-align: left;
`
const Title = styled.p`
  font-family: 'Roboto', sans-serif;
`
const Price = styled.p`
  margin-top: 5px;
`
const Rating = styled.div`
  display: flex;

`
const Image = styled.img`
  max-height: 200px;
  width: 100%;
  object-fit: contain;
  margin-bottom: 15px;
`
const Button = styled.button`
  background: #f8c14b;
  border: 1px solid;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
  color: #111;
`
export default Product
