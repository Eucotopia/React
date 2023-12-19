import React from 'react';

/**
 * const listItems = chemists.map(person =>
 *   <li>...</li> // Implicit return!
 * );
 *
 * 带了 {} 必须要有返回值
 * const listItems = chemists.map(person => { // Curly brace
 *   return <li>...</li>;
 * });
 */
function getImageUrl(person: {
    id?: number;
    name?: string;
    profession?: string;
    accomplishment?: string;
    imageId: any;
}) {
    return (
        'https://i.imgur.com/' +
        person.imageId +
        's.jpg'
    );
}

export const people2 = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations',
    imageId: 'MK3eW3A'
}, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    accomplishment: 'discovery of Arctic ozone hole',
    imageId: 'mynHUSa'
}, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    accomplishment: 'electromagnetism theory',
    imageId: 'bE7W1ji'
}, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
    imageId: 'IOjWm71'
}, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'white dwarf star mass calculations',
    imageId: 'lrWQx8l'
}];

const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
]
const listItems = people.map(person => <li>{person}</li>)
const chemists = people2.filter(person => person.profession === 'chemist')
// <li key={person.id}>...</li>      map 函数总是需要一个 key 值
const listItems1 = chemists.map(person =>
    <li key={person.id}>
        <img
            src={getImageUrl(person)}
            alt={person.name}
        />
        <p>
            <b>{person.name}:</b>
            {' ' + person.profession + ' '}
            known for {person.accomplishment}
        </p>
    </li>
);

function App() {
    return (
        <>
            <ul>
                {listItems}
                {
                    listItems1
                }
            </ul>
        </>
    );
}

export default App;
