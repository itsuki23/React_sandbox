import React from 'react';
import './assets/styles/style.css';
import {EmptyTextarea, TabNavigation} from "./components/index";

const App = () =>  {

  return (
    <section className="wrapper">
        <TabNavigation />
        <EmptyTextarea />
    </section>
  );
}

export default App;
