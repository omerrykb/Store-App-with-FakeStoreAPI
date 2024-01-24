import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from 'react-bootstrap';
import "./AnasayfaStyle.scss"




function Anasayfa() {
    const [urunler, setUrunler] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setUrunler(data))
            .catch(error => console.error('Veri çekme hatası:', error));
    }, []);

    const [Sepet, setSepet] = useState([])
    const SepeteEkle = (tiklananUrun) => {
        setSepet((oncekiSepet) => [...oncekiSepet, tiklananUrun]);
      };
    useEffect(() => {
        console.log('Sepet güncellendi:', Sepet);
    }, [Sepet]);

    return (
        <div>
            <Container fluid='md' className=''>
                <Row>
                    {urunler.map(urun => (
                        <Col md="3" className='mt-5'>
                            <Card className='border-2 border-primary-subtle shadow bg-light'>
                                <Card.Header className='shadow bg-white'><Link to={`products/${urun.id}`} className='text-decoration-none text-reset'><img src={urun.image} className='justify-self-center' /></Link></Card.Header>
                                <Card.Body>
                                    <Card.Title className='fw-semibold'>{urun.title}</Card.Title>
                                    <Card.Text className='description'>{urun.description}</Card.Text>
                                </Card.Body>
                                <Card.Footer className='d-flex justify-content-between flex-column shadow'>
                                    <Card.Text id='fiyat' className='fw-bold text-center'>{((urun.price) * 11).toFixed(2)} ₺</Card.Text>
                                    <Link to={`products/${urun.id}`} className='text-decoration-none text-reset'><button className="btn btn-outline-success mt-2 shadow">İncele</button></Link>
                                    <button className="btn btn-outline-secondary mt-2 shadow" id={`SepetUrunId${urun.id}`} onClick={() => SepeteEkle(urun)}>Sepete Ekle</button>

                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Anasayfa;
