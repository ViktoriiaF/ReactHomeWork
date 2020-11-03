import React from 'react';
import ReactDOM from 'react-dom';


const JokeInfo = (props) => {
    const {question, punchLine} = props.info
    return (
        <div className="jokeBox">
            <div>{question}</div>
            <div>{punchLine}</div>
         </div>
    )
}

export default JokeInfo