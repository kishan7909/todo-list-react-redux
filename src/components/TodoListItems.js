import React from 'react';

function TodoListItems (props){
    return (
        <div className="mt-5">
            {props.items.map((item, index) => {
                return <li key={index} className="list-group-item">
                <span className="item-name">{item}</span>
                <button onClick={() => props.itemDelete(index)} type="button" className="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                </button>
                </li>
            })}
        </div>

    )
}

export default TodoListItems;
