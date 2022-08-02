import { Container, Row, Col, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import antmanImage from '../assets/images/superhero/antman.jpg'
import avengerImage from '../assets/images/superhero/avenger.jpg'
import batmanImage from '../assets/images/superhero/batman.jpg'
import robinhoodImage from '../assets/images/superhero/robinhood.jpg'
import spidermancoverImage from '../assets/images/superhero/spiderman-cover.jpg'
import supermanImage from '../assets/images/superhero/superman.jpg'

 const SuperHero = () => {
    return (
        <div>
            <Container>
                <br /> <br />
                <h1 className='text-white'>Trending Movies</h1>
                <br />
                <Row>
                    <Col md={4} className='movieWrapper'>
                        <Card className="movieCard">
                            <Image src={antmanImage} alt="Antman Movies" className='images' />
                            <div className='bg-dark'> 
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>Antman</Card.Title>
                                    <Card.Text className='text-left'>
                                    Dune is a American epic science fiction film directed by Denis Villeneuve from a screenplay by Villeneuve, Jon Spaihts, and Eric Roth.
                                    </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card> 
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="movieCard">
                            <Image src={avengerImage} alt="Avenger Movies" className='images' />
                            <div className='bg-dark'> 
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>Avenger</Card.Title>
                                    <Card.Text className='text-left'>
                                    Everything Everywhere All at Once is a 2022 American absurdist comedy-drama film written and directed by Daniel Kwan and Daniel Scheinert.
                                    </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card> 
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="movieCard">
                            <Image src={batmanImage} alt="Batman Movies" className='images' />
                            <div className='bg-dark'> 
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>Batman</Card.Title>
                                    <Card.Text className='text-left'>
                                    American drama adventure film directed by Małgorzata Szumowska, co-directed by Michał Englert, and with a screenplay by Josh.
                                    </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card> 
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="movieCard">
                            <Image src={robinhoodImage} alt="Robinhood Movies" className='images' />
                            <div className='bg-dark'> 
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>Robinhood</Card.Title>
                                    <Card.Text className='text-left'>
                                    This is a wider card with natural lead-in to additional.
                                    </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card> 
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="movieCard">
                            <Image src={spidermancoverImage} alt="Spiderman Cover Movies" className='images' />
                            <div className='bg-dark'> 
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>Spiderman</Card.Title>
                                    <Card.Text className='text-left'>
                                    This is a wider card with natural lead-in to additional.
                                    </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card> 
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="movieCard">
                            <Image src={supermanImage} alt="Superman Movies" className='images' />
                            <div className='bg-dark'> 
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>Superman</Card.Title>
                                    <Card.Text className='text-left'>
                                    This is a wider card with natural lead-in to additional.
                                    </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card> 
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
 }

export default SuperHero