import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './SuperCoin.css';

const SuperCoin = () => {
  const [superCoins, setSuperCoins] = useState(0);
  const cartItems = useSelector(state => state.cart.cartItems || []);

  const totalAmount = cartItems.reduce((total, item) => total + (item.price || 0) * (item.quantity || 0), 0);

  useEffect(() => {
    if (totalAmount >= 300) {
      setSuperCoins(30);
    } else if (totalAmount >= 200) {
      setSuperCoins(20);
    } else if (totalAmount >= 100) {
      setSuperCoins(10);
    } else {
      setSuperCoins(0);
    }
  }, [totalAmount]);

  return (
    <div className="super-coin">
      <h3>Super Coins</h3>
      <div>You have earned <strong>{superCoins}</strong> Super Coins</div>
    </div>
  );
};

export default SuperCoin;
