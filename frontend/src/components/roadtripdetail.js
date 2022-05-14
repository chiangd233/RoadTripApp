import React, { useState, useEffect } from "react";
import {NavLink, useParams} from 'react-router-dom'
import axios from "../axios"

const deleteRoadTrip = (id) => {
    console.log("deleting...")
    axios.delete(`http://127.0.0.1:8000/api/${id}`).then(() => console.log("delete successful"));
};

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
    
    return (
        <div class = 'container'>
            <h1> Explore Things to Do</h1>
            <div>
                <div>
                    <p> {detail.name} </p>
                    <p> Estimated Travel Time: {detail.time} </p>
                    <p> {detail.description} </p>
                    <p> {detail.thingstodo}</p>
                    <ul>
                        { detail.thingstodo?.map((e) => {
                            return(
                                <li>{e}</li>
                            ) 
                        })
                        }
                    </ul>
                    
                    <NavLink to="edit"><button>Edit</button></NavLink>
                    <button onClick={deleteRoadTrip(id)}>Delete</button>
                </div>
            </div>
        </div>
	);
};



export default RoadTripDetail