
import { Container } from "react-bootstrap";
import Navbar from "../components/Navbar.jsx";
import Jumbotron from "../components/Jumbotron.jsx";
import Body from "../components/Body.jsx";
import Footer from "../components/Footer.jsx"

export const Home = () => {

	return (
		<div className="text-center">

			<Jumbotron />
			<Body />
		</div>
	);
}; 