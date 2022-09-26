import React from 'react';

const Home = () => {
    return (
        <div id="main_slider" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
           <div className="carousel-item active">
              <div className="banner_section">
                 <div className="container">
                    <div className="row">
                       <div className="col-md-6">
                          <h1 className="banner_taital">Health <br/><span style={{color: "#151515"}}>Care</span></h1>
                          <p className="banner_text">There are many variations of passages of Lorem Ipsum</p>
                          <div className="btn_main">
                             <div className="more_bt"><a href="#">Contact Now</a></div>
                             <div className="contact_bt"><a href="#">Get A Quote</a></div>
                          </div>
                       </div>
                       <div className="col-md-6">
                          <div className="image_1"><img src="images/img-1.png"/></div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
           <div className="carousel-item">
              <div className="banner_section">
                 <div className="container">
                    <div className="row">
                       <div className="col-md-6">
                          <h1 className="banner_taital">Health <br/><span style={{color: "#151515"}}>Care</span></h1>
                          <p className="banner_text">There are many variations of passages of Lorem Ipsum</p>
                          <div className="btn_main">
                             <div className="more_bt"><a href="#">Contact Now</a></div>
                             <div className="contact_bt"><a href="#">Get A Quote</a></div>
                          </div>
                       </div>
                       <div className="col-md-6">
                          <div className="image_1"><img src="images/img-1.png"/></div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
           <div className="carousel-item">
              <div className="banner_section">
                 <div className="container">
                    <div className="row">
                       <div className="col-md-6">
                          <h1 className="banner_taital">Health <br/><span style={{color: "#151515"}}>Care</span></h1>
                          <p className="banner_text">There are many variations of passages of Lorem Ipsum</p>
                          <div className="btn_main">
                             <div className="more_bt"><a href="#">Contact Now</a></div>
                             <div className="contact_bt"><a href="#">Get A Quote</a></div>
                          </div>
                       </div>
                       <div className="col-md-6">
                          <div className="image_1"><img src="images/img-1.png"/></div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
        <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
           <i className="fa fa-long-arrow-left" ></i>
        </a>
        <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
           <i className="fa fa-long-arrow-right"></i>
        </a>
     </div>
    );
};

export default Home;