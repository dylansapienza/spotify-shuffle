import {React, useState, useEffect} from 'react'
function Home() {

    const [apiResponse, setAPIResponse] = useState("no response")
  
    useEffect(()=>{
      fetch("http://localhost:8888/testAPI")
      .then(res => res.text())
      .then(res => setAPIResponse(res))
    })
  
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {apiResponse}
          </a>
        </header>
      </div>
    );
  }
  export default Home;
  