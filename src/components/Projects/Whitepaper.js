import React from 'react';
import '../../CSS/Whitepaper/whitepaper.css';
import whitepaper from '../../assets/images/WHITEPAPER.jpg';
// import { ReactComponent as PPWhitepaper } from '../../assets/images/WHITEPAPER.jpg';

const Whitepaper = () => {
  return (
    <div className='pdf'>
      <img src={whitepaper} alt='DAO whitepaper'></img>
      {/* <PPWhitepaper alt='DAO whitepaper'></PPWhitepaper> */}
    </div>
  );
};

export default Whitepaper;
