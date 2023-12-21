import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/**
 * React 重新渲染组件的时机：
 *  1. React 再次调用函数
 *  2. 函数会返回一个新的 jsx 快照
 *  3. React 会比较新旧快照
 */
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
