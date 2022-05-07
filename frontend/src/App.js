import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [roadtripList, setRoadtripList] = useState([])

  useEffect(() => {
    axios
    .get("api/roadtrip")
    .then((res) => {
      console.log(res.data)
      setRoadtripList(res.data)
    })
    .catch((err) => console.log(err))
  },[])

  return (
    <div>
      <div>
        <p>{roadtripList.map((e) => {
          return(
            <div>
              <p>Name: {e.name}</p>
              <p>Estimated Travel Time {e.time} hours</p>
              <p>Description: {e.description}</p>
              <p>Created by: {e.user}</p>
            </div>
          )
        })}
        </p>
      </div>
    </div>
  );
}

export default App; 
