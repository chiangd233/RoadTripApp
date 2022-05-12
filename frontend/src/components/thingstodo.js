import React, { useState, useEffect } from "react";
import {NavLink} from 'react-router-dom'

function Thingstodo () {
    const [thingsTodo, setThingsTodo] = useState ([]);
    
    useEffect(() => {
        const apiUrl = 'http://127.0.0.1:8000/api/thingstodo';
        fetch(apiUrl)
            .then((data) => data.json())
            .then((payload) => {
                setThingsTodo(payload);
            });
    }, []);
    
    console.log(thingsTodo)
    
	if (!thingsTodo || thingsTodo.length === 0) return <div class = 'container'><h1> Explore Things to Do</h1> <p>Can not find any thing to do. Add Something!</p> </div>;
    
    return (
        <div class = 'container'>
            <h1> Explore Things to Do</h1>
            <div>
                <p> {thingsTodo.map((e) => {
                    return(
                        <div>
                            <NavLink to = {`/${e.id}`}> {e.name} </NavLink>
                            <p> {e.city}, {e.state}</p>
                            <p> Estimated time: {e.time} hours</p>
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