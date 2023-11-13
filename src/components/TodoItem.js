import DoneIcon from '@mui/icons-material/DoneRounded';
import CloseIcon from '@mui/icons-material/CloseRounded';
import EditIcon from '@mui/icons-material/EditRounded';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import { Modal } from '@mui/material';
import { useState } from 'react';

const TodoItem = (props) => {
const [editModal, setEditModal] = useState(false);
const [editInputValue, setEditInputValue] = useState('');

const toggleEditModal = () => {
setEditModal(prevValue=>!prevValue);
}

const handleInputChange = (event) => {
setEditInputValue(event.target.value);
}

  return (
    <div className='todo-item'>
        <h2 className='todo-item__title'>{props.title}</h2>
        <div className='todo-item__btn-container'>
            <button className='todo-item__btn-container__btn' onClick={()=>props.completeElement(props.title)}><DoneIcon/></button>
            <button className='todo-item__btn-container__btn' onClick={()=>props.removeElement(props.title)}><CloseIcon/></button>
            <button className='todo-item__btn-container__btn' onClick={toggleEditModal}><EditIcon/></button>
        </div>
        <Modal
        className='todo-item__modal'
        open={editModal}
        onClose={toggleEditModal}
        >
          <div className='todo-item__modal__content'>
            <button className='todo-item__modal__content__close-btn' onClick={toggleEditModal}><CloseIcon sx={{color: '#ffffff'}}/></button>
            <h3 className='todo-item__modal__content__container-title'>Edit</h3>
            <input className='todo-item__modal__content__input' 
            placeholder={props.title}
            type='text'
            value={editInputValue}
            onChange={handleInputChange}
            />
            <button className='todo-item__modal__content__submit-btn' onClick={()=>{props.editElement(props.title,editInputValue)}}><DoneRoundedIcon/></button>
          </div>
        </Modal>
    </div>
  )
}

export default TodoItem