import {useState} from "react";

let initialShapes = [
    {id: 0, type: 'circle', x: 50, y: 100},
    {id: 1, type: 'square', x: 150, y: 100},
    {id: 2, type: 'circle', x: 250, y: 100},
];
export default function ShapeEditor() {
    const [shapes, setShapes] = useState(
        initialShapes
    );
    return (
        <>
            <button onClick={() => {
                const nextShape = shapes.map(shape => {
                    if (shape.type === 'square') {
                        return shape
                    } else {
                        return ({
                                ...shape,
                                y: shape.y + 50
                            }
                        )
                    }
                })
                setShapes(nextShape)
            }}>move
            </button>

            {
                shapes.map(shape => {
                    return (
                        <div key={shape.id}
                             style={
                                 {
                                     position: 'absolute',
                                     left: shape.x,
                                     top: shape.y,
                                     borderRadius: shape.type === 'circle' ? '50%' : 0,
                                     width: 20,
                                     height: 20,
                                     backgroundColor: 'red'
                                 }
                             }/>
                    )
                })
            }
        </>
    )

}