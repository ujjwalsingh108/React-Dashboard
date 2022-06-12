import React from 'react'
import { ReportData } from '../../Data/Data'
import CardsReport from '../CardsReport/CardsReport';

const Report = () => {
  return (
    <div className="cards">
    {ReportData.map((card)=>{
        return(
            <div className="parentContainer">
                <CardsReport 
                title={card.title} 
                balance={card.balance}
                submit={card.submit}
                barValue={card.barValue}
                color={card.color}
                />
            </div>
        );
    })}
</div>
  )
}

export default Report