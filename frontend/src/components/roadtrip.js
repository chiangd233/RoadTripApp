import {NavLink} from 'react-router-dom'
import React from 'react';



const RoadTrip = (props) => {
	const { roadtrip } = props;
	if (!roadtrip || roadtrip.length === 0) return <div class = 'container'><p>Can not find any planned road trips</p></div>;
	return (
        <div class = 'container'>
            <h1> Road Trips</h1>
            <div>
                <div>
                    <div class = 'outerdiv'> {roadtrip.map((e) => {
                        return(
                            <div class = 'div'>
                                <NavLink to = {`${e.id}`}> {e.name} </NavLink>
                                <p> Estimated Travel Time: {e.time} hours</p>
                                <p> {e.description} </p>
                            </div>
                        )
                        })}
                    </div> 
                </div>
            </div>
        </div>
	);
};

export default RoadTrip

