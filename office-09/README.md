当点击 +3 按钮时，number 只会加 1
> **React 只会在下一次渲染时更新状态**
1. setNumber(number + 1): number is 0 so setNumber(0 + 1) number 依旧是 0 ，1 只会在下一次渲染生效
2. setNumber(number + 1): number is 0 so setNumber(0 + 1) number 依旧是 0 ，1 只会在下一次渲染生效
3. setNumber(number + 1): number is 0 so setNumber(0 + 1) number 依旧是 0 ，1 只会在下一次渲染生效
```tsx
import React, {useState} from 'react';


function App() {
    const [number, setNumber] = useState(0)
    return (
        <>
            <h1>{number}</h1>
            <button onClick={() => {
                setNumber(number + 1)
                setNumber(number + 1)
                setNumber(number + 1)
            }}>+3
            </button>
        </>
    );
}

export default App;
```


> setNumber 函数 和 alert 是在同一个函数中被调用的，也就是说渲染是同时进行的，所以此时他们所得到的数据都是渲染前的数据
```tsx
import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 5);
        setTimeout(() => {
          alert(number);
        }, 1000);
      }}>+5</button>
    </>
  )
}
```

> 下面的代码中所有的数据都已经在 onChange 函数中状态发生了改变，那么他们会一直渲染，而点击 send 按钮后，得到的就是已经渲染后的数据
```tsx
import { useState } from 'react';

export default function Form() {
  const [to, setTo] = useState('Alice');
  const [message, setMessage] = useState('Hello');

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      alert(`You said ${message} to ${to}`);
    }, 1000);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        To:{' '}
        <select
          value={to}
          onChange={e => setTo(e.target.value)}>
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
      </label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={e => 
          {
            setMessage(e.target.value)
                setTimeout(() => {
      alert(`You said ${message} to ${to}`);
    }, 1000);
          }}
      />
      <button type="submit">Send</button>
    </form>
  );
}
```