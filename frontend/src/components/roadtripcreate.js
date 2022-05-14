import React, { useState, useEffect } from "react";
import {NavLink, useParams} from 'react-router-dom'
import axios from "../axios"

const CreateRoadTrip = () => {
    const initialState = {
        id: null,
        name: "",
        description: "",
        time: "",
    }
}