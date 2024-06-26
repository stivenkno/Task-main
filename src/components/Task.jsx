import cross from '../assets/cross.svg'
import './Task.css'

function Task({ done = false, id, task, handleDelete, handleDone}) {
    return (
        <div onClick={handleDone} id={id} className={`task ${done ? 'task--done' : ''}`}>
            <p>{task}</p>
            <button onClick={handleDelete}>
                <img src={cross} alt="Close icon" />
            </button>
        </div>
    )
}

export default Task