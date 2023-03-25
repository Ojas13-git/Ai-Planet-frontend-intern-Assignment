import React from 'react'

function Card({name, img, desc,date}) {
  const checkTime = (date) =>{
    const curDate = new Date();
    if(!Math.ceil((curDate-date)/(1000 * 60 * 60 * 24))){
      date = Date.parse(date)
    }
    return Math.ceil((curDate-date)/(1000 * 60 * 60 * 24));
  }

  return (
    <div className='cardContainer'>
        <div className="heading">
            <div className='img'><img src={img}  alt="" /></div>
            <div><span>{name}</span></div>
        </div>
        <div className="data">{desc}</div>
        <div className="date"><p>uploaded {checkTime(date)} days ago</p></div>
    </div>
  )
}

export default Card