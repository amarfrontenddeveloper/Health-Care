import React from 'react';

const Health = () => {
    return (
        <div className="health_section layout_padding">
      <div className="container">
         <h1 className="health_taital">Best Of Health care for you</h1>
         <p className="health_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
         <div className="health_section layout_padding">
            <div className="row">
               <div className="col-sm-7">
                  <div className="image_main">
                     <div className="main">
                        <img src="images/img-2.png" alt="Avatar" className="image" style={{width:"100%"}}/>
                     </div>
                     <div className="middle">
                        <div className="text"><img src="images/icon-1.png" style={{width: "40px"}}/></div>
                     </div>
                  </div>
               </div>
               <div className="col-sm-5">
                  <div className="image_main_1">
                     <div className="main">
                        <img src="images/img-3.png" alt="Avatar" className="image" style={{width:"100%"}}/>
                     </div>
                     <div className="middle">
                        <div className="text"><img src="images/icon-1.png" style={{width: "40px"}}/></div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="getquote_bt_1"><a href="#">Read More <span><img src="images/right-arrow.png"/></span></a></div>
         </div>
      </div>
   </div>
    );
};

export default Health;