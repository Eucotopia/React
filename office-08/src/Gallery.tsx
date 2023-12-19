import {useState} from "react";

export default function Gallery() {
    const [count, setCount] = useState(1)

    return (
        <>
            <button onClick={() => {
                setCount(count + 1)
            }}
                    disabled={count >= 10}>
                ++
            </button>
            <button onClick={() => {
                setCount(count - 1)
            }}
                    disabled={count <= 0}>
                --
            </button>
            {count}
            <h1></h1>
        </>
    )
}
