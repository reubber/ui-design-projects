import React from 'react'
import Product from '../Product'

import './styles.css'

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

      <div className="home__row">
        <Product
          id="12321341"
          title='Pink Floyd - the Early Years'
          price={30.00}
          image="https://images-na.ssl-images-amazon.com/images/I/7141zrEsZ5L._AC_UL200_SR200,200_.jpg"
          rating={5}
        
        />
        <Product
          id="49538094"
          title='Carrer of Oportunity'
          price={111.00}
          image="https://m.media-amazon.com/images/I/51PHR82ETWL._AC_UL320_.jpg"
          rating={4}
        
        />
      </div>

      <div className="home__row">
        <Product
          id="77738094"
          title='Playstation 5'
          price={2999.00}
          image="https://www.ziliongames.com.br/banco_imagens/produtos/g/sony-playstation-5-prevenda-novembro-2020187A.png"
          rating={4}
        
        />
        <Product
          id="49538094"
          title='Tennis da Nike'
          price={400.00}
          image="https://img2.gratispng.com/20180701/haq/kisspng-nike-air-max-sneakers-nike-free-shoe-tenis-shoes-5b38f24d519077.2841344915304587013341.jpg"
          rating={5}
        
        />
        <Product
          id="49538094"
          title='Carrer of Oportunity'
          price={111.00}
          image="https://m.media-amazon.com/images/I/51PHR82ETWL._AC_UL320_.jpg"
          rating={4}
        
        />
      </div>

      <div className="home__row">
        <Product
          id="49538094"
          title='Carrer of Oportunity'
          price={111.00}
          image="https://m.media-amazon.com/images/I/51PHR82ETWL._AC_UL320_.jpg"
          rating={2}
        />

      </div>

      </div>
    </div>
  )
}

export default Home
