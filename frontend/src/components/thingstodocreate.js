import React, { useState } from "react";
import axios from "axios"

const STATES = [
    ['AL', 'Alabama'],
    ['AK', 'Alaska'],
    ['AZ', 'Arizona'],
    ['AR', 'Arkansas'],
    ['CA', 'California'],
    ['CO', 'Colorado'],
    ['CT', 'Connecticut'],
    ['DE', 'Delaware'],
    ['DC', 'District of Columbia'],
    ['FL', 'Florida'],
    ['GA', 'Georgia'],
    ['HI', 'Hawaii'],
    ['ID', 'Idaho'],
    ['IL', 'Illinois'],
    ['IN', 'Indiana'],
    ['IA', 'Iowa'],
    ['KS', 'Kansas'],
    ['KY', 'Kentucky'],
    ['LA', 'Louisiana'],
    ['ME', 'Maine'],
    ['MD', 'Maryland'],
    ['MA', 'Massachusetts'],
    ['MI', 'Michigan'],
    ['MN', 'Minnesota'],
    ['MS', 'Mississippi'],
    ['MO', 'Missouri'],
    ['MT', 'Montana'],
    ['NE', 'Nebraska'],
    ['NV', 'Nevada'],
    ['NH', 'New Hampshire'],
    ['NJ', 'New Jersey'],
    ['NM', 'New Mexico'],
    ['NY', 'New York'],
    ['NC', 'North Carolina'],
    ['ND', 'North Dakota'],
    ['OH', 'Ohio'],
    ['OK', 'Oklahoma'],
    ['OR', 'Oregon'],
    ['PA', 'Pennsylvania'],
    ['RI', 'Rhode Island'],
    ['SC', 'South Carolina'],
    ['SD', 'South Dakota'],
    ['TN', 'Tennessee'],
    ['TX', 'Texas'],
    ['UT', 'Utah'],
    ['VT', 'Vermont'],
    ['VA', 'Virginia'],
    ['WA', 'Washington'],
    ['WV', 'West Virginia'],
    ['WI', 'Wisconsin'],
    ['WY', 'Wyoming'],
]

const CreateThingsTodo = () => {
    const initialState = {
        name: "",
        city: "",
        state: "",
        category: "Nightlife",
        time: 1,
        description: "No Description yet",
    };
    const[thingsTodo, setThingsTodo] = useState(initialState);
    const[submitted, setSubmitted] = useState(false);
    const handleThingsTodoChange = (e) => {
        const {name, value} = e.target;
        setThingsTodo({...thingsTodo, [name]: value});
    };
    const submitThingsTodo = () => {
        // let data = {
        //     name: thingsTodo.name,
        //     city: thingsTodo.city,
        //     state: thingsTodo.state,
        //     category: thingsTodo.category,
        //     time: thingsTodo.time,
        //     description: thingsTodo.description,
        // };
        const baseURL = 'http://localhost:8000/api';

        
        console.log(thingsTodo);


        axios.post(`${baseURL}/thingstodo/create`, thingsTodo, {
                headers: {},
            })
            .then((response) => {
                // setThingsTodo({
                //     name: response.data.name,
                //     city: response.data.city,
                //     state: response.data.state,
                //     category: response.data.category,
                //     time: response.data.category,
                //     description: response.data.description,
                // });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch((e) => {
                console.error(e);
            });

    };
    const newThingsTodo = () => {
        setThingsTodo(initialState);
        setSubmitted(false);
    };
    return (
        <div className="submit-form">
          {submitted ? (
            <div>
              <div
                className="alert alert-success alert-dismissible fade show"
                role="alert"
              >
                Thing to do Added!
                <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <button className="btn btn-success" onClick={newThingsTodo}>
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
                        value={thingsTodo.name}
                        onChange={handleThingsTodoChange}
                        name="name"
                        />
                </div>
                <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input
                        type="text"
                        className="form-control"
                        id="city"
                        required
                        value={thingsTodo.city}
                        onChange={handleThingsTodoChange}
                        name="city"
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="state">State</label>
                    <select
                    value={thingsTodo.state}
                    onChange={handleThingsTodoChange}
                    name="state"
                    >
                        {   
                            STATES.map((state) => {
                                return (<option value={state[0]}> {`${state[1]}`} </option>);
                            })
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="Category">Category</label>
                    <select
                    value={thingsTodo.category}
                    onChange={handleThingsTodoChange}
                    name="category"
                    >
                      <option value = 'Nightlife'>Nightlife</option>
                      <option value = 'Parks'>Parks</option>
                      <option value = 'Famous Sites'>Famous Sites</option>
                      <option value = 'Museums'>Museums</option>
                    </select>
                </div>
                <div className="form-group">
                  <label htmlFor="time">Time</label>
                  <input
                    type="number"
                    className="form-control"
                    id="time"
                    required
                    value={thingsTodo.time}
                    onChange={handleThingsTodoChange}
                    name="time"
                />
              </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                    type="text"
                    className="form-control"
                    id="description"
                    required
                    value={thingsTodo.description}
                    onChange={handleThingsTodoChange}
                    name="description"
                    />
              </div>
                <button onClick={submitThingsTodo}>
                    Submit
                </button>
            </div>
          )}
        </div>
    );
};

export default CreateThingsTodo;

