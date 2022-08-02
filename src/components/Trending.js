import { Container, Row, Col, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import duneImage from '../assets/images/trending/dune.jpg'
import everythingImage from '../assets/images/trending/everything.jpg'
import infiniteImage from '../assets/images/trending/infinite.jpg'
import jokerImage from '../assets/images/trending/joker.jpg'
import lightyearImage from '../assets/images/trending/lightyear.jpg'
import morbiusImage from '../assets/images/trending/morbius.jpg'

 const Trending = () => {
    return (
        <div>
            <Container>
                <br /> <br />
                <h1 className='text-white'>Trending Movies</h1>
                <br />
                <Row>
                    <Col md={4} className='movieWrapper'>
                        <Card className="movieCard">
                            <Image src={duneImage} alt="Dune Movies" className='images' />
                            <div className='bg-dark'> 
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>Dune</Card.Title>
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
                            <Image src={everythingImage} alt="Everything Movies" className='images' />
                            <div className='bg-dark'> 
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>Everything Everywhere All at Once</Card.Title>
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
                            <Image src={infiniteImage} alt="Infinite Movies" className='images' />
                            <div className='bg-dark'> 
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>Infinite Storm</Card.Title>
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
                            <Image src={jokerImage} alt="Joker Movies" className='images' />
                            <div className='bg-dark'> 
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>Joker</Card.Title>
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
                            <Image src={lightyearImage} alt="Light Year Movies" className='images' />
                            <div className='bg-dark'> 
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>Light Year</Card.Title>
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
                            <Image src={morbiusImage} alt="Morbius Movies" className='images' />
                            <div className='bg-dark'> 
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>Morbius</Card.Title>
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

export default Trending