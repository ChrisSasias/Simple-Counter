import React from "react";

const Home = (props) => {
  return (
    <div className="container-fluid contador text-center d-flex">
      <div className="number col-md-2">
        <i className="far fa-clock"></i>
      </div>
      <div className="number col-2 col-sm-1">
        {props.digitSix}
      </div>
      <div className="number col-2 col-sm-1">
        {props.digitFive}
      </div>
      <div className="number col-2 col-sm-1">
        {props.digitFour}
      </div>
      <div className="number col-2 col-sm-1">
        {props.digitTree}
      </div>
      <div className="number col-2 col-sm-1">
        {props.digitTwo}
      </div>
      <div className="number col-2 col-sm-1">
        {props.digitOne}
      </div>
    </div>
  );
};

export default Home;


