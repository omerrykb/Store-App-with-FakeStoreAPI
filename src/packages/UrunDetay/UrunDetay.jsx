import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './UrunDetay.scss'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { TbShoppingCartCode } from "react-icons/tb";
import { GiReturnArrow } from "react-icons/gi";

function UrunDetay() {
    const { UrunId } = useParams()
    const [Urun, setUrun] = useState([])
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${UrunId}`)
            .then(res => res.json())
            .then(data => setUrun(data))
        console.log(Urun)

    }, [UrunId])

    return (
        <>

            <Container fluid='md' className='mt-2'>
                <Row className='shadow'>

                    <Col md={4} className=''>
                        <Card.Header className='shadow bg-light'>
                            <img src={Urun.image} alt="" />
                        </Card.Header>
                    </Col>
                    <Col md={4} className=''>
                        <Card.Body>
                            <Card.Title className='fw-bold mb-2 text-center'>{Urun.title}</Card.Title>
                            <Card.Text className='mt-2 text-center'>{Urun.description}</Card.Text>
                            <Card.Text className=' fiyat fw-bold text-center'>{((Urun.price) * 11).toFixed(2)} ₺</Card.Text>
                        </Card.Body>
                    </Col>

                    <Col md={4} className=''>
                        <Card.Footer>
                            <button className="btn btn-outline-secondary mb-2 shadow fw-semibold">Sepete Ekle<TbShoppingCartCode className='Icon-1 text-primary' /></button>
                            <Link to="/" className='text-decoration-none text-reset '><button className="btn btn-outline-danger mt-2 shadow fw-semibold">Geri Dön <GiReturnArrow className='Icon-2'/></button></Link>
                        </Card.Footer>
                    </Col>

                </Row>
            </Container>


        </>
    )
}

export default UrunDetay