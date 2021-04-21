import React from 'react';
import '../../CSS/Whitepaper/whitepaper.css';
import whitepaper from '../../assets/images/WHITEPAPER.jpg';

const Whitepaper = () => {
  return (
    <div className='pdf'>
      <img src={whitepaper} alt='DAO whitepaper'></img>
    </div>
  );
};

export default Whitepaper;