import React, { useState, useCallback } from "react";
import "./styles.css";

const AppUseCallback = () => {
  const [input, setInput] = useState("");
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value),
    [setInput]
  );

  return (
    <>
      <InputWithLabel onChange={onChange} />
      <Length input={input} />
    </>
  );
};

const InputWithLabel = React.memo(
  (prop: { onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
    const { onChange } = prop;

    console.log("!!!!rendering InputWithLabel!!!!");

    return (
      <>
        <span>Label: </span>
        <input type="text" onChange={onChange} />
      </>
    );
  }
);

const Length = (props: { input: string }) => (
  <div>length: {props.input.length}</div>
);

// // サンプルA
// const App = () => {
//   const [ input, setInput ] = useState("")
//   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)

//   return (
//     <>
//       <InputWithLabel onChange={onChange} />
//       <Length input={input} />
//     </>
//   )
// }

// const InputWithLabel = (prop: { onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
//   const { onChange } = prop

//   console.log('!!!!rendering InputWithLabel!!!!')

//   return (
//     <>
//       <span>Label: </span>
//       <input type="text" onChange={onChange}/>
//     </>
//   )
// }

// const Length = (props: { input: string }) => (
//   <div>length: {props.input.length}</div>
// )

export default AppUseCallback;

//　参考：　https://qiita.com/jonakp/items/0db6fb9e75edcec875b2
// Reactコンポーネントの再レンダリングはおおよそ以下3つの条件で発生します。
// propsの更新
// stateの更新
// 親コンポーネントが再レンダリングされた時
