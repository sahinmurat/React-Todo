import React from 'react';
import {  BsFillPlusSquareFill } from "react-icons/bs";

const Form = ({setInputText, setTodos, todos, inputText}) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }
    const submitTodoHandler = (e) => {
      e.preventDefault();
      console.log(e.preventDefault);
      setTodos([
          ...todos, {text:inputText, completed:false, id:Math.random() * 1000}
      ])
      setInputText('')
    }

    return(
        <form>
            <input onChange={inputTextHandler} type='text' classNameName='todo-input' />
            <button className='todo-button' onClick={submitTodoHandler} type='submit'>
            <BsFillPlusSquareFill size='1em' color='orange' />
            </button>
            <div className='select'>
                <select name='todos' className='filter-todo'>
                    <option value='all'>All</option>
                    <option value='completed'>completed</option>
                    <option value='uncompleted'>Uncompleted</option>
                </select> 
            </div>
        </form>
    )
}
export default Form;