import React, { useState, useEffect } from "react";
import axiosInstance from './axios.js';
import get from './axiosconfig.js';
import RoadTrip from './components/roadtrip'
import LoadingComponent from './components/loading'

function App() {
  const Loading = LoadingComponent(RoadTrip);
  const [appState, setAppState] = useState ({
    loading: false,
    roadtrip: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = 'http://127.0.0.1:8000/api/';
    fetch(apiUrl)
      .then((data) => data.json())
      .then((roadtrip) => {
        setAppState({ loading: false, roadtrip: roadtrip });
      });
  }, [setAppState]);
  return (
    <div>
      <Loading isloading = {appState.loading} roadtrip = {appState.roadtrip} />
    </div>
  )
}

export default App