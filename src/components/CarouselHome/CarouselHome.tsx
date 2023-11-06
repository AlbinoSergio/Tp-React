import Carousel from 'react-bootstrap/Carousel';


const CarouselHome = () => {
  return (
    <Carousel>
    <Carousel.Item interval={1000}>
      <img 
      className='d block w-100'
      style={{maxHeight: "500px", objectFit: 'cover'}}
      src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
      alt="slide 1" 
      
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>

    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img 
      className='d block w-100'
      style={{maxHeight: "500px", objectFit: 'cover'}}
      src="https://images.pexels.com/photos/16129703/pexels-photo-16129703/free-photo-of-hombre-escritorio-trabajando-sentado.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
      " alt="slide2" />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      
      <img 
      className='d block w-100'
      style={{maxHeight: "500px", objectFit: 'cover'}}
      src="https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
      alt="slide3" />
      <Carousel.Caption>
        <h3>Somos el mejor equipo de Aplicaciones Agiles</h3>
        <p>
          Te Brindamos todo el ascesorameinto en Desarrollo de Software
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default CarouselHome