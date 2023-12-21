import React, {useState} from 'react';

/**
 * setNumber(prevState => prevState + 1) 函数式更新会在状态改变时得到最新的状态
 * setNumber(number + 3) 参数式更新只会在下一次渲染后得到最新的状态
 * @constructor
 */

function App() {
    const [number, setNumber] = useState(0)
    return (
        <>
            <h1>{number}</h1>
            <button onClick={() => {
                setNumber(prevState => prevState + 1)
                setNumber(number + 3)
            }}>+3
            </button>
        </>
    );
}

export default App;
