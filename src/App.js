import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment, incrementByAmount } from "./redux/counter";

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter Application</h1>
      <h1>The count is: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(33))}>
        Increment By 33
      </button>
    </div>
  );
}

export default App;
