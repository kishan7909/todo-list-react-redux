import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import AddTodo from './components/AddTodo'
import TodoListItems from './components/TodoListItems'
import {connect} from 'react-redux'
function TodoApp (props) {
    console.log(props)

        return (
            <div className="container" style={{marginTop : "5rem"}}>
                <div className="row">
                    <div className="col-md-6 offset-3">
                        <div className="jumbotron text-center" style={{padding : "2rem"}}>
                            <h2>Todo List</h2>
                        </div>
                        <form onSubmit={props.submit}>
                        <AddTodo value={props.inputText} inputChange={props.inputChange} />
                        </form>
                        <TodoListItems items={props.items} itemDelete={props.itemDelete}  />
                    </div>
                </div>
            </div>
        );
    }
function mapStateToProps(state){
    return {
        inputText : state.inputText,
        items : state.items,

    }
}
function mapDispatchToProps(dispatch) {
    return {
        inputChange : (e) => {
            console.log("inputChange");
            const action = {type : 'INPUT_CHANGE',text : e.target.value}
            dispatch(action);
        },

        submit: (e) => {
            console.log("Submit Click")
            e.preventDefault();
            const action = {type : "ADD_ITEM"}
            dispatch(action);

        },

        itemDelete : (index) => {
            const action = {type : 'DELETE_ITEM',index : index}
            dispatch(action)
        },


    }

}

export default connect(mapStateToProps,mapDispatchToProps)(TodoApp);
