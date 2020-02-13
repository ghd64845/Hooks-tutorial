import React from "react";
import Counter from "./components/Counter";
import Info from "./components/Info";
import Info2 from "./components/Info2";
import Counter2 from "./components/Counter2";
import Info3 from "./components/Info3";
import Average from "./components/Average";
import Average2 from "./components/Average2";
import Average3 from "./components/Average3";

function App() {
  return (
    <div className="App">
      <h3>useState 사용</h3>
      <Counter />
      <hr />
      <h3>useEffect 사용</h3>
      <Info2 />
      <hr />
      <h3>useReducer 사용</h3>
      <Counter2 />
      <hr />
      <h3>useReducer 인풋 상태 관리</h3>
      <Info3 />
      <hr />
      <h3>useMemo 사용</h3>
      <Average />
      <hr />
      <h3>useCallback 사용</h3>
      <p>
        숫자, 문자열, 객체 처럼 일반 값을 재사용 하는 상황에는 useMemo사용,
        함수를 재사용하려면 useCallback 사용
      </p>
      <Average2 />
      <hr />
      <h3>useRef 사용</h3>
      <Average3 />
      <hr />
      <h3>Custom HOOKS</h3>
      <Info />
      <hr />
    </div>
  );
}

export default App;
