import React from "react";

/**
 * 1. 首先第一个 {} 表示申明需要接受的属性，其次需要在后面表明各个属性的类型，person 为对象，imageId 为 number
 * 2. {person, size}: { person: { name: string, imageId: string }, size: number } 类似于解构
 * 3. 如果需要设置默认值，需要在后面 size?: number 添加问号
 * @param person
 * @param size
 * @constructor
 */
function Avatar({person, size = 100}: { person: { name: string, imageId: string }, size?: number }) {
    return (
        <img
            src={`https://i.imgur.com/${person.imageId}.jpg`}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

export default function App() {
    return (
        <div>
            <Avatar
                person={{name: 'Lin Lanying', imageId: '1bX5QH6'}}
            />
        </div>
    );
}
