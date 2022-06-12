import React from 'react'
import './Card.css'

// parent card
const Card = (props) => {    
  return (
    <div className="Card">
        <CompactCard param = {props} />
    </div>
  )
}

//compact card
function CompactCard({param}){
    return(
        <div className="CompactCard" 
        style={{
            background: param.color.backGround,
            boxShadow: param.color.boxShadow
        }}>
            <div className="detail">
                <span>{param.title}</span>
               <span>{param.value}</span> 
               <span>{param.saving}</span>
            </div>
        </div>
    );
}

export default Card