import React from 'react'
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from 'react-bootstrap';
import "./Sepet.scss"

function Sepet({ sepet, setSepet }) {

  const adetEksilt = (item) => {
    const removeFind = sepet.find(value => value.id === item.id);
    if (removeFind && removeFind.amount > 1) {
      removeFind.amount -= 1
      setSepet([...sepet.filter(value => value.id !== item.id), {
        id: item.id,
        title: item.title,
        image: item.image,
        price: item.price,
        amount: removeFind.amount
      }])
    } else {
      setSepet([...sepet.filter(value => value.id !== item.id)])
    }
  }

  const adetArttir = (item) => {
    const addFind = sepet.find(value => value.id === item.id);
    if (addFind) {
      addFind.amount += 1
      setSepet([...sepet.filter(value => value.id !== item.id), {
        id: item.id,
        title: item.title,
        image: item.image,
        price: item.price,
        amount: addFind.amount
      }])
    }
  }





  return (
    <>
      <Container fluid="md">
        <Row>
          <h1 className='text-center mt-5 text-danger mb-3'>Sepetim</h1>
          {sepet.map(urun => (
            <Col md={3} >
              <Card className='border-2 border-warning-subtle shadow bg-light'>
                <Card.Header className='shadow bg-white sepet-card-header'>
                  <img className='myImg' src={urun.image} alt="" />
                </Card.Header>
                <Card.Body>
                  <Card.Title className='text-center fw-bold'>{urun.title}</Card.Title>
                </Card.Body>
                <Card.Footer className='shadow p-3 '>
                  <Card.Text className='text-center fw-bold fiyatlar'>{((urun.price) * 11 * (urun.amount)).toFixed(2)}₺</Card.Text>
                  <Card.Text className='text-center fw-medium'>{"x" + (urun.amount)}</Card.Text>
                  <div className="adet rounded-pill border border-2 border-warning-subtle shadow p-1 d-flex justify-content-center align-items-center ">
                    <button className='btn btn-outline-warning shadow mx-1' onClick={() => adetEksilt(urun)}>-</button>
                    <button className='btn btn-outline-warning shadow mx-1' id={`adetArttirBtnId-${urun.id}`} onClick={() => adetArttir(urun)}>+</button>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Sepet