import React from 'react';

const initialItems = [
    {title: 'pretzels', id: 0},
    {title: 'crispy seaweed', id: 1},
    {title: 'granola bar', id: 2},
];

function App() {
    const [items, setItems] = React.useState(initialItems);
    const [itemsId, setItemId] = React.useState(0);
    return (
        <>
            <ul>
                {
                    items.map((item) => {
                            return (
                                <>
                                    <li key={item.id}>
                                        <input value={item.title}
                                               onChange={(e) => {
                                                   setItems(
                                                       items.map((i) => {
                                                           if (i.id === item.id) {
                                                               return {...i, title: e.target.value}
                                                           }
                                                           return i
                                                       })
                                                   )
                                               }}/>
                                        <button onClick={() => {
                                            // 更新 id 即可
                                            setItemId(item.id)
                                        }}>
                                            choose
                                        </button>
                                    </li>
                                </>

                            )
                        }
                    )
                }
            </ul>
            <p>你的选择为:{items[itemsId].title}</p>
        </>
    );
}

export default App;
