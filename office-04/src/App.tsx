import React from 'react';

function Item({name, isPacked}: { name: string, isPacked: boolean }) {
    return (
        <li>{name} {isPacked ? "√" : "×"}</li>
    );
}

function App() {
    return (
        <>
            <section>
                <h1>Hello World</h1>
                <ul>
                    <li>
                        <Item name={"1"} isPacked={true}/>
                    </li>
                    <li>
                        <Item name={"2"} isPacked={false}/>
                    </li>
                    <li>
                        <Item name={"3"} isPacked={true}/>
                    </li>
                    <li>
                        <Item name={"4"} isPacked={false}/>
                    </li>
                </ul>
            </section>
        </>
    );
}

export default App;
