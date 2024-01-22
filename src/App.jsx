import './App.css';
import Todo from './components/Todo.jsx';
import TodoWrapper from './components/TodoWrapper.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

function App() {

  return (
    <div>
      <TodoWrapper />
      <Todo />
      <h1>Hello</h1>
      <FontAwesomeIcon icon={faEnvelope} size="lg" style={{color: "#B197FC",}} />
      <FontAwesomeIcon icon={faPenToSquare} size="lg" style={{color: "#B197FC",}} />
      
    </div>
  )
}

export default App
