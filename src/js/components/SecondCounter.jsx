import React from 'react';

const SecondCounter = ({ time }) => {
   const digits = [
      Math.floor(time / 100000) % 10,
      Math.floor(time / 10000) % 10,
      Math.floor(time / 1000) % 10,
      Math.floor(time / 100) % 10,
      Math.floor(time / 10) % 10, 
      Math.floor(time / 1) % 10,
]; 

return ( 
    <div className="time-container">
        <div className="digits-wrapper row ">
            <div className='clock-icon col'>
                <i className="fa-regular fa-clock"></i>
            </div>
            {digits.map((digit, index) => (
                <div key={index} className="digit col">
                    {digit}
                </div>
            ))}
        </div>
    </div>
)}

export default SecondCounter;