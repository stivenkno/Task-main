import { useState } from 'react'

import './App.css'

import Task from './components/Task'

function App() {
  const [input, setInput] = useState('')
  const [tasks, setTasks] = useState([])

  const handleDelete = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id))
   }
  const handleDone = (id) => {
    setTasks((tasks) => tasks.map((task) => {
      if (task.id === id) {
        return { ...task, done: !task.done }
      }
      return task
    }))
  }

  return (
    <div className='App'>
      <div className='container'>
        <header className='input-container'>
          <input
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Add a task'
          />
          <button onClick={() => {
            if (input) {
              setTasks((tasks) => [...tasks, { id: Date.now(), task: input, done: false }])
              setInput('')
            }
          }}>Add Task</button>
        </header>
        <main className='tasks-container'> 
          {
            tasks.map(((task) => <Task id={task.id} task={task.task} done={task.done} key={task.id} handleDelete={() => handleDelete(task.id)} handleDone={(() => handleDone(task.id))}/>))
          }
        </main>
      </div>
    </div>
  )
}

export default App
