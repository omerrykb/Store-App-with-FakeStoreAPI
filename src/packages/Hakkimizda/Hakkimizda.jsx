import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import "./Hakkimizda.scss"

function Hakkimizda() {
  return (
    <>
      <Container fluid="md">
        <Row className=''>
          <Col className=' description-col'>
            <div>
              <p className='fw-semibold'>This website has been created entirely for educational purposes and all products are taken from "FakeStoreAPI".</p>

              <h4 className='fw-bolder'>
                Creator,
              </h4>
              <h2 className='fw-bold'>
                Ömer Yüksekbağ

              </h2>
            </div>
          </Col>
          <Col className=' text-end description-col description-col-2 '>
            <div>
              <p className='fw-semibold'>Bu web sitesi tamamen eğitim amaçlı oluşturulmuş olup, ürünlerin tamamı FakeStoreAPI'den alınmıştır.</p>

              <h4 className='fw-bolder'>
                Oluşturan,
              </h4>
              <h2 className='fw-bold'>
                Ömer Yüksekbağ

              </h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className='p-5 GithubCol mb-5 shadow'>
            <div className="ContactDiv shadow">
              <h3 className='text-center fw-bold mb-4 text-primary'>LinkedIn</h3>
              <a href="https://tr.linkedin.com/in/%C3%B6mer-y%C3%BCksekba%C4%9F-8841572a9" target='_blank' className='text-decoration-none text-primary'><FaLinkedin className='Icon-1' /></a>
            </div>
            <div className="ContactDiv shadow">
              <h3 className='text-center fw-bold mb-4'>GitHub</h3>
              <a href="https://github.com/omerrykb" target='_blank' className='text-decoration-none text-reset'><FaGithub className='Icon-2' /></a>
            </div>
            <div className="ContactDiv shadow">
              <h3 className='text-center fw-bold mb-4 text-danger'>E-Mail</h3>
              <a href="mailto:omerryuksekbag@gmail.com" target='_blank' className='text-decoration-none text-danger'><IoMail className='Icon-3' /></a>
            </div>
          </Col>

        </Row>
      </Container>
    </>
  )
}

export default Hakkimizda