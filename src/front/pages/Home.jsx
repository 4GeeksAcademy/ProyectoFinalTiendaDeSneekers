
import { Container } from "react-bootstrap";
import NavbarMenu from "../components/Navbar.jsx";

export const Home = () => {


	const getBackend = async () => {
		const url = import.meta.env.VITE_BACKEND_URL
		try {
			const urlbase = import.meta.env.VITE_BACKEND_URL
			const response = await fetch(url + "api/hello")
			if (!response.ok) {
				throw new Error("No se puede ejecutar el fetch")
			}
			const data = await response.json();
			console.log(data)
			return data
		} catch (error) {
			console.log("Error en el backend")

		}
	}




	return (
		<Container className="d-flex flex-column align-items-center justify-content-center vh-100">
			<h1>BAMBAS</h1>
			<div>
				<button
					className="btn btn-primary"
					onClick={() => getBackend()}>
					LLamar al backend
				</button>
			</div>
		</Container>
	);
}; 