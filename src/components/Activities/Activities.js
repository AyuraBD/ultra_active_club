import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import './../../fakeData/players';
import './Activities.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Activities = () => {
    const [players, setPlayers] = useState([]);
    const [time, setTime] = useState([]);
    useEffect(() =>{
        fetch('players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])

    const addBreakTime = (player) =>{
        const newTime = parseInt(time + player.duration);
        setTime(newTime);
    }
    const ten = 10;
    const twenty = 20;
    const thirty = 30;
    const fourty = 40;

    const one = () =>{
        return 10;
    }
    const notify = () => toast("Practice Complited!");

    return(
        <div className="players-container">
            <div className="players">
                {
                    players.map(player => <Player
                        key={player.id}
                        player={player}
                        addBreakTime={addBreakTime}
                    ></Player>)
                }
            </div>
            <div className='player-activities'>
                <div className="name">
                    <h2>Abdullah Mamun</h2>
                    <p>Chattogram, Bangladesh</p>
                </div>
                
                <div className='add-break'>
                    <h3>Add a break</h3>
                    <div className='addBreak'>
                        <span>{ten}</span>
                        <span>{twenty}</span>
                        <span>{thirty}</span>
                        <span>{fourty}</span>
                    </div>
                    
                </div>
                <div className="practice-details">
                    <h4>Practice details</h4>
                    <div className="practice-info">
                        <h5>Practice time</h5>
                        <p><span>{time}</span> Minutes</p>
                    </div>
                    <div className="break-time">
                        <h5>Break time</h5>
                        <p><span>20</span> Minutes</p>
                    </div>
                </div>
                <div>
                    <button onClick={notify} className='completed-btn'>Activity Complited</button>
                    <ToastContainer></ToastContainer>
                </div>
                    
            </div>
        </div>
    )
};

export default Activities;