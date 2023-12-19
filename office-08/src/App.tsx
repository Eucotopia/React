import {useState} from "react";

/**
 * 1. const [0,setCont] = useState(0)
 * 2. 当进行 useState(count+1) 后，React 会记住 count 的值，然后去更新它的值，从而使组件重新渲染
 * @constructor
 */
/**
 * 不同的两个组件之间的状态是隔离的
 * @constructor
 */
function Count() {

    const [count, setCount] = useState(0)
    return (
        <div onClick={() => {
            setCount(count + 1)
        }}>{count}</div>
    )
}

function App() {
    const [count, setCount] = useState(1)
    const [showMore, setShowMore] = useState(false)
    return (
        <>
            <button onClick={() => {
                setCount(count + 1)
            }}>
                {count}
            </button>
            <button onClick={() => {
                setShowMore(!showMore)
            }}>
                {showMore ? 'Hide' : 'Show'}
            </button>
            {showMore && <div>More</div>}
            <Count/>
            <Count/>
        </>
    )
}

export default App
