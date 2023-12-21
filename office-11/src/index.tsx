import React from 'react';
import ReactDOM from 'react-dom/client';
import CounterList from "./CounterList";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <CounterList/>
    </React.StrictMode>
);
