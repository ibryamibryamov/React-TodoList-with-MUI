import { Modal } from '@mui/material'
import CloseRounded from '@mui/icons-material/CloseRounded'
import { useEffect, useState } from 'react';
import CompletedItem from './CompletedItem';

const BottomBar = (props) => {
const [completedModalOn, setCompletedModalOn] = useState(false);


const toggleCompletedModal = () => {
  setCompletedModalOn(prevValue=>!prevValue);
  console.log(props.completedArray)
}

  return (
    <div className='bottom-bar'>
      <div className='bottom-bar__item'>
        <h2 className='bottom-bar__item__title'>Active</h2>
        <h1 className='bottom-bar__item__value'>{props.activeValue} items</h1>
      </div>
      <div className='bottom-bar__item bottom-bar__item--clickable' onClick={toggleCompletedModal}>
      <h2 className='bottom-bar__item__title'>Completed</h2>
        <h1 className='bottom-bar__item__value'>{props.completedValue} items</h1>
      </div>
      <div className='bottom-bar__item'>
      <h2 className='bottom-bar__item__title'>Edited</h2>
        <h1 className='bottom-bar__item__value'>{props.editedValue} items</h1>
      </div>
      <div className='bottom-bar__item'>
      <h2 className='bottom-bar__item__title'>Removed</h2>
        <h1 className='bottom-bar__item__value'>{props.removedValue} items</h1>
      </div>
      <Modal 
      className='bottom-bar__completed-modal'
      open={completedModalOn}
      onClose={toggleCompletedModal}
      >
        <div className='bottom-bar__completed-modal__content'>
          <button className='bottom-bar__completed-modal__content__close-btn' onClick={toggleCompletedModal}><CloseRounded/></button>
        {
          props.completedArray.map((completed, index)=>(
            <CompletedItem key={index} title={completed}/>
          ))
        }
        </div>
      </Modal>
    </div>
  )
}

export default BottomBar