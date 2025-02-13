import React from "react";

//include images into your bundle
import Cards from "./cards.jsx";

//create your first component
const Home = ({ digito }) => {
	return (
		<div className="d-flex justify-content-center ">
			<div className="card mb-3 bg-dark m-1" style={{ width: "6rem" }}>
				<img src="https://th.bing.com/th/id/OIP.2GLVwxJr5C4dxwhkjsTC2gHaHa?rs=1&pid=ImgDetMain"
					style={{ height: "8rem" }}
				/>
			</div>
			<Cards
				numero={Math.floor(digito / 100000 % 10)}
			/>
			<Cards
				numero={Math.floor(digito / 10000 % 10)}
			/>
			<Cards
				numero={Math.floor(digito / 1000 % 10)}
			/>
			<Cards
				numero={Math.floor(digito / 100 % 10)}
			/>
			<Cards
				numero={Math.floor(digito / 10 % 10)}
			/>
			<Cards
				numero={digito % 10}
			/>

		</div>
	);
};

export default Home;