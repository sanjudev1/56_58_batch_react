import Carousel from 'react-bootstrap/Carousel';


function CustomCoursel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className='w-100' style={{height:300}} src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSOVXSkuQr-sJAMZSJsSLG39-G5AJsvflx2gm7M-lYmBWduiuUueT0sgvzpTE1c0g4pSPrOb83tkBTuzpTUPOSdlkiP2vvEINHo1MQ3AKKamL4gSHlkzovK" text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='w-100' style={{height:300}} src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSOVXSkuQr-sJAMZSJsSLG39-G5AJsvflx2gm7M-lYmBWduiuUueT0sgvzpTE1c0g4pSPrOb83tkBTuzpTUPOSdlkiP2vvEINHo1MQ3AKKamL4gSHlkzovK" text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='w-100' style={{height:300}} src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSOVXSkuQr-sJAMZSJsSLG39-G5AJsvflx2gm7M-lYmBWduiuUueT0sgvzpTE1c0g4pSPrOb83tkBTuzpTUPOSdlkiP2vvEINHo1MQ3AKKamL4gSHlkzovK" text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CustomCoursel;