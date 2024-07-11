import React from 'react'
import CardItem from './CardItem'

function Toolcard({ list }) {
    
      return (
        <div className="flex flex-wrap justify-center">
          {list.map((card, index) => (
            <CardItem key={index} title={card.title} image={card.image} />
          ))}
        </div>
      );
}

export default Toolcard