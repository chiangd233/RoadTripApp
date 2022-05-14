import React, { useState, useEffect } from "react";
import {NavLink, useParams} from 'react-router-dom'
import axios from "../axios"

const onDelete = (id) => {
    axios.delete(`/${id}`)
};

function RoadTripDelete () {
    const { id } = useParams();
    const [detail, setDetail] = useState ({});
    
    useEffect(() => {
        const apiUrl = `http://127.0.0.1:8000/api/${id}/delete`;
        fetch(apiUrl)
            .then((data) => data.json())
            .then((payload) => {
                setDetail(payload);
            });
    }, [id]);
    
    return (
        <div class = 'container'>
            <h1> Are you sure you want to delete this road trip: {detail.name}</h1>
            <div>
                <div>   
                    <NavLink to="/">
                            <button> Delete </button>
                    </NavLink>
                    <NavLink to={`/${id}`}><button>Cancel</button></NavLink>
                </div>
            </div>
        </div>
	);
};



export default RoadTripDelete