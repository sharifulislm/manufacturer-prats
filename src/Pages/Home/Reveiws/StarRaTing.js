import React from 'react';

const StarRaTing = ({reveiws}) => {
    return (
        <div className="star-rating flex">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <div
          
              key={index}
              className={index <= (reveiws.rating) ? "on" : "off"}
      
            >
              <span className="star text-4xl">&#9733;</span>
            </div>
          );
        })}
      </div>
    );
};

export default StarRaTing;