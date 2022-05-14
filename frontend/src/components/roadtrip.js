import {NavLink} from 'react-router-dom'
import React from 'react';



const RoadTrip = (props) => {
	const { roadtrip } = props;
	if (!roadtrip || roadtrip.length === 0) return <p>Can not find any planned road trips</p>;
	return (
        <div class = 'container'>
            <h1> Road Trips</h1>
            <div>
                <p> {roadtrip.map((e) => {
                    return(
                        <div>
                            <NavLink to = {`${e.id}`}> {e.name} </NavLink>
                            <p> Estimated Travel Time: {e.time} hours</p>
                            <p> {e.description} </p>
                        </div>
                    )
                    })}
                </p> 
            </div>
        </div>
	);
};

export default RoadTrip

