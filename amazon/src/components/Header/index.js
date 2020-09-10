import React from 'react'
import { Link } from 'react-router-dom'

import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

import './styles.css'

function Header() {
  return (
    <div className='header'>
      <Link to="/">
        <img className="header__logo" 
        src="https://logodownload.org/wp-content/uploads/2014/04/amazon-logo-2.png"
        />
      </Link>

      <div className="header__search">
        <input
          type="text"
          className="header__searchInput"
        />
        <SearchIcon className="header__searchIcon" />
      </div>
      
      <div className="header__nav">
        <div className="header__option">
          <span
            className="header__optionLineOne">
              Hello Guest
          </span>
          <span
            className="header__optionLineTwo">
              Sigh IN
          </span>
        </div>
        
        <div className="header__option">
          <span
            className="header__optionLineOne">
              Returns
          </span>
          <span
            className="header__optionLineTwo">
              & Orders
          </span>
        </div>

        <div className="header__option">
          <span
            className="header__optionLineOne">
              Your
          </span>
          <span
            className="header__optionLineTwo">
              Prime
          </span>
        </div>
        
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">0</span>
          </div>
        </Link>
        
      </div>
    </div>
  )
}

export default Header
