import React from 'react'
import { useParams } from 'react-router-dom'

const Mobile = () => {
    const {mobile}=useParams()
  return (
    <div>
        <h1>YOUR SEARCH VALUE IS  :- {mobile} </h1>
      <ul className="list-group">
  <li className="list-group-item">An item</li>
  <li className="list-group-item">A second item</li>
  <li className="list-group-item">A third item</li>
  <li className="list-group-item">A fourth item</li>
  <li className="list-group-item">And a fifth one</li>
</ul>
    </div>
  )
}

export default Mobile
