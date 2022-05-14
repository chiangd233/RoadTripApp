import React, { useState } from "react";
import axios from "axios"

const CreateThingsTodo = () => {
    const initialState = {
        id: null,
        name: "",
        city: "",
        state: "",
        category: "",
        description: "",
    };
    const[thingsTodo, setThingsTodo] = useState(initialState);
    const[submitted, setSubmitted] = useState(false);
    const handleThingsTodoChange = (e) => {
        const {name, value} = e.target;
        setThingsTodo({...thingsTodo, [name]: value});
    };
    const submitThingsTodo = () => {
        let data = {
            name: thingsTodo.name,
            city: thingsTodo.city,
            state: thingsTodo.state,
            category: thingsTodo.category,
            description: thingsTodo.description,
        };
        const baseURL = 'http://localhost:8000/api';
        axios.post(`${baseURL}/thingstodo/create`, JSON.parse(data.thingstodo), {
                headers: {},
            })
            .then((response) => {
                setThingsTodo({
                    id: response.data.id,
                    name: response.data.name,
                    city: response.data.city,
                    state: response.data.state,
                    category: response.data.category,
                    description: response.data.description,
                });
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
                    <input
                    type="text"
                    className="form-control"
                    id="state"
                    required
                    value={thingsTodo.state}
                    onChange={handleThingsTodoChange}
                    name="state"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Category">Category</label>
                    <input
                    type="text"
                    className="form-control"
                    id="category"
                    required
                    value={thingsTodo.category}
                    onChange={handleThingsTodoChange}
                    name="category"
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