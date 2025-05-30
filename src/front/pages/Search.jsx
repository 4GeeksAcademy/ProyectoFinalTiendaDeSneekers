import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ProductCard from "../components/productCard";

export default function Search() {
    const [searchItem, setSearchItem] = useState(null);
    const { modelo } = useParams();

    useEffect(() => {
        if (modelo) {
            const res = fetch(`${import.meta.env.VITE_BACKEND_URL}modelo/${modelo}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            res.then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    setSearchItem(null);
                    throw new Error('Error al buscar el modelo');
                }
            }).then(data => {
                setSearchItem(data)
            }).catch(error => {
                console.error('Error:', error);
            });
        }
    }, [modelo]);
    return (<>
        <Container className="my-5">
            <h2 className="mb-4">Nuestra Colección de Sneakers</h2>
            <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                {searchItem ? searchItem.map((product) => (
                    <Col key={product.id}>
                        <ProductCard product={product} />
                    </Col>
                ))
                    : <p>No se encontraron resultados para "{modelo}"</p>}
            </Row>
        </Container>
    </>)
}