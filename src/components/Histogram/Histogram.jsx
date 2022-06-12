import React from 'react'
import { HistData } from '../../Data/Data'
import Chart from 'react-apexcharts'

const Histogram = () => {
  return (
    <div className="cards">
        {HistData.map((card)=>{
            return(
                <div className="parentContainer">
                    <HistView 
                    title={card.title} 
                    balance={card.balance}
                    color={card.color}
                    />
                </div>
            );
        })}
    </div>
  )
}

const HistView = (param) =>{

    const options = {
        series: [{
        name: 'Website Blog',
        type: 'column',
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
      }, {
        name: 'Social Media',
        type: 'line',
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
      }],
        chart: {
        height: 350,
        type: 'line',
      },
      stroke: {
        width: [0, 4]
      },
      title: {
        text: 'Traffic Sources'
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1]
      },
      labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
      xaxis: {
        type: 'datetime'
      },
      yaxis: [{
        title: {
          text: 'Website Blog',
        },
      
      }, {
        opposite: true,
        title: {
          text: 'Social Media'
        }
      }]
      };


    return(
        <div className='HistogramCard'
        style={{
            background: param.color.backGround,
            boxShadow: param.color.boxShadow
        }}>
            <span>{param.title}</span>
            <span>{param.balance}</span>
        <div className="chartContainer">
            <Chart series={options.series} options={options} />
        </div>
        </div>
    )
}

export default Histogram