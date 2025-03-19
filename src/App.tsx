import { decrement, increment, incrementByAmount } from "./app/features/counter/counterSlice"
import { useAppDispatch, useAppSelector } from "./app/hooks"

const App = () => {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>incrementByAmount</button>
    </div>
  )
}

export default App