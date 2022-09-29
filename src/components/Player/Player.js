import React from 'react';
import './Player.css';

const Player = (props) => {
	const { id, pic, activity, quote, duration} = props.player;
	const {addBreakTime} = props;
	return (
		<div className='player'>
			<div className="img">
				<img src={pic} alt="" />

				<div className="player-info">
					<h3>{activity}</h3>
					<p>{quote}</p>
					<p><b>Practice Time:</b> {duration} Minutes</p>
				</div>
				<button onClick={() =>addBreakTime(props.player)}>Add to list</button>
			</div>
		</div>
	);
};

export default Player;