import React from 'react'
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
function Carousell() {
  return (
    <div>
      <MDBCarousel showControls showIndicators>
      <MDBCarouselItem itemId={1}>
        <img src='https://images-static.naikaa.com/beauty-blog/wp-content/uploads/2024/01/best-lipstick-brands-banner.jpg' className='d-block w-100'style={{height:"400px"}} alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src='https://media.allure.com/photos/62269d1da96cfc87d2abb579/3:2/w_3000,h_2000,c_limit/3-04%20best%20nail%20polish%20brands.jpg' className='d-block w-100'style={{height:"400px"}} alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src='https://www.shutterstock.com/image-vector/ad-banner-natural-beauty-products-260nw-1780339220.jpg' className='d-block w-100'style={{height:"400px"}} alt='...' />
      </MDBCarouselItem>
    </MDBCarousel>
    </div>
  )
}

export default Carousell
