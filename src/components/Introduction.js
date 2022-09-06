import Carousel from 'react-bootstrap/Carousel';

function Introduction() {
  return (
    <Carousel style={{marginTop:'30px'}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:'500px'}}
          src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="slide1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-30"
          style={{height:'500px'}}
          src="https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="slide2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-30"
          style={{height:'500px'}}
          src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="slide3"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Introduction;
