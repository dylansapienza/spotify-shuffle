import {React} from 'react'
import axios from "axios";
function Shuffle(props) {
    
    const access_token = new URLSearchParams(props.location.search).get("access_token");
  
    function getPlaylists(token){
        const access_token = token;
        axios
        .post("/api/shuffle", access_token, {
            headers: {
            "Content-Type": "application/json",
            },
        })
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
      <div className="App">
        <p>{access_token}</p>
        <button onClick={()=> getPlaylists(access_token)}>Click me</button>
      </div>
    );
  }
  export default Shuffle;
  