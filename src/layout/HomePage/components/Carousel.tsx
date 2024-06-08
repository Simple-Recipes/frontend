import React, { useEffect } from 'react';


export const Carousel = () => {
  useEffect(() => {
    
  }, []);

  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={require('./../../../Image/1.png')} className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Example headline</h5>
            <p>11111</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">explore</a>
          </div>
        </div>
        <div className="carousel-item">
          <img src={require('./../../../Image/2.jpg')} className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Another example headline</h5>
            <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </div>
        </div>
        <div className="carousel-item">
          <img src={require('./../../../Image/background.png')} className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5>One more for good measure</h5>
            <p>Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">Browse gallery</a>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}
