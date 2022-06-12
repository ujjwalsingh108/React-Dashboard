import React from 'react'
import { CardsData } from '../../Data/Data'
import './Cards.css'
import Card from '.././IndividualCards/Card'

const Cards = () => {
  return (
    <div className="cards">
        {CardsData.map((card)=>{
            return(
                <div className="parentContainer">
                    <Card 
                    title={card.title} 
                    color={card.color}
                    value={card.value}
                    saving={card.saving}
                    />
                </div>
            );
        })}
    </div>
  );
};

export default Cards