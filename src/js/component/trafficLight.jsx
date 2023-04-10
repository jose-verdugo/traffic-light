import React, {useState} from "react";
import "../../styles/index.css"

const TrafficLight = () => {
	const [ligth, setLigth] = useState({
	  lightRed: false,
	  ligthYellow: false,
	  ligthGreen: false,
	});
  
	const lightRed = () => {
	  setLigth({
		lightRed: true,
		ligthYellow: false,
		ligthGreen: false,
	  });
	};
	const lightYellow = () => {
	  setLigth({
		lightRed: false,
		ligthYellow: true,
		ligthGreen: false,
	  });
	};
	const lightGreen = () => {
	  setLigth({
		lightRed: false,
		ligthYellow: false,
		ligthGreen: true,
	  });
	};
  
	return (
	  <div className="text-center">
		<div className="Traffic-top"></div>
		<div className="Traffic-container">
		  <div
			onClick={lightRed}
			className={`Traffic-red ${ligth.lightRed ? "light" : ""}`}></div>
		  <div
			onClick={lightYellow}
			className={`Traffic-yellow ${
			  ligth.ligthYellow ? "light" : ""
			}`}></div>
		  <div
			onClick={lightGreen}
			className={`Traffic-green ${ligth.ligthGreen ? "light" : ""}`}></div>
		</div>
	  </div>
	);
  };
  
  export default TrafficLight;
  




