import {useState} from "react";

/**
 * 处在同一个位置的同一组件状态相同
 * 处在同一位置的不同组件状态会改变
 * @constructor
 */
export default function App2() {
    const [isFancy, setIsFancy] = useState(false)
    return (
        <>
            {
                // 同一位置渲染不同组件会重置整个 ui 树
                isFancy ? (
                    <label>
                        <Counter isFancy={true}/>
                    </label>

                ) : (
                    <div>
                        <Counter isFancy={false}/>
                    </div>
                )
            }
            {
                // 同一位置渲染同一组件保持状态
                isFancy ? (
                    <div>
                        <Counter isFancy={true}/>
                    </div>

                ) : (
                    <div>
                        <Counter isFancy={false}/>
                    </div>
                )
            }
            {
                // 同一位置渲染同一组件保持状态
                // 当给组件设置不同 key 时，即便是同一位置的同一组件依旧保留保留各自状态，而不是同一状态
                isFancy ? (
                    <Counter isFancy={true} key={1}/>

                ) : (
                    <Counter isFancy={false} key={2}/>
                )
            }
            {
                // 同一位置渲染同一组件保持状态
                isFancy ? (<p>asdf</p>) : (<Counter isFancy={false}/>)
            }
            <input type={"checkbox"} onChange={e => setIsFancy(e.target.checked)} checked={isFancy}/>
        </>
    )

}

function Counter({isFancy}: { isFancy: boolean }) {
    const [score, setScore] = useState(0)
    let className
    if (isFancy) {
        className = {
            color: 'red'
        }
    }
    return (
        <>
            <div
                style={className}
            >
                <h1>{score}</h1>
                <button onClick={() => setScore(score + 1)}>
                    Add one
                </button>
            </div>
        </>
    )
}