import React, { useState } from 'react'
import './CardsReport.css'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const CardsReport = (props) => {
  return (
   <ExtendedCardReport par={props} />
  )
}

//ExtendedCardReport

function ExtendedCardReport({par}){
  return(
    <div className='ReportCard'
      style={{
        background: par.color.backGround,
        boxShadow: par.color.boxShadow
      }}>
      <div className='radialBar'>
        <CircularProgressbar value={par.barValue} text={`${par.barValue}%`} />
      </div>
      <div className='ReportDetail'>
        <span>{par.title}</span>
        <span>{par.balance}</span>
        <span>{par.submit}</span>
      </div>
    </div>
  );
}


export default CardsReport