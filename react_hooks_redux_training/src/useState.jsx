import React, { useState, useEffect } from "react";
import "./styles.css";

const AppUseState = props => {
  const [state, setState] = useState(props);
  const { name, price } = state; //stateの値を分割代入

  // 状態遷移表チェックせよ！
  // useEffect(() => {  //returnのレンダリングの後に呼ばれる
  //   console.log("This is like componentDidMount and componentDidUpdate")
  // })
  // useEffect(() => {
  //   console.log("This is like componentDidMount")
  // }, [])
  // useEffect(() => {
  //   console.log("This callback is for name only.")
  // }, [name])

  return (
    <>
      <p>
        現在の{name}は、{price}円です。
      </p>
      <button onClick={() => setState({ ...state, price: price + 1 })}>
        +1
      </button>
      <button onClick={() => setState({ ...state, price: price - 1 })}>
        +1
      </button>
      <button onClick={() => setState(props)}>Reset</button>
      <input
        value={name}
        onChange={e => setState({ ...state, name: e.target.value })}
      />
    </>
  );
};

AppUseState.defaultProps = {
  name: "",
  price: 1000
};

export default AppUseState;
