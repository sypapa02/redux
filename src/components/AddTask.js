import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../Redux/Actions/actions';
// import { addTask } from '../redux/actions/action';

const AddTask = () => {
  const [taskDescription, setTaskDescription] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskDescription.trim() !== '') {
      const newTask = {
        id: Date.now(),
        description: taskDescription,
        isDone: false,
      };
      dispatch(addTask(newTask));
      setTaskDescription('');
    }
  };

  return (
    <div>
      <input
        className='add-task-input'
        type="text"
        value={taskDescription}
        onChange={event => setTaskDescription(event.target.value)}
      />
      <button className='add-task-button' onClick={handleAddTask}>Ajouter Tâche</button>
    </div>
  );
};

export default AddTask;