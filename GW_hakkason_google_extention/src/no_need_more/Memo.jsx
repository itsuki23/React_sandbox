
import React, { useState, useEffect } from 'react';
import { Rnd } from 'react-rnd';
import '../assets/styles/style.css';
import { FormList, TabField } from '../components/index';

const Memo = () => {
    // const [width, setWidth] = useState(0);
    // const [height, setHeight] = useState(0);

    // const adapt(() => {
    //     const memo = document.getElementById('rnd');
    //     const memoWidth = memo.style.width;
    //     const memoHeight = memo.style.height;
    
    //     console.log(memoHeight);
    //     console.log(memoWidth);
    // }, [limit]);

    // var ro = new ResizeObserver(function(mutationRecords){
    //     mutationRecords[0].target.textContent = mutationRecords[0].contentRect.width;
    //   });
    //   ro.observe( document.getElementById("resize"));



    return (
        // <div className="App">
        // <div className="container">
            <Rnd id="rnd" className="rnd" bounds="body" default={{ x: 0, y: 0, width: 400, height: 300 }}>
                {/* {console.log(Rnd.style.width)} */}
                {/* <TabField /> */}
                <FormList />
                {/* <Form /> */}
            </Rnd>
        // </div>
        // </div>
    );
}
export default Memo;