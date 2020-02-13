import React, { useReducer } from "react";

const reducer = (state, action) => {
  //action에 따라 다른 작업 수행
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
};

const Counter2 = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 }); //첫 번째 인자에는 리듀서 함수, 두 번째 인자에는 해당 리듀서의 초기 값
  //dispatch는 action을 발생시키는 함수
  return (
    <div>
      <div>
        <p>
          현재 카운터 값은 <b>{state.value}</b>입니다.
        </p>
      </div>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};

export default Counter2;
