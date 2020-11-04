import React from 'react';
import ReactDOM from 'react-dom';
import '../css/App.css'
import todosData from '../todosData';
import TodoItem from './TodoItem';

import ListGroup from 'react-bootstrap/ListGroup';




const App = () => {
     

    return (                   
        <div>
            <ListGroup as='ui'>
                 
                    {todosData.map(x=> <TodoItem key={x.id} item={x}></TodoItem>)}
                
            </ListGroup>
        </div>        
    )
}


export default App