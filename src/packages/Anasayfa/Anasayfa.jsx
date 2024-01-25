import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from 'react-bootstrap';
import "./AnasayfaStyle.scss"




function Anasayfa({ sepet, setSepet }) {
    const [urunler, setUrunler] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setUrunler(data))
            .catch(error => console.error('Veri çekme hatası:', error));
    }, []);

    const SepeteEkle = (item) => {
        
        urunler.forEach(element => {
            const myBtn = document.querySelector(`#BtnId-${element.id}`)
            

            myBtn.addEventListener('click', () => {

                myBtn.style.borderRadius="10rem"
                myBtn.style.fontSize="1.1rem"
                myBtn.style.background="white"
                myBtn.style.opacity=".2"
                myBtn.style.color="blue"
                
                
                setTimeout(() => {
                    myBtn.style.borderRadius=""
                    myBtn.style.fontSize=""
                    myBtn.style.background=""
                    myBtn.style.opacity=""
                    myBtn.style.color=""
                    
                }, 100);
            })
        });

        const addFind = sepet.find(value => value.id === item.id);
        if (addFind) {
            addFind.amount += 1
            setSepet([...sepet.filter(value => value.id !== item.id),{
                id: item.id,
                title: item.title,
                image: item.image,
                price: item.price,
                amount: addFind.amount
            }])
        } else {
            setSepet([...sepet,{
                id: item.id,
                title: item.title,
                image: item.image,
                price: item.price,
                amount: 1
            }])
        }


    }
    

    useEffect(() => {
        console.log('Sepet güncellendi:', sepet);
    }, [sepet]);

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
                                    <button id={`BtnId-${urun.id}`} className="btn btn-outline-primary mt-2 shadow tiklamaAnimasyonu" onClick={() => SepeteEkle(urun)}>Sepete Ekle</button>

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
