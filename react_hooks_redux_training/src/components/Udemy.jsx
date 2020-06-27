import React, { useReducer, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; //jQuery部分は使わない
import Reducer from "../reducers";
import Form from "./Form";
import Events from "./Events";
import OperationLogs from "./OperationLogs";
import AppContext from "../contexts/AppContext";

const APP_KEY = "appWithRedux";

const Udemy = () => {
  const appState = localStorage.getItem("APP_KEY");
  const initialState = appState
    ? JSON.parse(appState)
    : {
        events: [],
        operationLogs: []
      };
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    localStorage.setItem("APP_KEY", JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <Form />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  );
};

export default Udemy;
