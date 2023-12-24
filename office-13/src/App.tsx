import React, {useState} from 'react';

/**
 * 当取消一个组件后，React 会删除该组件的状态
 * @constructor
 */
function Counter() {
    const [score, setScore] = useState(0)
    const [hover, setHover] = useState(false)
    let className = 'counter'
    if (hover) {
        className += ' hover'
    }
    return (
        <>
            <div className={className}
                 onPointerEnter={() => setHover(true)}
                 onPointerLeave={() => setHover(false)}>
                <h1>{score}</h1>
                <button onClick={() => setScore(score + 1)}>
                    Add one
                </button>
            </div>
        </>
    )
}

function App() {
    const count = <Counter/>
    const [showB, setShowB] = useState(true)
    return (
        <>
            {count}
            {showB && count}
            <label>
                <input
                    type="checkbox"
                    checked={showB}
                    onChange={e => {
                        setShowB(e.target.checked)
                    }}
                />
                Render the second counter
            </label>
        </>
    );
}

export default App;
