import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  selectCount,
} from "../redux/reducer/counterSlice";

export default function Counter() {
  // const [increment, setIncement] = useState(2);
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <>
      <div className="counter">
        <div>
          <button
            aria-label="Increment count"
            onClick={() => dispatch(increment())}
            style={{ width: "100px", height: "100px" }}
          >
            Increment
          </button>
        </div>
        <div>
          <h1 style={{ fontSize: "100px" }}>{count}</h1>
        </div>
        <div>
          <button
            aria-label="Decrement count"
            onClick={() => dispatch(decrement())}
            style={{ width: "100px", height: "100px" }}
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}
