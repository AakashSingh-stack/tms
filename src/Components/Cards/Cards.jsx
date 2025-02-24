import React from 'react'
import './Cards.css'

export const Cards = (props) => {
  return (
    <div className='mcon'><div><img src={props.logo} alt="" /></div><div><div id='nmo'>2</div><div id='texx'>{props.tex}</div></div></div>
  )
}
