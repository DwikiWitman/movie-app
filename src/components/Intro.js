import { Button, Col, Container, Row } from 'react-bootstrap';

const Intro = () => {
    return (
        <div style={{height: "70%"}} className='d-flex justify-content-center align-items-center'>
            <Container className='d-flex text-white justify-content-center align-items-start'>
                <Row>
                    <Col>
                        <div className='title'>Watch Free.</div>
                        <div className='title'>Without Ticket.</div>
                        <div className='text-center'>
                            <Button variant='dark' className='btn-lg mt-2'>View Here</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro;