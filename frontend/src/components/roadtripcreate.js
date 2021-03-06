import React, { useState } from "react";
import axios from "axios"

const CreateRoadTrip = () => {
    const initialState = {
        id: null,
        name: "",
        description: "",
        time: "",
        thingstodo: [],
    };
    const[roadtrip, setRoadtrip] = useState(initialState);
    const[submitted, setSubmitted] = useState(false);
    const handleRoadtripChange = (e) => {
        const {name, value} = e.target;
        setRoadtrip({...roadtrip, [name]: value});
    };
    const submitRoadtrip = () => {
        let data = {
            name: roadtrip.name,
            description: roadtrip.description,
            time: roadtrip.time,
            thingstodo: roadtrip.thingstodo,
        };
        const baseURL = 'http://localhost:8000/api';
        axios.post(`${baseURL}/create`, JSON.parse(data.thingstodo), {
                headers: {},
            })
            .then((response) => {
                setRoadtrip({
                    id: response.data.id,
                    name: response.data.name,
                    description: response.data.description,
                    time: response.data.time,
                    thingstodo: response.data.thingstodo,
                });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch((e) => {
                console.error(e);
            });

    };
    const newRoadtrip = () => {
        setRoadtrip(initialState);
        setSubmitted(false);
    };
    return (
        <div class = "container">
          {submitted ? (
            <div>
              <div
                className="alert alert-success alert-dismissible fade show"
                role="alert"
              >
                RoadTripDetail Added!
                <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <button className="btn btn-success" onClick={newRoadtrip}>
                Add
              </button>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                  value={roadtrip.name}
                  onChange={handleRoadtripChange}
                  name="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  type="text"
                  className="form-control"
                  id="description"
                  required
                  value={roadtrip.description}
                  onChange={handleRoadtripChange}
                  name="description"
                />
              </div>
              <div className="form-group">
                <label htmlFor="time">Time</label>
                <input
                  type="number"
                  className="form-control"
                  id="time"
                  required
                  value={roadtrip.time}
                  onChange={handleRoadtripChange}
                  name="time"
                />
              </div>
              <div className="form-group">
                <label htmlFor="thingstodo">Things to Do</label>
                <select
                value = {roadtrip.thingstodo}
                  onChange={handleRoadtripChange}
                  name="thingstodo"
                >
                  {  
                    roadtrip.thingstodo.map((e) => {
                      return( <option value = {e.thingstodo}> {`${e.thingstodo}`} </option> )
                    })
                  }
                  </select>
              </div>
              <button onClick={submitRoadtrip}>
                Submit
              </button>
            </div>
          )}
        </div>
    );
};

export default CreateRoadTrip;