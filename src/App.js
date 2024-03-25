import { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [Tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addTodo = () => {
    if (text !== '') {
      if (isEditing) {
        const newTasks = [...Tasks];
        newTasks[editIndex] = text;
        setTasks(newTasks);
        setIsEditing(false);
        setEditIndex(null);
      } else {
        setTasks([...Tasks, text]);
      }
      setText('');
    }
  };

  const deleteTodo = (index) => {
    const newTasks = Tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };
  const editTodo = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    setText(Tasks[index]);
  };
  const complatedChange = (index) => {
    const newCompletedTasks = [...completedTasks];
    newCompletedTasks[index] = !newCompletedTasks[index];
    setCompletedTasks(newCompletedTasks);
  };


  return (
    <div className="App">
      <h1>Todo list</h1>
      <TodoInput text={text} setText={setText} addTodo={addTodo} />
      <TodoList list={Tasks} remove={deleteTodo} edit={editTodo} checked={completedTasks} onChange={complatedChange} />
    </div>
  );
}

export default App;