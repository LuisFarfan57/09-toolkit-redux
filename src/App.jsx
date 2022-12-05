import reactLogo from './assets/react.svg'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByN } from './store/slices/counter/counterSlice'

function App() {
  const { counter } = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <p>count is {counter}</p>
      </div>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          increment
        </button>
        <button onClick={() => dispatch(decrement())}>
          decrement
        </button>
        <button onClick={() => dispatch(incrementByN(3))}>
          increment by N
        </button>
      </div>
    </div>
  )
}

export default App
