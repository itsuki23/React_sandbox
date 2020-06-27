import React, {useState} from 'react';

const Tab = () => {
    const [field, setField] = useState(false);

    return (
        <div className={`tab-body ${ field ? 'open' : '' }`}>
            <div className={`tab ${ field ? 'open' : '' }`} onClick={() => setField(!field)}>
            </div>
        </div>
    )
}

export default Tab;







// const [blue, setBlue] = useState(false)
// return (
//     <div>
//         <h1
//             className={`
//                 title
//                 ${ blue ? 'is-blue' : ''}
//             `}
//             onClick={() => setBlue(!blue)}
//         >React.js スタイル設定</h1>
//     </div>
// )
// }