import './App.css';
import React, {useState} from 'react';
import Form from './components/Form'
import TodoList from './components/TodoList'

const App = () => {
const [inputText, setInputText] = useState('');
const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1> Murat's TODO List </h1>
        <h1>{inputText}</h1>
        <h1>{JSON.stringify(todos)}</h1>
      </header>
      <Form setInputText={setInputText} todos={todos} setTodos={setTodos} inputText={inputText} />
      <TodoList inputText={inputText} /> 
    </div>
  );
}

export default App;

