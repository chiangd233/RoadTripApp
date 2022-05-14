import React, { useState, useEffect } from "react";
import {NavLink} from 'react-router-dom'

function ThingsTodo () {
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
            <NavLink to="create"><button>Add Something Else to do</button></NavLink>
            <div>
                 {thingsTodo.map((e) => {
                    return(
                        <div>
                            <NavLink to = {`${e.id}`}> {e.name} </NavLink>
                            <p>Category: {e.category} </p>
                            <p> {e.city}, {e.state}</p>
                            <p> Estimated time: {e.time} hours</p>
                        </div>
                    ) 
                    })}
            </div>
        </div>
	);
};



export default ThingsTodo