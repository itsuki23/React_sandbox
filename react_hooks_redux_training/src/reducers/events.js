import { CREATE_EVENT, DELETE_EVENT, DELETE_ALL_EVENTS } from "../actions";

const Reducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_EVENT:
      const event = { title: action.title, body: action.body };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, { id, ...event }];
    case DELETE_EVENT:
      return state.filter(event => event.id !== action.id);
    case DELETE_ALL_EVENTS:
      return [];
    default:
      return state;
  }
};

export default Reducer;

// action = {
//  type: 'CREATE_EVENT',
//  title: '2020年東京オリンピックのお知らせ',
//  body: '2020年に東京でオリンピックを開催します。つきましては。。。。'
// }

// # before
// state = []

// # after
// state= [
//     { id: 1, title: 'タイトル１', body: 'ボディー１'},
//     { id: 2, title: 'タイトル2', body: 'ボディー2'},
// ]
// import React from "react";
