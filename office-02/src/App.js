/**
 * 1. 当需要传递属性值时需要使用单引号或者双引号
 * 2. 如果我们需要使用一个变量作为属性值，那么需要使用 {} 代替 ""
 * 3. 如果希望在 html 中使用 JavaScript 语法，那么需要将语法写在 {} 中
 * @returns {JSX.Element}
 * @constructor
 */
const today = new Date()

/**
 * 格式化日期
 * @param date
 * @returns {string}
 */
function formatDate(date) {
    return new Intl.DateTimeFormat(
        "en-US", {
            weekday: 'long'
        }
    ).format(date)
}

/**
 * 1. 如果希望将一个对象作为属性值传递，那么需要使用 {{}},内层 {} 标识传递的为一个对象，外层标识 jsx 语法
 * @returns {JSX.Element}
 * @constructor
 */
const person = {
    name: 'Gregorio Y. Zara',
    theme: {
        background: 'black',
        color: 'pink'
    }
}

function App() {
    const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
    const name = "Gregorio Y. Zara";
    return (
        <>
            <ul style={
                {
                    background: 'black',
                    color: 'pink'
                }
            }>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
            <h1>{name}'s To Do List</h1>
            <h1>To Do List for {formatDate(today)}</h1>
            <img
                className="avatar"
                src={avatar}
                alt={name}
            />
            <div style={person.theme}>
                <h1>{person.name}'s Todos</h1>
                <h1>{person.name}'s Todos</h1>
                <img
                    className="avatar"
                    src="https://i.imgur.com/7vQD0fPs.jpg"
                    alt="Gregorio Y. Zara"
                />
                <ul>
                    <li>Improve the videophone</li>
                    <li>Prepare aeronautics lectures</li>
                    <li>Work on the alcohol-fuelled engine</li>
                </ul>
            </div>
        </>
    );
}

export default App;
