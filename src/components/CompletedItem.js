import React from 'react'

const CompletedItem = (props) => {
  return (
    <div className='completed-item'>
        <h2 className='completed-item__title'>{props.title}</h2>
    </div>
  )
}

export default CompletedItem