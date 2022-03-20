import { useState } from 'react';

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import "../styles/header.css";

const Header = () => {
  const [num, setNum] = useState(JSON.parse(localStorage.getItem('cart') || '{}'))

  return (
    <div className="header">
      <div className="header-left">
          <a href="./"><h1>Sushi Shop</h1></a>
      </div>
      <div className="header-right">
        <a href="./">Home</a>
        <a href="./order" className="order-online">
          <span>Order Online</span>
        </a>
        <div className="cart">
          <a href="./cart">
            <ShoppingCartIcon />
            <span> • </span>
            <span>{num.length}</span>
          </a>
        </div>
        <a href="./signin">Sign In</a>
      </div>
    </div>
  );
};

export default Header;
