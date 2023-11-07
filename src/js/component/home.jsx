import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import propTypes from "prop-types";

//create your first component
const Home = (props) => {
	return (
		<div className="text-center container contador d-flex">
			<div className="number">
				<i className="far fa-clock"></i>
			</div>
			<div className="number">
				{props.digitSix}
			</div>
			<div className="number">
				{props.digitFive}
			</div>
			<div className="number">
				{props.digitFour}
			</div>
			<div className="number">
				{props.digitTre}
			</div>
			<div className="number">
				{props.digitTwo}
			</div>
			<div className="number">
				{props.digitOne}
			</div>
		</div>
	);
};

export default Home;
