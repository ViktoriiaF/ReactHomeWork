import React from 'react';
import ReactDOM from 'react-dom';
import '../css/App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from 'react-bootstrap/ListGroup';

const TodoItem=(props)=>{
    const {id, text, completed} = props.item
    return( 
        <ListGroup.Item as='li' variant="info"className="todo-list">     
            <input type="checkbox" checked={completed}/>
            <span>{text}</span>                
        </ListGroup.Item>      
    )
}


export default TodoItem