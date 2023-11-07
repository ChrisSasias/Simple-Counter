//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application

let seconds = 0;

setInterval(() => {

    const one = Math.floor((seconds)%10)

    const two = Math.floor((seconds/10)%10)
    
    const tree = Math.floor((seconds/100)%10)
    
    const four = Math.floor((seconds/1000)%10)
    
    const five = Math.floor((seconds/10000)%10)

    const six = Math.floor((seconds/100000)%10)

    seconds +=1;
    ReactDOM.render(<Home digitOne={one} digitTwo={two} digitTree={tree} digitFour={four} digitFive={five} digitSix={six}/>, document.querySelector("#app"));
}, 1000);

