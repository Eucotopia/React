import React from 'react';
import {Simulate} from "react-dom/test-utils";
import playing = Simulate.playing;

/**
 *  我们需要将 handClick 作为参数传递给 button，这就告诉 React 只有在点击按钮后才会调用 handClick 函数
 *  <button onClick={handClick}>
 *                 I don't do anything
 *  </button>
 *   <button onClick={() => alert('You clicked me!')}>

 *
 *
 *  如果带有 (),那么 handClick 函数会立即执行，因为这是一个函数调用，而在 {} 中的函数都会自动调用
 *  button onClick={handClick()}>
 *                 I don't do anything
 *  </button>
 *  This alert fires when the component renders, not when clicked!
 *  <button onClick={alert('You clicked me!')}>
 *
 *  总结：onclick 函数只能采用如何方式
 *  <button onClick={() => alert('You clicked me!')}>
 *  <button onClick={handClick}>
 *
 * @constructor
 */
function Button({onclick, children}: { onclick: any, children: any }) {
    return (
        <button onClick={onclick}
        >
            {children}
        </button>
    )
}

function PlayButton({movieName}: { movieName: string }) {
    function handlePlayClick() {
        alert(`Playing ${movieName}!`)
    }

    return (
        <Button onclick={handlePlayClick}>
            Play "{movieName}"
        </Button>
    )
}
function AlertButton({message, children}: { message: string, children: any }) {
    return (
        <>
            <button onClick={() => alert(message)}>
                {children}
            </button>
            <PlayButton movieName={"asdfadfds"}/></>
    );
}

function App() {
    function handClick() {
        alert("点击")
    }

    return (
        <>
            <button onClick={handClick}>
                I don't do anything
            </button>
            <AlertButton message={"adf"}>
                123
            </AlertButton>
            <AlertButton message={"adf"}>
                456
            </AlertButton>

            <div onClick={(e)=>{
                alert("事件传播")
            }}>
                <button onClick={(e)=>{
                    e.stopPropagation()

                    alert("playing movie")
                }
                }>playing movie</button>
                <button onClick={(e:React.MouseEvent<HTMLButtonElement>)=>{
                    e.stopPropagation()

                    alert("playing music")
                }
                }>playing music</button>


                <form onClick={e=>{
                    e.stopPropagation()
                    e.preventDefault()
                }}>
                    <input/>
                    <button type={"submit"}>send</button>
                </form>
            </div>
        </>
    );
}

export default App;
