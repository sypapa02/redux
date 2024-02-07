import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './Redux/Reducers/reducer';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import './App.css';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <div className="app-container">
        <div>
            <h1 className="app-title">listes à faire |Am.Sy| Application</h1>
            <div className="task-section">
              <h2 className="section-title">Ajouter une nouvelle Tâche</h2>
              <AddTask />
            </div>
            <div className="task-section">
              <h2 className="section-title-one">Toutes les Tâches</h2>
              <TaskList />
            </div>
            <div className="task-section">
            <h2 className="section-title-three">Tâches en cours</h2>
              <TaskList filter="notDone" />
            </div>
            <div className="task-section">
              <h2 className="section-title-two">Tâches Terminées</h2>
              <TaskList filter="done" />
            </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;