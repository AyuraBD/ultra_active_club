import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import './../../fakeData/players';
import './Activities.css';

const Activities = () => {
    const [players, setPlayers] = useState([]);
    useEffect(() =>{
        fetch('players.json')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setPlayers(data)})
    },[])
    return(
        <div className="players-container">
            <div className="players">
                {
                    players.map(player => <Player
                        key={player.id}
                        player={player}
                    ></Player>)
                }
            </div>
            <div className='player-activities'>
                <div className="name">
                    <h2>Abdullah Al Mamun</h2>
                    <p>Chattogram, Bangladesh</p>
                </div>
                <div className='addBreak'>
                    <span>10</span>
                    <span>20</span>
                    <span>30</span>
                    <span>40</span>
                </div>
                <div className="practice-details">
                    <h4>Practice details</h4>
                    <div className="practice-info">
                        <h5>Practice time</h5>
                        <p><span>200</span> Minutes</p>
                    </div>
                    <div className="break-time">
                        <h5>Break time</h5>
                        <p><span>200</span> Minutes</p>
                    </div>
                </div>
                    
            </div>
        </div>
    )
};

export default Activities;