
import { Container } from "react-bootstrap";
import NavbarMenu from "../components/Navbar.jsx";
import Jumbotron from "../components/Jumbotron.jsx";
import Body from "../components/Body.jsx";
export const Home = () => {

	return (
		<div className="text-center">
			<Jumbotron/>
			<Body/>
		</div>
	);
}; 