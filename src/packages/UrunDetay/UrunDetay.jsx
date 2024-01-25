import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './UrunDetay.scss'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { TbShoppingCartCode } from "react-icons/tb";
import { GiReturnArrow } from "react-icons/gi";

function UrunDetay({ sepet, setSepet }) {
    const { UrunId } = useParams()
    const [Urun, setUrun] = useState([])
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${UrunId}`)
            .then(res => res.json())
            .then(data => setUrun(data))
        console.log(Urun)

    }, [UrunId])

    const SepeteEkle = (item) => {
        setSepet([...sepet, item])

        const SepeteEkleBtn = document.querySelector('.tiklamaAnimasyonu')

        SepeteEkleBtn.style.borderRadius = "5rem"
        SepeteEkleBtn.style.fontSize = "1.2rem"
        SepeteEkleBtn.style.background = "white"
        SepeteEkleBtn.style.opacity = ".2"
        SepeteEkleBtn.style.color = "blue"


        setTimeout(() => {
            SepeteEkleBtn.style.borderRadius = ""
            SepeteEkleBtn.style.fontSize = ""
            SepeteEkleBtn.style.background = ""
            SepeteEkleBtn.style.opacity = ""
            SepeteEkleBtn.style.color = "";

        }, 100);


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
                            <button className="btn btn-outline-primary mb-2 shadow fw-semibold tiklamaAnimasyonu" onClick={() => SepeteEkle(Urun)}>Sepete Ekle<TbShoppingCartCode className='Icon-1 text-primary' /></button>
                            <Link to="/" className='text-decoration-none text-reset '><button className="btn btn-outline-danger mt-2 shadow fw-semibold">Geri Dön <GiReturnArrow className='Icon-2' /></button></Link>
                        </Card.Footer>
                    </Col>

                </Row>
            </Container>


        </>
    )
}

export default UrunDetay