import React from "react";
import { Answer } from "./index"; //indexから呼んでる点に注意

const Answers = props => {
  return (
    <div className="c-grid__answer">
      {props.answers.map((value, index) => {
        return (
          <Answer
            content={value.content}
            nextId={value.nextId}
            key={index.toString()}
            select={props.select}
          />
        );
        //indexはカウンター、consoleでエラー回避もできる
      })}
    </div>
  );
};

export default Answers;
