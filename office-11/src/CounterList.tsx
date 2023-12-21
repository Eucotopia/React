import {useState} from "react";

const initialCounters = [0, 1, 2, 3]
export default function CounterList() {
    const [counters, setCounters] = useState(initialCounters)
    const [name, setName] = useState('')
    return (
        <>
            <input value={name} onChange={(e) => {
                setName(e.target.value)
            }}/>
            <button onClick={() => {
                const a = 1
                const nextCounter = [
                    ...counters.slice(0, a),
                    Number.parseInt(name),
                    ...counters.slice(a)
                ]
                setCounters(nextCounter)
            }}>add
            </button>
            <button onClick={() => {
                // 首先进行复制
                const nextCounter = [...counters]
                // 然后进行反转
                nextCounter.reverse()
                setCounters(nextCounter)
            }}>reverse
            </button>
            {
                counters.map((counter, index) => {
                    return (
                        <>
                            <div key={index}>
                                {counter}
                            </div>
                            <button onClick={() => {
                                const nextCounter = counters.map((a, i) => {
                                    if (index === i) {
                                        return a + 1
                                    } else {
                                        return a
                                    }
                                })
                                setCounters(nextCounter)
                            }}>+1
                            </button>
                        </>
                    )
                })
            }
        </>
    )
}