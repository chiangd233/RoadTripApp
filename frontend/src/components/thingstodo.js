import {NavLink} from 'react-router-dom'
import React from 'react';


const Thingstodo = (props) => {
	const { thingstodo } = props;
	if (!thingstodo || thingstodo.length === 0) return <div><h1> Explore Things to Do</h1> <p>Can not find any thing to do</p> </div>;
	return (
        <div class = 'container'>
            <h1> Explore Things to Do</h1>
            <div>
                <p> {thingstodo.map((e) => {
                    return(
                        <div>
                            <NavLink to = '/{e.id}'> {e.name} </NavLink>
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

export default Thingstodo