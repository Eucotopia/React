import React from 'react';

/**
 * 纯函数是指具有以下特征的函数：
 * 1. 它只管自己的事。它不会改变任何在调用它之前就存在的对象或变量
 * 2. 输入相同，输出相同。在输入相同的情况下，纯函数应始终返回相同的结果
 */
function Recipe({drinkers}: { drinkers: number }) {

    return (
        <ol>
            <li>Boil {drinkers} cups of water.</li>
            <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.</li>
            <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
        </ol>
    );
}

function App() {
    return (
        <>
            <section>
                <h1>Spiced Chai Recipe</h1>
                <h2>For two</h2>
                <Recipe drinkers={2}/>
                <h2>For a gathering</h2>
                <Recipe drinkers={4}/>
            </section>
        </>
    );
}

export default App;
