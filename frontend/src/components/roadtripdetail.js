import React, { useState, useEffect } from "react";
import {NavLink, useParams} from 'react-router-dom'

function RoadTripDetail () {
    const { id } = useParams();
    const [detail, setDetail] = useState ({});
    
    useEffect(() => {
        const apiUrl = `http://127.0.0.1:8000/api/${id}`;
        fetch(apiUrl)
            .then((data) => data.json())
            .then((payload) => {
                setDetail(payload);
            });
    }, [id]);

    console.log(detail);
    //paste here  v
    // {id: 1, name: 'New Jersey to Colorado', description: 'Road trip to New Jersey to Colorado', time: 28, thingstodo: Array(1), …}
    // created_at: "2022-05-10T22:52:16.326013Z"
    // description: "Road trip to New Jersey to Colorado"
    // id: 1
    // name: "New Jersey to Colorado"
    // thingstodo: [1]
    // time: 28
    // user: 1
    // [[Prototype]]: Object


    // ERROR
    //     roadtripdetail.js:38 Uncaught TypeError: Cannot read properties of undefined (reading 'map')
    //     at RoadTripDetail (roadtripdetail.js:38:1)
    //     at renderWithHooks (react-dom.development.js:16175:1)
    //     at mountIndeterminateComponent (react-dom.development.js:20913:1)
    //     at beginWork (react-dom.development.js:22416:1)
    //     at HTMLUnknownElement.callCallback (react-dom.development.js:4161:1)
    //     at Object.invokeGuardedCallbackDev (react-dom.development.js:4210:1)
    //     at invokeGuardedCallback (react-dom.development.js:4274:1)
    //     at beginWork$1 (react-dom.development.js:27405:1)
    //     at performUnitOfWork (react-dom.development.js:26513:1)
    //     at workLoopSync (react-dom.development.js:26422:1)

    
    return (
        <div class = 'container'>
            <h1> Explore Things to Do</h1>
            <div>
                <div>
                    <p> {detail.name} </p>
                    <p> Estimated Travel Time: {detail.time} </p>
                    <p> {detail.description} </p>
                    <p>{detail.thingstodo}</p>
                    <ul>
                        { detail.thingstodo?.map((e) => {
                            return(
                                <li>{e}</li>
                            ) 
                        })
                        }
                    </ul>
                    
                    <NavLink to="edit"><button>Edit</button></NavLink>
                    <NavLink to="delete"><button>Delete</button></NavLink>
                </div>
            </div>
        </div>
	);
};



export default RoadTripDetail