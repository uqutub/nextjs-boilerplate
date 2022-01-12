import { useSelector, useDispatch } from 'react-redux'
import { getTodo } from '../redux/action/todoAction'

export default function TodoComponent() {

  const dispatch = useDispatch()
  const { todo, error } = useSelector(state => state.todo)

  const getTodoHandler = () => {
    const id = 1
    dispatch(getTodo(id))
  }

  return (
    <div>
      <h1>Todo Component</h1>

      <main>
        <button onClick={getTodoHandler}>Get Todo</button>
      </main>

      {
        todo && (<pre> {JSON.stringify(todo, null, 4)} </pre>)
      }

      {
        error && (<footer style={{ color: 'red' }}> {error.message} </footer>)
      }
    </div>
  )
}