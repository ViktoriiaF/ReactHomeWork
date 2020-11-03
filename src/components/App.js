import React from 'react';
import ReactDOM from 'react-dom';
import {jokes} from '../jokes.js';
import JokeInfo from './JokeInfo';
import '../css/App.css'


const App = () => {
   
    let isWhite = true

    let styles = {
            width:'700px',
            height:'400px',
            backgroundImage: "url(" + "https://www.cbc.ca/kidscbc2/content/the_feed/_848/LMTY_jokes_header.jpg" + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            filter: 'opacity(50%)'
          
    }

    

    return (
        <main >
            <div style={styles}>
                
            </div>
            <div>
            <ul className="mainBox" >
                <li >
                   {jokes.map(x => <JokeInfo info={x}></JokeInfo>)}
                </li>
            </ul>
            </div>
        </main>
    )
}


export default App