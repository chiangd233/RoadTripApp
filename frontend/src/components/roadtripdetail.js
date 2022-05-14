import React, { useState, useEffect } from "react";
import {NavLink, useParams} from 'react-router-dom'
import axiosInstance from '../axios.js';



function RoadTripDetail () {
    const { id } = useParams();
    const [detail, setDetail] = useState ({});
    
    const deleteRoadTrip = (id) => {
        axiosInstance.delete(`${id}`).then(() => console.log("delete successful"));
    };

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
                    <p>Things to do added to this road trip:</p>
                    <ul>
                        { detail.thingstodo?.map((e) => {
                            return(
                                <li>{e}</li>
                            ) 
                        })
                        }
                    </ul>
                    
                    <NavLink to="edit"><button>Edit</button></NavLink>
                    <NavLink to='/'><button onClick={() => deleteRoadTrip(id)}>Delete</button> </NavLink>
                </div>
            </div>
        </div>
	);
};



export default RoadTripDetail