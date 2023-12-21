import React, {useState} from 'react';

// 这个值不要放在组件里面，因为组件会反复渲染，那么每一次 nextId 都会是  0，而不是实现 ++

let nextId = 0

function App() {
    const [array, setArray] = useState<{ id: number, name: string }[]>([])
    const [name, setName] = useState('')
    return (
        <>
            <input
                value={name}
                onChange={e => setName(e.target.value)}/>
            <button
                onClick={() => {
                    // 返回的是新得数组，需要用 [] 包起来
                    // name 的位置可以决定添加到数组的首部还是尾部
                    setArray([
                            {
                                id: nextId++,
                                name: name
                            },
                            ...array
                        ]
                    )
                }}>add
            </button>
            <ul>
                {
                    array.map((item, index) => {
                        return (
                            <>
                                <li key={item.id}>{item.id}-----{item.name}</li>
                                <button onClick={() => {
                                    setArray(
                                        array.filter(a => a.id !== item.id)
                                    )
                                }}>delete
                                </button>
                            </>
                        )
                    })
                }
            </ul>
        </>
    );
}

export default App;
