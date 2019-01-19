import React from 'react';

function AddTodo (props) {
    console.log('render',props)
    return(
        <div className="row">
            <div className="col-md-12">
                <input type="text" value={props.value} onChange={props.inputChange} placeholder="Type Here.." className="form-control"/>
            </div>

        </div>
    )
}

export default AddTodo
