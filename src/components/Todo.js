import CheckBoxIcon from '@mui/icons-material/CheckBox';
import AddIcon from '@mui/icons-material/Add';
import TodoItem from './TodoItem';
import { useEffect, useState } from 'react';
import BottomBar from './BottomBar';


const Todo = () => {
const [todos, setTodos] = useState([]);
const [todoInputValue, setTodoInputValue] = useState('');
const [activeValue, setActiveValue] = useState(0);
const [completedValue, setCompletedValue] = useState(0);
const [completedArray, setCompletedArray] = useState([]);
const [editedValue, setEditedValue] = useState(0);
const [editedArray, setEditedArray] = useState([]);
const [removedValue, setRemovedValue] = useState(0);
const [removedArray, setRemovedArray] = useState([]);

useEffect(()=> {
const existingData = JSON.parse(localStorage.getItem('todos'));
if(existingData===null){
  localStorage.setItem('todos',JSON.stringify([]));
} else {
  setTodos(existingData);
  setActiveValue(existingData.length);
}

const existingCompletedData = JSON.parse(localStorage.getItem('completed'));
if(existingCompletedData===null){
  localStorage.setItem('completed',JSON.stringify([]));
} else {
  setCompletedArray(existingCompletedData);
  setCompletedValue(existingCompletedData.length);
}

const existingEditedData = JSON.parse(localStorage.getItem('edited'));
if(existingEditedData===null){
  localStorage.setItem('edited', JSON.stringify([]));
} else {
  setEditedArray(existingEditedData);
  setEditedValue(existingEditedData.length);
}

const existingRemovedData = JSON.parse(localStorage.getItem('removed'));
if(existingRemovedData===null){
  localStorage.setItem('removed', JSON.stringify([]));
} else {
  setRemovedArray(existingRemovedData);
  setRemovedValue(existingRemovedData.length);
}


},[]);

const addElement = () => {
if(todoInputValue!=='' && todos.includes(todoInputValue)===false){
const updatedTodos = [...todos, todoInputValue];
setTodos(updatedTodos);
localStorage.setItem('todos',JSON.stringify(updatedTodos));
setTodoInputValue('');
setActiveValue(prevValue=>prevValue+1);
console.log(JSON.parse(localStorage.getItem('todos')));
}
};

const removeElement = (target) => {
  const updatedTodos = todos.filter((todo)=>todo!==target);
  setTodos(updatedTodos);
  setActiveValue(prevValue=>prevValue-1);
  localStorage.setItem('todos', JSON.stringify(updatedTodos));
  const updatedRemovedData = [...removedArray, target];
  localStorage.setItem('removed', JSON.stringify(updatedRemovedData));
  setRemovedValue(prevValue=>prevValue+1);
}

const completeElement = (target) => {
if(completedArray.includes(target)===false){
  const updatedCompletedArray = [...completedArray, target];
  setCompletedArray(updatedCompletedArray);
  setCompletedValue(updatedCompletedArray.length);
  localStorage.setItem('completed',JSON.stringify(updatedCompletedArray));
}
}

const editElement = (oldValue, newValue) => {
  if(todos.includes(newValue)===false && newValue!==''){
  const removeOldValue = todos.filter((todo)=>todo!==oldValue);
  const addNewValue = [...removeOldValue, newValue];
  setTodos(addNewValue);
  setEditedValue(prevValue=>prevValue+1);
  localStorage.setItem('todos',JSON.stringify(addNewValue));
  const updatedEditedArray = [...editedArray, newValue];
  localStorage.setItem('edited', JSON.stringify(updatedEditedArray));
  }
}

const handleInputChange = (event) => {
  setTodoInputValue(event.target.value);
}

  return (
    <div className='todo'>
        <div className='todo__header'>
        <div className='todo__header__heading__container'>
        <CheckBoxIcon className='todo__header__heading__container__icon' sx={{color: '#ffffff'}}/>
        <h1 className='todo__header__heading__container__heading'>Todo App</h1>
        </div>
        <h2 className='todo__header__sub-heading'>A simple React Todo App</h2>
        </div>
        <div className='todo__form'>
          <input className='todo__form__input'
          type='text'
          value={todoInputValue}
          onChange={handleInputChange}
          />
          <button className='todo__form__input-btn' onClick={addElement}><AddIcon/></button>
        </div>
        <div className='todo__list'>
         {
          todos.map((todo, index) => (
            <TodoItem key={index} title={todo} removeElement={removeElement} completeElement={completeElement} editElement={editElement}/>
          ))
         }
        </div>
        <BottomBar activeValue={activeValue} completedValue={completedValue} editedValue={editedValue} removedValue={removedValue} completedArray={completedArray}/>
    </div>
  )
}



export default Todo