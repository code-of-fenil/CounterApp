import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  decrement,
  increment,
  AddAsyncAmount,
  selectCount,
  setIncrementAmount,
} from "../redux/reducer/counterSlice";

export default function Counter() {
  const [Increment, setIncrement] = useState("2");
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const incrementCount = Number(Increment) || 0;

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ marginTop: "10px" }}>
          <button
            aria-label="Increment async amount"
            onClick={() => dispatch(AddAsyncAmount(incrementCount))}
            style={{
              width: "100px",
              height: "100px",
              whiteSpace: "normal",
            }}
          >
            AsyncAmount
          </button>
        </div>
        <div style={{ marginTop: "10px" }}>
          <button
            aria-label="Increment amount"
            onClick={() => dispatch(setIncrementAmount(incrementCount))}
            style={{
              width: "100px",
              height: "100px",
              whiteSpace: "normal",
            }}
          >
            AddAmount
          </button>
        </div>
      </div>
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
          <div>
            <input
              type="number"
              placeholder="Enter The Number"
              value={incrementCount}
              onChange={(e) => setIncrement(e.target.value)}
              style={{ width: "400px", padding: "20px" }}
            />
          </div>
          <div>
            <h1 style={{ fontSize: "100px" }}>{count}</h1>
          </div>
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
